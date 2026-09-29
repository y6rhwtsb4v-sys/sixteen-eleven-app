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
  G=android/app/build.gradle
  sed -i.bak -E "s/versionCode [0-9]+/versionCode $BUILD/; s/versionName \"[^\"]*\"/versionName \"$VERSION\"/" "$G" && rm -f "$G.bak"
  echo "Android project ready: version $VERSION ($BUILD)"
fi
