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
import com.google.common.util.concurrent.ListenableFuture;
import java.util.ArrayList;
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

    private final Runnable ticker = new Runnable() {
        @Override
        public void run() {
            tick();
            main.postDelayed(this, 250);
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
            Context ctx = getContext();
            SessionToken token = new SessionToken(ctx, new ComponentName(ctx, NarratorService.class));
            final ListenableFuture<MediaController> f = new MediaController.Builder(ctx, token).buildAsync();
            connecting = f;
            f.addListener(() -> {
                try {
                    controller = f.get();
                    controller.addListener(listener);
                    then.run(controller);
                } catch (Exception e) {
                    call.reject("The player could not start: " + e.getMessage());
                }
            }, ContextCompat.getMainExecutor(ctx));
        });
    }

    @PluginMethod
    public void load(final PluginCall call) {
        JSArray arr = call.getArray("items");
        final int index = call.getInt("index", 0);
        final double fraction = call.getDouble("fraction", 0.0);
        final float rate = call.getFloat("rate", 1f);
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
            c.setPlaybackSpeed(rate);
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
        withController(call, c -> {
            c.setPlaybackSpeed(rate);
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
    protected void handleOnDestroy() {
        main.removeCallbacks(ticker);
        if (connecting != null) MediaController.releaseFuture(connecting);
        controller = null;
        super.handleOnDestroy();
    }
}
