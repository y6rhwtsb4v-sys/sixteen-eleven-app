package com.sixteeneleven.narrator;

import android.app.PendingIntent;
import android.content.Intent;
import androidx.annotation.Nullable;
import androidx.annotation.OptIn;
import androidx.media3.common.AudioAttributes;
import androidx.media3.common.C;
import androidx.media3.common.Player;
import androidx.media3.common.util.UnstableApi;
import androidx.media3.exoplayer.ExoPlayer;
import androidx.media3.session.MediaSession;
import androidx.media3.session.MediaSessionService;

/**
 * Holds the player for the recorded narration. As a media session service it
 * runs in the foreground with the usual "now playing" notification while
 * reading, so Android does not stop it when the screen is off or another app
 * is open, and the lock screen, headphones and car controls all work.
 */
@OptIn(markerClass = UnstableApi.class)
public class NarratorService extends MediaSessionService {

    @Nullable
    private MediaSession session;

    @Override
    public void onCreate() {
        super.onCreate();
        ExoPlayer player = new ExoPlayer.Builder(this)
            .setAudioAttributes(
                new AudioAttributes.Builder()
                    .setUsage(C.USAGE_MEDIA)
                    .setContentType(C.AUDIO_CONTENT_TYPE_SPEECH)
                    .build(),
                /* handleAudioFocus= */ true)
            // pull the headphones out and it pauses, as a player should
            .setHandleAudioBecomingNoisy(true)
            // keep the CPU and Wi-Fi awake while streaming with the screen off
            .setWakeMode(C.WAKE_MODE_NETWORK)
            .build();
        MediaSession.Builder builder = new MediaSession.Builder(this, player);
        Intent launch = getPackageManager().getLaunchIntentForPackage(getPackageName());
        if (launch != null) {
            // tapping the notification opens the app
            builder.setSessionActivity(PendingIntent.getActivity(this, 0, launch,
                PendingIntent.FLAG_IMMUTABLE | PendingIntent.FLAG_UPDATE_CURRENT));
        }
        session = builder.build();
    }

    @Nullable
    @Override
    public MediaSession onGetSession(MediaSession.ControllerInfo controllerInfo) {
        return session;
    }

    @Override
    public void onTaskRemoved(@Nullable Intent rootIntent) {
        // Swiping the app away while it reads leaves it reading (the
        // notification can stop it); swiping it away while paused ends it.
        if (session == null) {
            stopSelf();
            return;
        }
        Player player = session.getPlayer();
        if (!player.getPlayWhenReady() || player.getMediaItemCount() == 0
                || player.getPlaybackState() == Player.STATE_ENDED) {
            stopSelf();
        }
    }

    @Override
    public void onDestroy() {
        if (session != null) {
            session.getPlayer().release();
            session.release();
            session = null;
        }
        super.onDestroy();
    }
}
