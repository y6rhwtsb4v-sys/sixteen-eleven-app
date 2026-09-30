import Foundation
import UIKit
import Capacitor
import AVFoundation
import MediaPlayer

/// Plays the recorded narration with the system's own player.
///
/// The web view cannot be trusted to start the next clip once the screen is
/// locked: iOS suspends its JavaScript. So the whole queue (this chapter and
/// the ones after it) is handed over here, and AVQueuePlayer moves from clip
/// to clip by itself. The page only listens: "item" when a clip starts,
/// "progress" four times a second, "state" on play/pause, "ended" at the end.
@objc(NarratorPlugin)
public class NarratorPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "NarratorPlugin"
    public let jsName = "Narrator"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "load", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "play", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "pause", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "stop", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "seek", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "setRate", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "getState", returnType: CAPPluginReturnPromise)
    ]

    private struct Clip {
        let url: URL
        let title: String
        let album: String
    }

    private let player = AVQueuePlayer()
    private var clips: [Clip] = []
    private var index = 0
    private var rate: Float = 1
    private var artist = "Sixteen Eleven"
    private var wantPlaying = false
    private var pendingFraction: Double = 0
    private var current: AVPlayerItem?
    private var statusObservation: NSKeyValueObservation?
    private var controlObservation: NSKeyValueObservation?
    private var timeObserver: Any?
    private var remoteReady = false

    override public func load() {
        let nc = NotificationCenter.default
        nc.addObserver(self, selector: #selector(clipFinished(_:)),
                       name: .AVPlayerItemDidPlayToEndTime, object: nil)
        nc.addObserver(self, selector: #selector(clipFinished(_:)),
                       name: .AVPlayerItemFailedToPlayToEndTime, object: nil)
        nc.addObserver(self, selector: #selector(interrupted(_:)),
                       name: AVAudioSession.interruptionNotification,
                       object: AVAudioSession.sharedInstance())
        controlObservation = player.observe(\.timeControlStatus, options: [.new]) { [weak self] _, _ in
            DispatchQueue.main.async {
                guard let self = self, !self.clips.isEmpty else { return }
                self.notifyListeners("state", data: ["playing": self.player.timeControlStatus != .paused])
                self.updateNowPlaying()
            }
        }
        timeObserver = player.addPeriodicTimeObserver(
            forInterval: CMTime(seconds: 0.25, preferredTimescale: 600), queue: .main) { [weak self] _ in
            self?.tick()
        }
    }

    // MARK: - calls from the page

    @objc func load(_ call: CAPPluginCall) {
        let raw = call.getArray("items", JSObject.self) ?? []
        var list: [Clip] = []
        for o in raw {
            guard let s = o["url"] as? String, let u = URL(string: s) else { continue }
            list.append(Clip(url: u, title: (o["title"] as? String) ?? "",
                             album: (o["album"] as? String) ?? ""))
        }
        let start = call.getInt("index") ?? 0
        let fraction = call.getDouble("fraction") ?? 0
        let r = call.getFloat("rate") ?? 1
        let who = call.getString("artist") ?? "Sixteen Eleven"
        DispatchQueue.main.async {
            guard !list.isEmpty, start >= 0, start < list.count else {
                call.reject("Nothing to play.")
                return
            }
            self.activateSession()
            self.setUpRemote()
            self.clips = list
            self.rate = r
            self.artist = who
            self.start(at: start, fraction: fraction, play: true)
            call.resolve()
        }
    }

    @objc func play(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            self.resume()
            call.resolve()
        }
    }

    @objc func pause(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            self.wantPlaying = false
            self.player.pause()
            call.resolve()
        }
    }

    @objc func stop(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            self.halt()
            call.resolve()
        }
    }

    @objc func seek(_ call: CAPPluginCall) {
        let i = call.getInt("index") ?? index
        let f = call.getDouble("fraction") ?? 0
        DispatchQueue.main.async {
            self.start(at: i, fraction: f, play: self.wantPlaying)
            call.resolve()
        }
    }

    @objc func setRate(_ call: CAPPluginCall) {
        let r = call.getFloat("rate") ?? 1
        DispatchQueue.main.async {
            self.rate = r
            if self.player.rate > 0 { self.player.rate = r }
            self.updateNowPlaying()
            call.resolve()
        }
    }

    @objc func getState(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            let d = self.current?.duration.seconds ?? 0
            call.resolve([
                "index": self.index,
                "position": self.player.currentTime().seconds.isFinite ? self.player.currentTime().seconds : 0,
                "duration": d.isFinite ? d : 0,
                "playing": self.player.timeControlStatus != .paused
            ])
        }
    }

    // MARK: - the queue

    private func makeItem(_ i: Int) -> AVPlayerItem {
        let item = AVPlayerItem(url: clips[i].url)
        item.audioTimePitchAlgorithm = .timeDomain   // clearest for speech at other speeds
        return item
    }

    /// Start (or restart) at clip i. Only the clip playing and the one after it
    /// are ever queued; each is added as the one before it begins.
    private func start(at i: Int, fraction: Double, play: Bool) {
        guard i >= 0, i < clips.count else { return }
        index = i
        player.removeAllItems()
        let first = makeItem(i)
        player.insert(first, after: nil)
        if i + 1 < clips.count { player.insert(makeItem(i + 1), after: first) }
        current = first
        pendingFraction = fraction
        statusObservation = first.observe(\.status, options: [.new]) { [weak self] item, _ in
            DispatchQueue.main.async { self?.itemStatusChanged(item) }
        }
        notifyListeners("item", data: ["index": index])
        if play {
            wantPlaying = true
            player.playImmediately(atRate: rate)
        }
        updateNowPlaying()
    }

    private func itemStatusChanged(_ item: AVPlayerItem) {
        guard item === current else { return }
        if item.status == .readyToPlay {
            if pendingFraction > 0 {
                let d = item.duration.seconds
                if d.isFinite && d > 0 {
                    item.seek(to: CMTime(seconds: d * pendingFraction, preferredTimescale: 600),
                              completionHandler: nil)
                }
                pendingFraction = 0
            }
            updateNowPlaying()
        } else if item.status == .failed {
            advance()
        }
    }

    @objc private func clipFinished(_ note: Notification) {
        guard let ended = note.object as? AVPlayerItem else { return }
        DispatchQueue.main.async {
            guard ended === self.current else { return }
            self.advance()
        }
    }

    /// The clip in hand is done: move to the next, which the queue player has
    /// normally started already.
    private func advance() {
        index += 1
        if index >= clips.count {
            wantPlaying = false
            current = nil
            notifyListeners("ended", data: [:])
            MPNowPlayingInfoCenter.default().nowPlayingInfo = nil
            return
        }
        if let next = player.currentItem, next !== current {
            current = next
            statusObservation = next.observe(\.status, options: [.new]) { [weak self] item, _ in
                DispatchQueue.main.async { self?.itemStatusChanged(item) }
            }
            if index + 1 < clips.count { player.insert(makeItem(index + 1), after: next) }
            if wantPlaying && player.rate == 0 { player.playImmediately(atRate: rate) }
            notifyListeners("item", data: ["index": index])
            updateNowPlaying()
        } else {
            // the queue ran dry (a clip failed to load): rebuild from here
            start(at: index, fraction: 0, play: wantPlaying)
        }
    }

    private func resume() {
        guard !clips.isEmpty else { return }
        activateSession()
        wantPlaying = true
        if player.currentItem == nil {
            start(at: index, fraction: 0, play: true)
        } else {
            player.playImmediately(atRate: rate)
        }
    }

    private func halt() {
        wantPlaying = false
        player.pause()
        player.removeAllItems()
        clips = []
        current = nil
        statusObservation = nil
        MPNowPlayingInfoCenter.default().nowPlayingInfo = nil
    }

    private func tick() {
        // nobody is looking while the app is in the background; sending these
        // would only pile up for the page to work through when it comes back
        guard UIApplication.shared.applicationState == .active else { return }
        guard let item = current, player.timeControlStatus == .playing else { return }
        let d = item.duration.seconds
        let p = player.currentTime().seconds
        guard d.isFinite, d > 0, p.isFinite else { return }
        notifyListeners("progress", data: ["index": index, "position": p, "duration": d])
    }

    // MARK: - system

    private func activateSession() {
        let s = AVAudioSession.sharedInstance()
        try? s.setCategory(.playback, mode: .spokenAudio, options: [])
        try? s.setActive(true)
    }

    @objc private func interrupted(_ note: Notification) {
        guard let info = note.userInfo,
              let raw = info[AVAudioSessionInterruptionTypeKey] as? UInt,
              let type = AVAudioSession.InterruptionType(rawValue: raw) else { return }
        DispatchQueue.main.async {
            if type == .ended, self.wantPlaying,
               let o = info[AVAudioSessionInterruptionOptionKey] as? UInt,
               AVAudioSession.InterruptionOptions(rawValue: o).contains(.shouldResume) {
                self.resume()
            }
        }
    }

    /// Lock screen, Control Centre, headphones and CarPlay buttons.
    private func setUpRemote() {
        if remoteReady { return }
        remoteReady = true
        let c = MPRemoteCommandCenter.shared()
        c.playCommand.addTarget { [weak self] _ in
            self?.resume(); return .success
        }
        c.pauseCommand.addTarget { [weak self] _ in
            self?.wantPlaying = false; self?.player.pause(); return .success
        }
        c.togglePlayPauseCommand.addTarget { [weak self] _ in
            guard let self = self else { return .commandFailed }
            if self.player.timeControlStatus == .paused { self.resume() } else {
                self.wantPlaying = false; self.player.pause()
            }
            return .success
        }
        c.nextTrackCommand.addTarget { [weak self] _ in
            guard let self = self, self.index + 1 < self.clips.count else { return .noActionableNowPlayingItem }
            self.start(at: self.index + 1, fraction: 0, play: true)
            return .success
        }
        c.previousTrackCommand.addTarget { [weak self] _ in
            guard let self = self, !self.clips.isEmpty else { return .noActionableNowPlayingItem }
            // like any player: back to the start of this passage, or the one before
            if self.player.currentTime().seconds > 3 || self.index == 0 {
                self.player.seek(to: .zero)
            } else {
                self.start(at: self.index - 1, fraction: 0, play: true)
            }
            return .success
        }
        c.changePlaybackPositionCommand.addTarget { [weak self] e in
            guard let self = self, let e = e as? MPChangePlaybackPositionCommandEvent else { return .commandFailed }
            self.player.seek(to: CMTime(seconds: e.positionTime, preferredTimescale: 600))
            return .success
        }
    }

    private func updateNowPlaying() {
        guard index < clips.count, !clips.isEmpty else { return }
        let clip = clips[index]
        var info: [String: Any] = [
            MPMediaItemPropertyTitle: clip.title,
            MPMediaItemPropertyArtist: artist,
            MPMediaItemPropertyAlbumTitle: clip.album,
            MPNowPlayingInfoPropertyPlaybackRate: player.rate,
            MPNowPlayingInfoPropertyDefaultPlaybackRate: rate,
            MPNowPlayingInfoPropertyPlaybackQueueIndex: index,
            MPNowPlayingInfoPropertyPlaybackQueueCount: clips.count
        ]
        let p = player.currentTime().seconds
        if p.isFinite { info[MPNowPlayingInfoPropertyElapsedPlaybackTime] = p }
        if let d = current?.duration.seconds, d.isFinite, d > 0 {
            info[MPMediaItemPropertyPlaybackDuration] = d
        }
        if let icon = NarratorPlugin.artwork {
            info[MPMediaItemPropertyArtwork] = icon
        }
        MPNowPlayingInfoCenter.default().nowPlayingInfo = info
    }

    /// The app icon on the lock screen, taken from the web assets.
    private static let artwork: MPMediaItemArtwork? = {
        guard let url = Bundle.main.url(forResource: "icon-512", withExtension: "png",
                                        subdirectory: "public/assets/icons"),
              let image = UIImage(contentsOfFile: url.path) else { return nil }
        return MPMediaItemArtwork(boundsSize: image.size) { _ in image }
    }()
}
