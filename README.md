# High Hook Charters

Native iPhone/iPad SwiftUI app plus a static Vercel web app conversion for High Hook Fishing Charters in Duxbury, MA.

## What is built

- Static web app served from `index.html`, `styles.css`, and `app.js`.
  - Mirrors the native app's official header artwork, navy/yellow chart UI, marine cards, bottom dock, trip finder, booking inquiry, Weather, Trip Hub, Reports, Contact, local Captain Mode, local data export/clear, and Trip Packet flows.
- Adaptive iPhone/iPad app shell.
  - iPhone: tabbed navigation for Trips, Weather, Prep, Reports, and Contact.
  - iPad: same bottom dock navigation as iPhone, scaled for tablet.
- Trip finder with 2026 rates for Striped Bass, Race Point, Bluefin Tuna, Haddock/Cod, Shark Fishing, and Kids Camp.
- Booking inquiry sheet with selected trip, party size, preferred date, notes, and confirmation state.
- Weather go/no-go screen and captain decision model.
- Client prep checklist with local checked state.
- Fishing reports and gallery preview.
- Contact, departure, store, kids camp, and regulations screens.
- Project-bound charter boat imagery and app icon asset.

## Build

### Web

No build step is required for the Vercel web app.

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

Production URL: https://dux-fishing.vercel.app

### iOS

```bash
xcodegen generate
xcodebuild -project HighHookCharters.xcodeproj -scheme HighHookCharters -destination 'generic/platform=iOS Simulator' build
```

The generated Xcode project is checked in for convenience, but `project.yml` is the source of truth.

## Verified

- Browser automation with system Chrome verified the web app has no console/page errors, no mobile horizontal overflow, working booking-to-Trip-Hub state, Trip Packet preview, Captain Mode unlock, and Weather admin controls.
- `xcodegen generate` succeeded.
- `xcodebuild` simulator build succeeded.
- XcodeBuildMCP build/install/launch succeeded on:
  - iPhone 17 Pro simulator, iOS 26.4
  - iPad Pro 13-inch (M5) simulator, iOS 26.4
- Screenshots inspected for iPhone and iPad; the iPhone hero overflow found during QA was fixed.

## Production integrations to add next

- Live booking delivery: email, CRM, Supabase, or Square/Stripe deposit flow.
- Live weather/tide/marine forecast service and captain override.
- Current NOAA/MA recreational fishing regulations feed or manually managed admin data.
- Real trip reports/photo gallery CMS.
- Push notifications for weather decisions, captain messages, and trip reminders.
- Branded app icon set and App Store screenshots.
