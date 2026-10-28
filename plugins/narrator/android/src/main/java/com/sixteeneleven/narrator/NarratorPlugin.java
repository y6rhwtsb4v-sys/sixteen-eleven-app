package com.sixteeneleven.narrator;

import android.content.ComponentName;
import android.content.Context;
import android.net.Uri;
import android.os.Handler;
import android.os.Looper;
import androidx.annotation.Nullable;
import androidx.annotation.OptIn;
import androidx.core.content.ContextCompat;
import androidx.media3.common.C;
import androidx.media3.common.MediaItem;
import androidx.media3.common.MediaMetadata;
import androidx.media3.common.PlaybackException;
import androidx.media3.common.PlaybackParameters;
import androidx.media3.common.Player;
import androidx.media3.common.util.UnstableApi;
import androidx.media3.session.MediaController;
import androidx.media3.session.SessionToken;
import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.google.android.play.core.review.ReviewInfo;
import com.google.android.play.core.review.ReviewManager;
import com.google.android.play.core.review.ReviewManagerFactory;
import com.google.common.util.concurrent.ListenableFuture;
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.List;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * The page's handle on NarratorService. The whole queue (this chapter and the
 * ones after it) goes to the service's player, which moves from clip to clip
 * by itself; the page only listens for "item", "progress", "state" and
 * "ended". Everything touching the controller runs on the main thread.
 */
@OptIn(markerClass = UnstableApi.class)
@CapacitorPlugin(name = "Narrator")
public class NarratorPlugin extends Plugin {

    private final Handler main = new Handler(Looper.getMainLooper());
    @Nullable private MediaController controller;
    @Nullable private ListenableFuture<MediaController> connecting;
    private double pendingFraction = 0;
    private boolean pendingPlay = false;
    /** calls that arrived while the first connection was still being made */
    private static final class Waiting {
        final PluginCall call; final WithController then;
        Waiting(PluginCall c, WithController t) { call = c; then = t; }
    }
    private final List<Waiting> waiting = new ArrayList<>();
    /** the page is hidden: progress is not sent (it only redraws the page) */
    private boolean inBackground = false;

    private final Runnable ticker = new Runnable() {
        @Override
        public void run() {
            if (!inBackground) tick();
            main.postDelayed(this, inBackground ? 2000 : 250);
        }
    };

    private final Player.Listener listener = new Player.Listener() {
        @Override
        public void onMediaItemTransition(@Nullable MediaItem item, int reason) {
            if (controller == null || controller.getMediaItemCount() == 0) return;
            JSObject d = new JSObject();
            d.put("index", controller.getCurrentMediaItemIndex());
            notifyListeners("item", d);
        }

        @Override
        public void onPlayWhenReadyChanged(boolean playWhenReady, int reason) {
            if (controller == null || controller.getMediaItemCount() == 0) return;
            JSObject d = new JSObject();
            d.put("playing", playWhenReady);
            notifyListeners("state", d);
        }

        @Override
        public void onIsPlayingChanged(boolean isPlaying) {
            main.removeCallbacks(ticker);
            if (isPlaying) main.post(ticker);
        }

        @Override
        public void onPlaybackStateChanged(int state) {
            if (controller == null) return;
            if (state == Player.STATE_READY && pendingFraction > 0) {
                long dur = controller.getDuration();
                if (dur != C.TIME_UNSET && dur > 0) {
                    controller.seekTo((long) (dur * pendingFraction));
                }
                pendingFraction = 0;
                if (pendingPlay) controller.play();
            }
            if (state == Player.STATE_ENDED) {
                main.removeCallbacks(ticker);
                notifyListeners("ended", new JSObject());
            }
        }

        @Override
        public void onPlayerError(PlaybackException error) {
            // one clip that will not load should not end the reading: skip it
            if (controller == null) return;
            if (controller.hasNextMediaItem()) {
                controller.seekToNextMediaItem();
                controller.prepare();
                controller.play();
            } else {
                notifyListeners("ended", new JSObject());
            }
        }
    };

    private interface WithController {
        void run(MediaController c);
    }

    /** Connect to the service (starting it if need be), then run. */
    private void withController(final PluginCall call, final WithController then) {
        main.post(() -> {
            if (controller != null && controller.isConnected()) {
                then.run(controller);
                return;
            }
            // one connection at a time: a second call while it is being made
            // waits for it, rather than building another controller
            if (connecting != null && !connecting.isDone()) {
                waiting.add(new Waiting(call, then));
                return;
            }
            Context ctx = getContext();
            SessionToken token = new SessionToken(ctx, new ComponentName(ctx, NarratorService.class));
            final ListenableFuture<MediaController> f = new MediaController.Builder(ctx, token).buildAsync();
            connecting = f;
            waiting.add(new Waiting(call, then));
            f.addListener(() -> {
                List<Waiting> run = new ArrayList<>(waiting);
                waiting.clear();
                try {
                    if (controller != null) controller.removeListener(listener);
                    controller = f.get();
                    controller.addListener(listener);
                    for (Waiting w : run) w.then.run(controller);
                } catch (Exception e) {
                    for (Waiting w : run) w.call.reject("The player could not start: " + e.getMessage());
                }
            }, ContextCompat.getMainExecutor(ctx));
        });
    }

    // ---- narration kept on the device, for listening offline ----

    private final ExecutorService downloads = Executors.newFixedThreadPool(3);

    private File audioFolder() {
        // kept out of Android's Auto Backup, whose 25 MB limit the narration
        // would break (and then nothing of the app, notes included, is backed up)
        File d = new File(getContext().getNoBackupFilesDir(), "narration");
        if (!d.exists()) d.mkdirs();
        return d;
    }

    private static boolean safeName(String n) {
        return n != null && !n.isEmpty() && !n.contains("/") && !n.contains("..");
    }

    @PluginMethod
    public void audioDir(PluginCall call) {
        JSObject r = new JSObject();
        r.put("uri", Uri.fromFile(audioFolder()).toString() + "/");
        call.resolve(r);
    }

    @PluginMethod
    public void download(final PluginCall call) {
        final String url = call.getString("url");
        final String name = call.getString("name");
        if (url == null || !safeName(name)) { call.reject("Nothing to download."); return; }
        downloads.execute(() -> {
            HttpURLConnection c = null;
            try {
                c = (HttpURLConnection) new URL(url).openConnection();
                c.setConnectTimeout(20000);
                c.setReadTimeout(60000);
                int code = c.getResponseCode();
                if (code != 200) { call.reject("The server answered " + code + "."); return; }
                File tmp = new File(audioFolder(), name + "." + System.nanoTime() + ".part");
                try (InputStream in = c.getInputStream(); OutputStream out = new FileOutputStream(tmp)) {
                    byte[] buf = new byte[65536];
                    int n;
                    while ((n = in.read(buf)) > 0) out.write(buf, 0, n);
                }
                File dest = new File(audioFolder(), name);
                if (dest.exists()) dest.delete();
                if (!tmp.renameTo(dest)) { call.reject("The file could not be saved."); return; }
                JSObject r = new JSObject();
                r.put("bytes", dest.length());
                call.resolve(r);
            } catch (Exception e) {
                call.reject(String.valueOf(e.getMessage()));
            } finally {
                if (c != null) c.disconnect();
            }
        });
    }

    @PluginMethod
    public void removeAudio(PluginCall call) {
        File dir = audioFolder();
        int n = 0;
        if (Boolean.TRUE.equals(call.getBoolean("all", false))) {
            File[] all = dir.listFiles();
            if (all != null) for (File f : all) if (f.delete()) n++;
        } else {
            JSArray names = call.getArray("names", new JSArray());
            for (int i = 0; i < names.length(); i++) {
                String nm = names.optString(i, null);
                if (safeName(nm) && new File(dir, nm).delete()) n++;
            }
        }
        JSObject r = new JSObject();
        r.put("removed", n);
        call.resolve(r);
    }

    @PluginMethod
    public void freeSpace(PluginCall call) {
        JSObject r = new JSObject();
        r.put("bytes", audioFolder().getUsableSpace());
        call.resolve(r);
    }

    /** Google Play's in-app rating card. Play decides whether it shows, so
     *  this always resolves. */
    @PluginMethod
    public void requestReview(final PluginCall call) {
        try {
            final ReviewManager manager = ReviewManagerFactory.create(getContext());
            manager.requestReviewFlow().addOnCompleteListener(task -> {
                if (!task.isSuccessful() || getActivity() == null) { call.resolve(); return; }
                ReviewInfo info = task.getResult();
                manager.launchReviewFlow(getActivity(), info).addOnCompleteListener(t -> call.resolve());
            });
        } catch (Exception e) {
            call.resolve();
        }
    }

    @PluginMethod
    public void load(final PluginCall call) {
        JSArray arr = call.getArray("items");
        final int index = call.getInt("index", 0);
        final double fraction = call.getDouble("fraction", 0.0);
        final float rate = call.getFloat("rate", 1f);
        final boolean tape = call.getBoolean("varispeed", false);
        String artist = call.getString("artist", "Sixteen Eleven");
        final List<MediaItem> list = new ArrayList<>();
        try {
            for (int i = 0; arr != null && i < arr.length(); i++) {
                JSONObject o = arr.getJSONObject(i);
                MediaMetadata md = new MediaMetadata.Builder()
                    .setTitle(o.optString("title", ""))
                    .setArtist(artist)
                    .setAlbumTitle(o.optString("album", ""))
                    .build();
                list.add(new MediaItem.Builder()
                    .setUri(Uri.parse(o.getString("url")))
                    .setMediaId(String.valueOf(i))
                    .setMediaMetadata(md)
                    .build());
            }
        } catch (JSONException e) {
            call.reject("Bad list of clips.");
            return;
        }
        if (list.isEmpty() || index < 0 || index >= list.size()) {
            call.reject("Nothing to play.");
            return;
        }
        withController(call, c -> {
            pendingFraction = fraction;
            pendingPlay = true;
            c.setMediaItems(list, index, 0);
            // "Solemn": the pitch follows the speed, a little lower as well as slower
            c.setPlaybackParameters(new PlaybackParameters(rate, tape ? rate : 1f));
            // with a place to seek to inside the first clip, wait for it to
            // load, seek, then play (see onPlaybackStateChanged)
            c.setPlayWhenReady(fraction <= 0);
            c.prepare();
            call.resolve();
        });
    }

    @PluginMethod
    public void play(final PluginCall call) {
        withController(call, c -> {
            if (c.getPlaybackState() == Player.STATE_IDLE) c.prepare();
            c.play();
            call.resolve();
        });
    }

    @PluginMethod
    public void pause(final PluginCall call) {
        withController(call, c -> {
            pendingPlay = false;
            c.pause();
            call.resolve();
        });
    }

    @PluginMethod
    public void stop(final PluginCall call) {
        withController(call, c -> {
            pendingPlay = false;
            pendingFraction = 0;
            c.stop();
            c.clearMediaItems();
            main.removeCallbacks(ticker);
            call.resolve();
        });
    }

    @PluginMethod
    public void seek(final PluginCall call) {
        final int index = call.getInt("index", 0);
        final double fraction = call.getDouble("fraction", 0.0);
        withController(call, c -> {
            if (index < 0 || index >= c.getMediaItemCount()) {
                call.reject("No such clip.");
                return;
            }
            pendingPlay = c.getPlayWhenReady();
            pendingFraction = fraction;
            if (fraction > 0) c.setPlayWhenReady(false);
            c.seekTo(index, 0);
            call.resolve();
        });
    }

    @PluginMethod
    public void setRate(final PluginCall call) {
        final float rate = call.getFloat("rate", 1f);
        final boolean tape = call.getBoolean("varispeed", false);
        withController(call, c -> {
            c.setPlaybackParameters(new PlaybackParameters(rate, tape ? rate : 1f));
            call.resolve();
        });
    }

    @PluginMethod
    public void getState(final PluginCall call) {
        withController(call, c -> {
            JSObject d = new JSObject();
            d.put("index", c.getCurrentMediaItemIndex());
            d.put("position", c.getCurrentPosition() / 1000.0);
            long dur = c.getDuration();
            d.put("duration", dur == C.TIME_UNSET ? 0 : dur / 1000.0);
            d.put("playing", c.getPlayWhenReady());
            call.resolve(d);
        });
    }

    private void tick() {
        if (controller == null || !controller.isPlaying()) return;
        long dur = controller.getDuration();
        if (dur == C.TIME_UNSET || dur <= 0) return;
        JSObject d = new JSObject();
        d.put("index", controller.getCurrentMediaItemIndex());
        d.put("position", controller.getCurrentPosition() / 1000.0);
        d.put("duration", dur / 1000.0);
        notifyListeners("progress", d);
    }

    @Override
    protected void handleOnPause() {
        inBackground = true;
        super.handleOnPause();
    }

    @Override
    protected void handleOnResume() {
        inBackground = false;
        super.handleOnResume();
    }

    @Override
    protected void handleOnDestroy() {
        main.removeCallbacks(ticker);
        if (connecting != null) MediaController.releaseFuture(connecting);
        controller = null;
        super.handleOnDestroy();
    }
}
