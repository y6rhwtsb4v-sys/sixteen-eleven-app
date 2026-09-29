# Sixteen Eleven Bible: the store apps

The App Store and Google Play versions, built with Capacitor 8 around the web
app in `www/`. GitHub builds them in the cloud, so no Mac is needed.

## One-time setup

1. **GitHub:** the repository `sixteen-eleven-app` holds this folder.
2. **Apple** (developer.apple.com and appstoreconnect.apple.com):
   - Identifiers → register the App ID `com.sixteeneleven.bible` with **In-App Purchase** on.
   - App Store Connect → My Apps → **+ New App**: iOS, name "Sixteen Eleven Bible", bundle ID above, SKU `sixteeneleven`.
   - Users and Access → Integrations → **App Store Connect API** → generate a key with the **App Manager** role. Download the .p8 (only once), note the Key ID and Issuer ID.
   - In GitHub → Settings → Secrets and variables → Actions, add `APPLE_TEAM_ID`, `ASC_KEY_ID`, `ASC_ISSUER_ID`, `ASC_KEY_P8` (paste the whole .p8 file).
3. **Google Play Console** ($25 once): create the app "Sixteen Eleven Bible", free, and fill the store listing from `STORE.md`.
4. **RevenueCat:** follow `STORE.md`, then put the two SDK keys into `src/app.js` (`PAY.keys`).

## Build

- **iOS:** GitHub → Actions → *iOS to TestFlight* → Run workflow. About 20 minutes later the build is in TestFlight.
- **Android:** GitHub → Actions → *Android bundle* → Run workflow. Download the `.aab` from the run.
  - Before the first run, add a secret `ANDROID_KEY_PASSWORD`: a long password you make up and keep in a password manager.
  - After the first run, download **upload-key**, and paste the text of `ANDROID_KEYSTORE_B64.txt` into a secret `ANDROID_KEYSTORE_B64`. The file is encrypted with your password, so it is safe even though the repository is public.
  - Upload the first `.aab` by hand in Play Console → Testing → Internal testing. After that, adding a `PLAY_SERVICE_ACCOUNT_JSON` secret sends builds there automatically.

## Updating the app

Replace `www/` with the new `DEPLOY-THIS` site, bump the version when you run the workflow. The build number goes up by itself.

## What `scripts/prepare.sh` adds to Capacitor's template

- Background audio, so narration keeps playing with the screen locked, and playback through the silent switch.
- `ITSAppUsesNonExemptEncryption = NO`.
- Icons and splash screens from `assets/` (dark, the XVI / XI mark).
- Version and build number.
