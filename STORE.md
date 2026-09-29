# Sixteen Eleven Bible: store setup

Everything to type into App Store Connect, the Google Play Console and RevenueCat.
Bundle / package ID for both stores: **com.sixteeneleven.bible** (change it in
`capacitor.config.json`, `fastlane/Fastfile` and `.github/workflows/android.yml`
before the first upload if you want a different one; it can never change after).

## Listing

- **Name:** Sixteen Eleven Bible
- **Subtitle (iOS, 30 max):** KJV with Apocrypha, offline
- **Short description (Play, 80 max):** The King James Bible with the Apocrypha. Beautiful, offline, no ads.
- **Category:** Reference (iOS primary), Books (secondary). Play: Books & Reference.
- **Keywords (iOS, 100 max):** kjv,bible,apocrypha,king james,audio bible,strongs,scripture,study,offline,1611
- **Description:**

  The King James Bible, all 80 books with the Apocrypha, set like a book and made to be read.

  Free, and free of ads: every book, every theme and text size, reading aloud, highlights in five colours, notes, bookmarks, search, cross references, and the 1611 glossary that explains the old words as you tap them.

  Sixteen Eleven Study goes deeper: word study with Webster's 1913, where words come from, a thesaurus and Strong's Hebrew and Greek; study sheets that walk a theme through the whole Bible; tags and linked verses in your notes; bookmark folders; the whole atlas; two books open at once on iPad; and as many of your own EPUB, PDF and text books as you like.

  The narrated Bible reads all 80 books in one human voice, and plays offline. Psalms and John are free to hear.

  Everything you write stays on your device. No account, no tracking.

  The text is the 1769 Oxford standard edition of the King James Version.

- **What's new (1.0):** First release.
- **Support URL / Marketing URL:** https://sixteeneleven.bible (support email scribe@sixteeneleven.bible)
- **Privacy policy URL:** https://sixteeneleven.bible/privacy.html (the page is in the site you deploy)

## In-app products

Create these with **exactly** these IDs in both stores.

| ID | Type | Price | Notes |
|---|---|---|---|
| `study_annual` | Auto-renewable subscription | $29.99 / year | Group "Study". 14-day free trial (Apple: introductory offer, free, 2 weeks; Play: free trial phase 14 days) |
| `study_monthly` | Auto-renewable subscription | $3.99 / month | Same group |
| `lifetime_founders` | Non-consumable (Play: one-time product) | $79.99 | Study for good plus the narrated Bible |
| `audio_bible` | Non-consumable | $19.99 | The narrated Bible |
| `tip_small` | Consumable | $1.99 | "Keep the lamp lit" |
| `tip_medium` | Consumable | $4.99 | |
| `tip_large` | Consumable | $9.99 | |

Google Play: a subscription is a product with a base plan. Make `study_annual` with base plan `yearly` (plus the 14-day free-trial offer), and `study_monthly` with base plan `monthly`.

## RevenueCat

1. Make a project, then add an **App Store** app (bundle ID above, plus the App Store Connect In-App Purchase key) and a **Play Store** app (package name above, plus a Play service-account JSON).
2. **Entitlements:** `study` and `audio`.
   - `study` ← study_annual, study_monthly, lifetime_founders
   - `audio` ← audio_bible, lifetime_founders
3. **Offerings:**
   - `default` (make it Current): packages **Annual** ($rc_annual → study_annual), **Monthly** ($rc_monthly → study_monthly), **Lifetime** ($rc_lifetime → lifetime_founders)
   - `audio`: one custom package with identifier `audio` → audio_bible
   - `tips`: custom packages `tip_small`, `tip_medium`, `tip_large`
4. Copy the two **public SDK keys** (they start `appl_` and `goog_`) into `PAY.keys` near the top of the "Sixteen Eleven Study" section of `src/app.js`, rebuild, and copy the new site into `www/`.

## App Privacy (iOS) / Data safety (Play)

- Data collected: **Purchases → Purchase history**, used for app functionality, not linked to identity, no tracking (RevenueCat).
- **Identifiers → Device or other ID:** a random app user ID made by RevenueCat, app functionality, not linked, no tracking.
- Nothing else. No analytics, no advertising, no location, no contacts. Notes, highlights and imported books never leave the device.
- Play: data is encrypted in transit; users can't request deletion because nothing personal is kept (say so).

## Age rating

No objectionable content. The Bible contains descriptions of violence; on Apple's questionnaire answer "Infrequent/Mild" for realistic violence to be safe (rating 12+), or "None" for 4+ if you prefer. Play: IARC questionnaire, category Reference.

## App Review notes (paste into "Notes for review")

> Sixteen Eleven is an offline King James Bible. Reading, listening with the device voice, highlights, notes and search are free. The Study subscription and the one-time Narrated Bible purchase unlock extra study tools and narration; test them with the sandbox account. "Restore purchases" is in the paywall and in Settings. The narration is an AI rendering of the narrator's own voice, which the app states in Settings.

## Export compliance

The app uses only standard HTTPS. `ITSAppUsesNonExemptEncryption` is set to false by `scripts/prepare.sh`, so there is nothing to file.

## UK

In the UK the KJV is under Crown copyright (Cambridge University Press administers it). Leave the UK out of the storefronts until CUP says yes.
