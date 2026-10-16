#!/bin/bash
# Makes the native project for one platform from scratch, the same way every
# time: add the platform, copy the web app in, make the icons and splash,
# then set what Capacitor's template leaves out.
#   bash scripts/prepare.sh ios|android
# Needs: npm install done. iOS must run on a Mac (the GitHub workflow does).
set -e
P=${1:?ios or android}
cd "$(dirname "$0")/.."
VERSION=${APP_VERSION:-$(node -p "require('./package.json').version")}
BUILD=${BUILD_NUMBER:-1}
[ -d "$P" ] || npx cap add "$P"
npx cap sync "$P"
npx capacitor-assets generate --"$P" --iconBackgroundColor '#171412' --iconBackgroundColorDark '#171412' \
  --splashBackgroundColor '#171412' --splashBackgroundColorDark '#171412'

if [ "$P" = ios ]; then
  PL=ios/App/App/Info.plist
  PB=/usr/libexec/PlistBuddy
  # narration keeps playing with the screen locked or another app open
  $PB -c "Delete :UIBackgroundModes" "$PL" 2>/dev/null || true
  $PB -c "Add :UIBackgroundModes array" "$PL"
  $PB -c "Add :UIBackgroundModes:0 string audio" "$PL"
  # only standard HTTPS: no export-compliance paperwork for each build
  $PB -c "Delete :ITSAppUsesNonExemptEncryption" "$PL" 2>/dev/null || true
  $PB -c "Add :ITSAppUsesNonExemptEncryption bool false" "$PL"
  $PB -c "Set :CFBundleDisplayName Sixteen Eleven" "$PL" 2>/dev/null || \
    $PB -c "Add :CFBundleDisplayName string Sixteen Eleven" "$PL"
  # a shared verse picture can be saved to Photos from the share sheet; without
  # this line iOS closes the app the moment "Save Image" is tapped
  $PB -c "Delete :NSPhotoLibraryAddUsageDescription" "$PL" 2>/dev/null || true
  $PB -c "Add :NSPhotoLibraryAddUsageDescription string Sixteen Eleven saves the verse pictures you make to your photos." "$PL"
  # imported books: let the Files app show the app's documents
  $PB -c "Delete :LSSupportsOpeningDocumentsInPlace" "$PL" 2>/dev/null || true
  $PB -c "Add :LSSupportsOpeningDocumentsInPlace bool false" "$PL"
  # audio that plays through the silent switch, like any audio Bible
  AD=ios/App/App/AppDelegate.swift
  if ! grep -q AVAudioSession "$AD"; then
    sed -i '' 's/^import Capacitor$/import Capacitor\
import AVFoundation/' "$AD"
    sed -i '' 's|// Override point for customization after application launch.|try? AVAudioSession.sharedInstance().setCategory(.playback, mode: .spokenAudio)|' "$AD"
  fi
  echo "iOS project ready: version $VERSION ($BUILD)"
fi

if [ "$P" = android ]; then
  # reading reminders: the small icon in the status bar (white, an open book),
  # and the permission Android 13 asks for before showing a notification
  DR=android/app/src/main/res/drawable
  mkdir -p "$DR"
  cat > "$DR/ic_stat_reading.xml" <<'XML'
<vector xmlns:android="http://schemas.android.com/apk/res/android"
    android:width="24dp" android:height="24dp" android:viewportWidth="24" android:viewportHeight="24">
  <path android:fillColor="#FFFFFFFF"
      android:pathData="M12,6.5C10.3,5.2 7.9,4.5 5,4.5C4,4.5 3,4.6 2,4.8V19.3C3,19.1 4,19 5,19C7.9,19 10.3,19.7 12,21C13.7,19.7 16.1,19 19,19C20,19 21,19.1 22,19.3V4.8C21,4.6 20,4.5 19,4.5C16.1,4.5 13.7,5.2 12,6.5ZM11,18.4C9.4,17.5 7.4,17 5,17C4.7,17 4.3,17 4,17V6.5C4.3,6.5 4.7,6.5 5,6.5C7.4,6.5 9.4,7.1 11,8.2V18.4ZM20,17C19.7,17 19.3,17 19,17C16.6,17 14.6,17.5 13,18.4V8.2C14.6,7.1 16.6,6.5 19,6.5C19.3,6.5 19.7,6.5 20,6.5V17Z"/>
</vector>
XML
  M=android/app/src/main/AndroidManifest.xml
  grep -q POST_NOTIFICATIONS "$M" || \
    sed -i.bak 's|</manifest>|    <uses-permission android:name="android.permission.POST_NOTIFICATIONS" />\n</manifest>|' "$M" && rm -f "$M.bak"
  G=android/app/build.gradle
  sed -i.bak -E "s/versionCode [0-9]+/versionCode $BUILD/; s/versionName \"[^\"]*\"/versionName \"$VERSION\"/" "$G" && rm -f "$G.bak"
  echo "Android project ready: version $VERSION ($BUILD)"
fi
