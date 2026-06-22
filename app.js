const assets = {
  header:
    "./HighHookCharters/Resources/Assets.xcassets/HighHookHeader.imageset/high-hook-header.jpg",
  logo:
    "./HighHookCharters/Resources/Assets.xcassets/HighHookLogo.imageset/high-hook-logo.png",
  heroDawn: "./assets/lovable-reference/hero-dawn.jpg",
  tripImages: {
    "bass-local": "./assets/lovable-reference/cat-bass.jpg",
    "race-point": "./assets/lovable-reference/cat-racepoint.jpg",
    bluefin: "./assets/lovable-reference/cat-tuna.jpg",
    "haddock-cod": "./assets/lovable-reference/cat-cod.jpg",
    shark: "./assets/lovable-reference/cat-tuna.jpg",
    "kids-camp": "./assets/lovable-reference/gallery-bass.jpg",
    "ladies-night": "./assets/lovable-reference/hero-dawn.jpg",
  },
  gallery: [
    "./assets/lovable-reference/gallery-cod.jpg",
    "./assets/lovable-reference/gallery-bass.jpg",
    "./assets/lovable-reference/hero-dawn.jpg",
  ],
};

const trips = [
  {
    id: "bass-local",
    name: "Striped Bass Local",
    icon: "fish",
    duration: "Half day",
    season: "May through October",
    target: "Striped bass and bluefish",
    capacity: "1-6 anglers",
    bestFor: "Families, first timers, steady local action",
    price: "$825 1-4, $850 5, $875 6",
    deposit: "$100 deposit",
    details:
      "Fish Duxbury, Plymouth, Marshfield, Scituate, Cohasset, Quincy and Boston Harbor with light tackle, trolling, live bait or casting depending on the bite.",
    prep: ["Soft-soled shoes", "Light rain shell", "Sunglasses", "Snacks and drinks"],
  },
  {
    id: "race-point",
    name: "Race Point Striped Bass",
    icon: "waves",
    duration: "5 hours",
    season: "Peak migration windows",
    target: "Trophy striped bass",
    capacity: "Up to 6 anglers",
    bestFor: "Groups chasing a bigger run",
    price: "$1,250 half day",
    deposit: "$100 deposit",
    details:
      "A longer run to Race Point for a chance at larger schools and heavier fish when the Cape bite lines up.",
    prep: ["Wind layer", "Hat with retention", "Camera", "Motion sickness plan"],
  },
  {
    id: "bluefin",
    name: "Bluefin Tuna",
    icon: "radio",
    duration: "8 hours",
    season: "Offshore season",
    target: "Bluefin tuna",
    capacity: "1-6 anglers",
    bestFor: "Serious crews ready for an offshore day",
    price: "$1,550 1-4, $1,600 5, $1,650 6",
    deposit: "$300 deposit",
    details:
      "Offshore tuna trip with stand-up gear, trolling, casting or live bait strategy based on reports and conditions.",
    prep: ["Packed lunch", "Warm layer", "Waterproof bag", "Non-marking deck shoes"],
  },
  {
    id: "haddock-cod",
    name: "Haddock / Cod",
    icon: "anchor",
    duration: "6 or 8 hours",
    season: "Groundfish windows",
    target: "Haddock and cod",
    capacity: "1-6 anglers",
    bestFor: "Filling the cooler and learning bottom fishing",
    price: "$1,550 3/4 day, $1,750 full day",
    deposit: "$300 deposit",
    details:
      "Bottom fishing structure and ledges for haddock and cod, with rigging and fish handling handled by the crew.",
    prep: ["Cooler in the car", "Food and drinks", "Deck-safe footwear", "Extra layers"],
  },
  {
    id: "shark",
    name: "Shark Fishing",
    icon: "sailboat",
    duration: "Full day",
    season: "Summer offshore",
    target: "Shark species",
    capacity: "1-6 anglers",
    bestFor: "High-adrenaline groups and experienced anglers",
    price: "$1,650 1-4, $1,750 5-6",
    deposit: "$300 deposit",
    details:
      "A full offshore day built around chumming, heavy tackle and safe catch-and-release handling.",
    prep: ["Sun protection", "Full lunch", "Camera", "Comfortable layered clothing"],
  },
  {
    id: "kids-camp",
    name: "High Hook Kids Camp",
    icon: "kids",
    duration: "4 days, 8am-12pm",
    season: "Summer sessions",
    target: "Fishing, ecology and safe boating",
    capacity: "Ages 6-16",
    bestFor: "Kids who love the ocean or want to learn",
    price: "$600 per camper",
    deposit: "Full payment at sign-up",
    details:
      "Four mornings of fishing, knot tying, lures, fish ID, boating safety and South Shore marine life.",
    prep: ["Sunscreen", "Water bottle", "Snack", "Life jacket if preferred"],
  },
  {
    id: "ladies-night",
    name: "Ladies Night Fishing",
    icon: "moon",
    duration: "Evening session",
    season: "Select summer dates",
    target: "Striped bass, bluefish and harbor sunset",
    capacity: "Private groups",
    bestFor: "Friend groups, relaxed after-work outings and first timers",
    price: "Ask for current availability",
    deposit: "Confirmed with captain",
    details:
      "A social, approachable evening fishing session for groups who want an easy on-ramp to High Hook without committing to a full offshore day.",
    prep: ["Light jacket", "Sunglasses", "Snacks and drinks", "Camera"],
  },
];

const goals = [
  ["firstTimer", "First timer", "sparkles", "bass-local", "Local striped bass is the easiest, most reliable way to get a new crew hooked."],
  ["family", "Family", "users", "bass-local", "Half-day local trips keep the day manageable while still feeling like a real charter."],
  ["trophy", "Trophy fish", "star", "race-point", "Race Point is the better fit when the group wants a shot at heavier striped bass."],
  ["offshore", "Offshore", "radio", "bluefin", "Bluefin tuna is the serious all-day offshore choice with the biggest upside."],
  ["social", "Social night", "moon", "ladies-night", "Ladies Night is a lower-pressure evening session for friend groups and first timers."],
  ["kids", "Kids camp", "kids", "kids-camp", "Kids Camp turns fishing, boating safety and marine life into four hands-on mornings."],
];

const reminderKinds = [
  ["nightBefore", "Night-before weather check", "Evening before departure", "sun"],
  ["dockArrival", "Dock arrival", "Morning-of dock window", "location"],
  ["prepChecklist", "Prep checklist", "One day before trip", "checklist"],
  ["postTripPhotos", "Post-trip photos", "After the boat returns", "photo"],
];

const defaultReports = [
  {
    date: "Jun 18",
    title: "Bass stacked tight on moving water",
    note: "Early outgoing tide produced the cleanest topwater shots. Keep the rod tip down when the bluefish show.",
    condition: "62F water",
    publishedAt: "2026-06-18T19:00:00.000Z",
  },
  {
    date: "Jun 15",
    title: "Groundfish bite steady east of the bay",
    note: "Haddock responded well to lighter rigs. Cod released cleanly when the drift slowed.",
    condition: "2 ft swell",
    publishedAt: "2026-06-15T19:00:00.000Z",
  },
  {
    date: "Jun 11",
    title: "Tuna windows opening offshore",
    note: "Scattered marks and bird life. The next settled-weather stretch is worth watching.",
    condition: "10 kt wind",
    publishedAt: "2026-06-11T19:00:00.000Z",
  },
];

const regulations = [
  ["Massachusetts saltwater rules", "Striped bass, bluefish, sharks and state-water species can change by season. Check the official DMF table before keeping fish.", "Mass.gov · updated Apr 28, 2026", "https://www.mass.gov/info-details/recreational-saltwater-fishing-regulations", "fish"],
  ["Atlantic bluefin tuna", "Bluefin retention limits can be adjusted or closed during the season. Captain handles permits and final retention calls.", "NOAA HMS · current bag limits", "https://www.fisheries.noaa.gov/atlantic-highly-migratory-species/recreational-atlantic-bluefin-tuna-fishery-statuses-and-bag", "radio"],
  ["Groundfish: haddock and cod", "Haddock and cod limits depend on area, season and species. Confirm before any cooler-filling trip.", "NOAA Northeast Multispecies", "https://www.fisheries.noaa.gov/species/northeast-multispecies-groundfish/recreational", "anchor"],
];

const darkCharters = [
  {
    id: "bluefin",
    name: "Bluefin Tuna",
    type: "Offshore",
    duration: "8 Hours",
    party: "1-6 People",
    price: "$1,550+",
    image: assets.tripImages.bluefin,
    description: "Run offshore for bluefin tuna with stand-up gear, trolling, casting or live bait strategy based on Stellwagen reports and conditions.",
    included: ["Rods, reels & tackle", "USCG licensed captain", "Ice & fish handling", "Captain weather call"],
  },
  {
    id: "haddock-cod",
    name: "Haddock / Cod",
    type: "Offshore",
    duration: "6 or 8 Hours",
    party: "1-6 People",
    price: "$1,550+",
    image: assets.tripImages["haddock-cod"],
    description: "Bottom-fish productive structure and ledges for haddock and cod, with rigging and fish handling handled by the crew.",
    included: ["Bottom rigs & tackle", "USCG licensed captain", "Cooler guidance", "Fish handling"],
  },
  {
    id: "bass-local",
    name: "Striped Bass Local",
    type: "Inshore",
    duration: "Half Day",
    party: "1-6 People",
    price: "$825+",
    image: assets.tripImages["bass-local"],
    description: "Fish Duxbury, Plymouth, Marshfield, Scituate, Cohasset, Quincy and Boston Harbor with light tackle, trolling, live bait or casting.",
    included: ["Light tackle", "Local fish intel", "Captain weather call", "Family friendly pacing"],
  },
  {
    id: "race-point",
    name: "Race Point Striped Bass",
    type: "Inshore",
    duration: "5 Hours",
    party: "1-6 People",
    price: "$1,250",
    image: assets.tripImages["race-point"],
    description: "A longer run to Race Point for a chance at larger schools and heavier striped bass when the Cape bite lines up.",
    included: ["Heavy striped bass gear", "Cape run planning", "Captain weather call", "Photo-ready catch handling"],
  },
  {
    id: "shark",
    name: "Shark Fishing",
    type: "Offshore",
    duration: "Full Day",
    party: "1-6 People",
    price: "$1,650+",
    image: assets.tripImages.shark,
    description: "A full offshore day built around chumming, heavy tackle and safe catch-and-release handling.",
    included: ["Heavy tackle", "Chumming setup", "Safe release handling", "Captain weather call"],
  },
  {
    id: "kids-camp",
    name: "High Hook Kids Camp",
    type: "Kids Camp",
    duration: "4 Mornings",
    party: "Ages 6-16",
    price: "$600",
    image: assets.tripImages["kids-camp"],
    description: "Three days of fishing the local waters, learning spots, techniques, live bait, fish ID, boating safety and South Shore marine life.",
    included: ["Fishing basics", "Knot tying", "Fish ID", "Boating safety"],
  },
  {
    id: "ladies-night",
    name: "Ladies Night Fishing",
    type: "Ladies Night",
    duration: "Evening Session",
    party: "Private Groups",
    price: "Ask",
    image: assets.heroDawn,
    description: "A social, approachable evening fishing session for groups who want an easy on-ramp to High Hook.",
    included: ["Light tackle", "Sunset timing", "Relaxed instruction", "Captain weather call"],
  },
];

const darkBookings = [
  ["Oct 12, 2026", "Bluefin Tuna", "4 People", "$1,600", "Confirmed"],
  ["Jun 20, 2026", "Striped Bass Local", "5 People", "$850", "Awaiting captain"],
  ["Aug 10, 2026", "High Hook Kids Camp", "1 Camper", "$600", "Completed"],
];

const darkCrew = [
  ["Capt. Willie Woodruff", "Owner / Captain", "USCG Licensed · CPR & First Aid Certified", assets.tripImages.bluefin],
  ["High Hook Mate", "Deckhand / Mate", "Rigging, fish handling and deck safety", assets.gallery[1]],
  ["Youth Camp Crew", "Kids Camp Support", "Fishing basics, knots and marine-life coaching", assets.tripImages["kids-camp"]],
];

const darkLocations = [
  ["High Hook Dock", "25 Mattakeesett Ct, Duxbury, MA 02332", assets.heroDawn],
  ["Duxbury Bay", "Local bass, bluefish, youth camp and evening sessions", assets.tripImages["bass-local"]],
  ["Race Point", "Cape Cod trophy striped bass run", assets.tripImages["race-point"]],
  ["Stellwagen Bank", "Bluefin tuna, haddock and cod windows", assets.tripImages.bluefin],
];

const darkNotifications = [
  ["Booking Confirmed", "Your Bluefin Tuna request is saved locally for captain review.", "2m ago", "check"],
  ["Weather Update", "Local striped bass trips look comfortable. Offshore still needs evening review.", "1h ago", "sun"],
  ["New Report Added", "A fresh deck report was added to The Catch.", "1d ago", "images"],
  ["Trip Reminder", "Prep checklist and dock-arrival reminders are ready in Trip Hub.", "2d ago", "clock"],
];

const galleryPhotos = [
  { src: assets.tripImages.bluefin, category: "Offshore", title: "Bluefin tuna on deck" },
  { src: assets.gallery[1], category: "Offshore", title: "Captain with tuna" },
  { src: assets.tripImages["bass-local"], category: "Inshore", title: "Local striped bass" },
  { src: assets.heroDawn, category: "Inshore", title: "Duxbury Bay morning" },
  { src: assets.header, category: "Nearshore", title: "High Hook underway" },
  { src: assets.tripImages["haddock-cod"], category: "Offshore", title: "Haddock and cod grounds" },
  { src: assets.gallery[0], category: "Nearshore", title: "South Shore run" },
  { src: assets.tripImages["kids-camp"], category: "Inshore", title: "Kids camp catch" },
];

const store = {
  get(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

const state = {
  tab: store.get("highHook.web.hasSeenOnboarding", false) ? "home" : "onboarding",
  selectedTripId: "bluefin",
  selectedGoal: "firstTimer",
  selectedLocationIndex: store.get("highHook.web.selectedLocationIndex", 0),
  bookingParty: 2,
  bookingFilter: store.get("highHook.web.bookingFilter", "Upcoming"),
  modal: null,
  bookingSuccess: null,
  captainMode: store.get("highHook.web.captainMode", false),
  inquiries: store.get("highHook.web.inquiries", []),
  reminders: store.get("highHook.web.reminders", {}),
  checklist: store.get("highHook.web.checklist", {}),
  reports: store.get("highHook.web.reports", defaultReports),
  charterFilter: store.get("highHook.web.charterFilter", "All"),
  galleryFilter: store.get("highHook.web.galleryFilter", "All"),
  selectedPhotoIndex: store.get("highHook.web.selectedPhotoIndex", 0),
  likedPhotos: store.get("highHook.web.likedPhotos", []),
  readNotifications: store.get("highHook.web.readNotifications", []),
  settings: store.get("highHook.web.settings", {
    push: true,
    email: true,
    darkMode: true,
  }),
  weather: store.get("highHook.web.weather", {
    localCall: "Green",
    offshoreCall: "Watch",
    nextUpdate: "7:00 PM",
    note:
      "Local striped bass trips look comfortable. Offshore trips still need a captain review after the evening forecast update.",
    updatedAt: "2026-06-19T00:00:00.000Z",
    metrics: [
      ["Wind", "8 kt SW", "Good", "wind"],
      ["Swell", "1.5 ft", "Fishable", "waves"],
      ["Tide", "Outgoing 8:40", "Prime", "tide"],
      ["Water", "62F", "Active", "sun"],
    ],
  }),
};

const app = document.querySelector("#app");
const today = new Date();
const dateInputValue = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);

function trip(id = state.selectedTripId) {
  return trips.find((item) => item.id === id) || trips[0];
}

function h(strings, ...values) {
  return strings.reduce((out, part, index) => out + part + (values[index] ?? ""), "");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function fmtDate(value) {
  const date = /^\d{4}-\d{2}-\d{2}$/.test(String(value))
    ? new Date(`${value}T12:00:00`)
    : new Date(value);
  return date.toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" });
}

function iconSvg(name) {
  const paths = {
    fish: '<path d="M4 12c3.2-4.2 8.3-5.4 13.4-2.8 1.4.7 2.7 1.7 3.6 2.8-.9 1.1-2.2 2.1-3.6 2.8C12.3 17.4 7.2 16.2 4 12Z"/><path d="m4 12-2.5-3.2v6.4L4 12Z"/><circle cx="15.5" cy="11" r=".8"/><path d="M8.5 9.5c1.2 1.6 1.2 3.4 0 5"/>',
    waves: '<path d="M3 8c2 0 2-1.3 4-1.3S9 8 11 8s2-1.3 4-1.3S17 8 21 8"/><path d="M3 13c2 0 2-1.3 4-1.3S9 13 11 13s2-1.3 4-1.3S17 13 21 13"/><path d="M3 18c2 0 2-1.3 4-1.3S9 18 11 18s2-1.3 4-1.3S17 18 21 18"/>',
    radio: '<circle cx="12" cy="12" r="2.4"/><path d="M7.5 7.5a6.4 6.4 0 0 0 0 9"/><path d="M16.5 7.5a6.4 6.4 0 0 1 0 9"/><path d="M4.8 4.8a10.2 10.2 0 0 0 0 14.4"/><path d="M19.2 4.8a10.2 10.2 0 0 1 0 14.4"/>',
    anchor: '<circle cx="12" cy="5" r="2"/><path d="M12 7v13"/><path d="M7 10h10"/><path d="M5 15c.8 3.2 3.2 5 7 5s6.2-1.8 7-5"/><path d="m5 15 3-1"/><path d="m19 15-3-1"/>',
    sailboat: '<path d="M5 20h14"/><path d="M7 17h10l-2 3H9l-2-3Z"/><path d="M11 4v13"/><path d="M11 5 5 16h6V5Z"/><path d="M12 7l6 9h-6V7Z"/>',
    kids: '<circle cx="8" cy="7" r="2"/><circle cx="16" cy="7" r="2"/><path d="M8 9v6"/><path d="M16 9v6"/><path d="M8 12h8"/><path d="M6 21l2-6 2 6"/><path d="M14 21l2-6 2 6"/>',
    moon: '<path d="M19 15.5A8 8 0 0 1 8.5 5a7 7 0 1 0 10.5 10.5Z"/>',
    sparkles: '<path d="M12 2.5 13.8 8l5.7 1.8-5.7 1.8L12 17l-1.8-5.4-5.7-1.8L10.2 8 12 2.5Z"/><path d="M5 16.5 5.8 19l2.7.8-2.7.8L5 23l-.8-2.4-2.7-.8 2.7-.8.8-2.5Z"/>',
    users: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.4"/><path d="M3.5 20c.7-3.7 2.5-5.5 5.5-5.5s4.8 1.8 5.5 5.5"/><path d="M14.5 15.5c2.5.2 4.2 1.7 5 4.5"/>',
    star: '<path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v3"/><path d="M12 19v3"/><path d="M2 12h3"/><path d="M19 12h3"/><path d="m4.9 4.9 2.1 2.1"/><path d="m17 17 2.1 2.1"/><path d="m19.1 4.9-2.1 2.1"/><path d="m7 17-2.1 2.1"/>',
    cloud: '<path d="M17.5 19H8.5a6 6 0 1 1 5.8-7.5h2.2a3.75 3.75 0 1 1 1 7.5Z"/>',
    "cloud-sun": '<path d="M12 2v2"/><path d="m4.9 4.9 1.4 1.4"/><path d="M20 12h2"/><path d="m19.1 4.9-1.4 1.4"/><path d="M16 12.7A4 4 0 0 0 10.1 8.5"/><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"/>',
    "cloud-rain": '<path d="M4 15a7 7 0 1 1 11.7-7h1.8a4.5 4.5 0 0 1 2.5 8.2"/><path d="M8 14v6"/><path d="M12 16v6"/><path d="M16 14v6"/>',
    droplets: '<path d="M7 16.3a4 4 0 0 0 4-4c0-1.2-.6-2.2-1.7-3.2S7.3 6.8 7 5.3C6.7 6.8 5.9 8.1 4.7 9.1S3 11.1 3 12.3a4 4 0 0 0 4 4Z"/><path d="M12.6 6.6A11 11 0 0 0 14 3c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a7 7 0 0 1-11.9 5"/>',
    eye: '<path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
    sunrise: '<path d="M12 2v8"/><path d="m8 6 4-4 4 4"/><path d="M2 22h20"/><path d="M4 18h2"/><path d="M18 18h2"/><path d="m4.9 10.9 1.4 1.4"/><path d="m19.1 10.9-1.4 1.4"/><path d="M16 18a4 4 0 0 0-8 0"/>',
    sunset: '<path d="M12 10V2"/><path d="m16 6-4 4-4-4"/><path d="M2 22h20"/><path d="M4 18h2"/><path d="M18 18h2"/><path d="m4.9 10.9 1.4 1.4"/><path d="m19.1 10.9-1.4 1.4"/><path d="M16 18a4 4 0 0 0-8 0"/>',
    compass: '<circle cx="12" cy="12" r="10"/><path d="m16.2 7.8-1.8 5.4a2 2 0 0 1-1.2 1.2l-5.4 1.8 1.8-5.4a2 2 0 0 1 1.2-1.2l5.4-1.8Z"/>',
    checklist: '<path d="M9 5h10v15H5V5h2"/><path d="M9 5a3 3 0 0 1 6 0"/><path d="m8 12 2 2 4-4"/><path d="M15 13h2"/><path d="M8 17h9"/>',
    doc: '<path d="M7 3h7l4 4v14H7V3Z"/><path d="M14 3v5h5"/><path d="M10 12h6"/><path d="M10 16h6"/><path d="M10 8h2"/>',
    share: '<path d="M12 15V4"/><path d="m7 9 5-5 5 5"/><path d="M5 13v6h14v-6"/>',
    photo: '<rect x="4" y="5" width="16" height="14" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m5 17 4.5-4 3 2.6 2.5-2.1 4 3.5"/>',
    phone: '<path d="M7 4h10v16H7z"/><path d="M10 18h4"/>',
    location: '<path d="M12 21s7-5.7 7-12a7 7 0 1 0-14 0c0 6.3 7 12 7 12Z"/><circle cx="12" cy="9" r="2.5"/>',
    wind: '<path d="M3 8h11a3 3 0 1 0-3-3"/><path d="M3 12h16a3 3 0 1 1-3 3"/><path d="M3 16h8"/>',
    tide: '<path d="M12 3v14"/><path d="m7 12 5 5 5-5"/><path d="M5 21h14"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    calendar: '<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4"/><path d="M16 3v4"/><path d="M4 10h16"/>',
    back: '<path d="M19 12H5"/><path d="m11 6-6 6 6 6"/>',
    arrow: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
    card: '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18"/><path d="M7 15h4"/>',
    envelope: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',
    bell: '<path d="M10.3 21a2 2 0 0 0 3.4 0"/><path d="M4 16.5c1.3-1.4 2-3 2-7a6 6 0 0 1 12 0c0 4 0.7 5.6 2 7 .5.5.1 1.5-.7 1.5H4.7c-.8 0-1.2-1-.7-1.5Z"/>',
    home: '<path d="M4 11 12 4l8 7"/><path d="M6 10.5V20h12v-9.5"/><path d="M10 20v-6h4v6"/>',
    images: '<rect x="8" y="3" width="13" height="13" rx="2"/><path d="M16 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h3"/><path d="m9 14 2.4-2.4a1.2 1.2 0 0 1 1.7 0L16 14.5"/><circle cx="16" cy="8" r="1"/>',
    ellipsis: '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
    settings: '<path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/><path d="M19.4 15a1.8 1.8 0 0 0 .4 2l.1.1a2.1 2.1 0 1 1-3 3l-.1-.1a1.8 1.8 0 0 0-2-.4 1.8 1.8 0 0 0-1 1.6V21a2.1 2.1 0 1 1-4.2 0v-.1a1.8 1.8 0 0 0-1-1.6 1.8 1.8 0 0 0-2 .4l-.1.1a2.1 2.1 0 1 1-3-3l.1-.1a1.8 1.8 0 0 0 .4-2 1.8 1.8 0 0 0-1.6-1H2.3a2.1 2.1 0 1 1 0-4.2h.1a1.8 1.8 0 0 0 1.6-1 1.8 1.8 0 0 0-.4-2l-.1-.1a2.1 2.1 0 1 1 3-3l.1.1a1.8 1.8 0 0 0 2 .4 1.8 1.8 0 0 0 1-1.6V2.3a2.1 2.1 0 1 1 4.2 0v.1a1.8 1.8 0 0 0 1 1.6 1.8 1.8 0 0 0 2-.4l.1-.1a2.1 2.1 0 1 1 3 3l-.1.1a1.8 1.8 0 0 0-.4 2 1.8 1.8 0 0 0 1.6 1h.1a2.1 2.1 0 1 1 0 4.2H21a1.8 1.8 0 0 0-1.6 1.2Z"/>',
    lock: '<rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
    "lock-open": '<rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 7.6-1.8"/>',
    person: '<circle cx="12" cy="8" r="3"/><path d="M5 21c.8-4 3.1-6 7-6s6.2 2 7 6"/>',
    map: '<path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Z"/><path d="M9 3v15"/><path d="M15 6v15"/>',
    bag: '<path d="M6 8h12l1 13H5L6 8Z"/><path d="M9 8a3 3 0 0 1 6 0"/>',
    shield: '<path d="M12 3 20 6v6c0 5-3.4 8-8 10-4.6-2-8-5-8-10V6l8-3Z"/>',
    emergency: '<path d="M12 4v16"/><path d="M4 12h16"/>',
    dollar: '<path d="M12 3v18"/><path d="M16 7.5c-1.2-1-2.6-1.5-4.2-1.3-2.2.2-3.8 1.3-3.8 3 0 4 8 2.3 8 6.4 0 1.8-1.6 3.1-4 3.1-1.8 0-3.3-.5-4.5-1.5"/>',
    check: '<path d="m5 13 4 4L19 7"/>',
    x: '<path d="M6 6 18 18"/><path d="M18 6 6 18"/>',
    warning: '<path d="M12 3 22 20H2L12 3Z"/><path d="M12 9v5"/><path d="M12 17h.01"/>',
  };
  if (!paths[name]) return `<span class="glyph-fallback">${escapeHtml(name)}</span>`;
  return `<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true">${paths[name]}</svg>`;
}

function iconLabel(name, label) {
  return `<span class="icon-label">${iconSvg(name)}<span>${label}</span></span>`;
}

function card(content, className = "") {
  return `<section class="marine-card ${className}">${content}</section>`;
}

function sectionHeader(title, subtitle) {
  return `<div class="section-header"><h2>${title}</h2><p>${subtitle}</p></div>`;
}

function tile(label, value, icon = "") {
  return `<div class="tile"><span class="label">${label}</span><b>${icon ? iconLabel(icon, value) : value}</b></div>`;
}

function row(icon, title, detail) {
  return `<div class="row"><span class="icon-well">${iconSvg(icon)}</span><div><b>${title}</b><p>${detail}</p></div></div>`;
}

function setTab(tab) {
  const darkTripSelect = document.querySelector("#darkTripSelect");
  if (darkTripSelect) state.selectedTripId = darkTripSelect.value;
  state.tab = tab;
  state.modal = null;
  if (!["onboarding", "login", "sign-up", "forgot-password"].includes(tab)) {
    store.set("highHook.web.hasSeenOnboarding", true);
  }
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function selectTrip(id) {
  state.selectedTripId = id;
  render();
}

function openBooking() {
  state.modal = "booking";
  render();
}

function closeModal() {
  state.modal = null;
  render();
}

function matchingInquiries() {
  return state.inquiries
    .filter((item) => item.tripId === state.selectedTripId)
    .sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt));
}

function checklistItems(currentTrip = trip()) {
  return [
    "Confirm departure: 25 Mattakeesett Ct, Duxbury, MA 02332",
    "Watch for the captain's weather text the evening before",
    ...currentTrip.prep,
    "Leave large coolers in the vehicle until fish return dockside",
  ];
}

function renderTrips() {
  const current = trip();
  const selectedGoal = goals.find((goal) => goal[0] === state.selectedGoal) || goals[0];
  const matched = trip(selectedGoal[3]);
  return h`
    <main class="screen stack">
      <header class="app-header">
        <div>
          <p class="eyebrow">Duxbury, Massachusetts</p>
          <h1>High Hook Charters</h1>
        </div>
        <button class="icon-button" aria-label="Notifications">${iconSvg("bell")}</button>
      </header>

      <section class="hero-card">
        <img src="${assets.heroDawn}" alt="Cockpit of High Hook at dawn on Massachusetts Bay" />
        <div class="hero-shade"></div>
        <div class="hero-copy">
          <span class="opening-pill"><span></span>Next opening</span>
          <h2>October Bluefin Run</h2>
          <p>Capt. Willie at the helm. Stellwagen Bank, full day. Two deck spots left for Oct 12.</p>
          <button class="button primary" data-tab="book">${iconLabel("arrow", "Quick book Oct 12")}</button>
        </div>
      </section>

      <section class="weather-strip">
        <p>${iconLabel("location", "25 Mattakeesett Ct · Duxbury, MA")}</p>
        <div class="mini-grid">
          ${tile("Wind", "8 kt SW", "wind")}
          ${tile("Tide", "Outgoing", "waves")}
        </div>
      </section>

      <section class="reference-section">
        <div class="section-kicker">${iconLabel("sparkles", "Plan in 30 seconds")}</div>
        <div class="chip-scroller">
          ${goals.map((goal) => `<button class="chip ${goal[0] === state.selectedGoal ? "is-selected" : ""}" data-goal="${goal[0]}">${iconLabel(goal[2], goal[1])}</button>`).join("")}
        </div>
        <div class="recommendation reference-card">
          <div>
            <span class="label">Recommended</span>
            <h3>${matched.name}</h3>
            <p>${selectedGoal[4]}</p>
          </div>
          <div class="recommendation-footer">
            <div><span class="label">Rate</span><b>${shortRate(matched)}</b></div>
            <button class="button primary compact" data-trip="${matched.id}">${iconLabel("arrow", "See trip")}</button>
          </div>
        </div>
      </section>

      <section class="reference-section" id="charterTypes">
        <div class="section-line">
          <h2>Charter Types</h2>
          <button class="link-button" data-tab="trip-list">View all</button>
        </div>
        <div class="photo-grid">
          ${trips.slice(0, 6).map((item) => `
            <button class="photo-trip ${item.id === current.id ? "is-selected" : ""}" data-trip="${item.id}">
              <img src="${assets.tripImages[item.id]}" alt="${item.name}" />
              <span>${item.name}</span>
              <small>${item.target} · ${shortRate(item)}</small>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="reference-section">
        <div class="section-line">
          <h2>Selected Trip</h2>
          <button class="link-button" data-modal="trip-detail">Details</button>
        </div>
        <div class="selected-trip-panel">
          <div>
            <span class="label">${current.duration}</span>
            <h3>${current.name}</h3>
            <p>${current.details}</p>
          </div>
          <div class="mini-grid">
            ${tile("Crew", current.capacity, "users")}
            ${tile("Rate", current.price, "dollar")}
          </div>
          <button class="button primary block" data-tab="book">Request ${current.name}</button>
        </div>
      </section>

      <section class="reference-section">
        <div class="section-line">
          <h2>Latest from the deck</h2>
          <button class="link-button" data-tab="reports">Full log</button>
        </div>
        <div class="gallery-rail">
          ${[
            ["Oct 5 log", "42 lb Cod · Stellwagen ledge", assets.gallery[0]],
            ["Oct 3 log", '44" Striper · Gurnet Point', assets.gallery[1]],
            ["Oct 1 log", "Dawn run · Duxbury Bay", assets.gallery[2]],
          ].map((item) => `
            <article class="gallery-card">
              <img src="${item[2]}" alt="${item[1]}" />
              <span>${item[0]}</span>
              <p>${item[1]}</p>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="reference-card captain-report">
        <span class="label">Captain's Report</span>
        <h3>Stellwagen temperature drop is moving the big fish south.</h3>
        <p>Water temps hit 58 degrees this morning. Intense surface activity between the southwest corner and middle bank. We're loading heavy stand-up rods all week.</p>
      </section>
    </main>
  `;
}

function shortRate(item) {
  const first = item.price.match(/\$[\d,]+/);
  return first ? `From ${first[0]}` : item.price;
}

function renderTripLineup() {
  return h`
    <main class="screen stack">
      <header class="app-header">
        <div>
          <p class="eyebrow">All charters</p>
          <h1>The Lineup</h1>
        </div>
        <button class="icon-button" aria-label="Notifications">${iconSvg("bell")}</button>
      </header>
      <p class="route-subtitle">Seasonal charters out of Duxbury. Book the trip that matches the bite.</p>
      <section class="lineup-list">
        ${trips.map((item, index) => `
          <button class="lineup-row ${item.id === state.selectedTripId ? "is-selected" : ""}" data-trip="${item.id}">
            <img src="${assets.tripImages[item.id]}" alt="${item.name}" />
            <span>${String(index + 1).padStart(2, "0")}</span>
            <div>
              <h2>${item.name === "Bluefin Tuna" ? "Giant Bluefin" : item.name}</h2>
              <p>${item.target}</p>
              <em>${item.duration}</em>
            </div>
            <strong>${item.id === "race-point" ? "$1,250" : item.id === "kids-camp" ? "$600 / camper" : shortRate(item)}</strong>
            <b>${item.id === "race-point" ? "Race Point, Cape Cod" : item.id === "bluefin" ? "Stellwagen Bank" : item.id === "kids-camp" ? "Inner Duxbury Bay" : item.id === "ladies-night" ? "Duxbury Bay" : item.id === "haddock-cod" ? "Stellwagen ledge" : item.id === "shark" ? "Offshore canyons" : "Duxbury to Boston Harbor"}</b>
          </button>
        `).join("")}
      </section>
    </main>
  `;
}

function renderWeather() {
  const hourly = [
    ["6 AM", "58°", "6 kt", "cloud-sun"],
    ["9 AM", "64°", "8 kt", "sun"],
    ["12 PM", "71°", "10 kt", "sun"],
    ["3 PM", "73°", "12 kt", "cloud-sun"],
    ["6 PM", "68°", "9 kt", "cloud"],
    ["9 PM", "61°", "7 kt", "cloud"],
  ];
  const tides = [
    ["Low", "0.4 ft", "4:12 AM", "waves", false],
    ["High", "9.8 ft", "10:28 AM", "waves", true],
    ["Low", "0.6 ft", "4:41 PM", "waves", false],
    ["High", "10.1 ft", "10:55 PM", "waves", true],
  ];
  const outlook = [
    ["Mon", "8 kt SW", "58°", "74°", "sun"],
    ["Tue", "10 kt S", "57°", "72°", "cloud-sun"],
    ["Wed", "12 kt SW", "56°", "69°", "cloud"],
    ["Thu", "15 kt NE", "55°", "64°", "cloud-rain"],
    ["Fri", "9 kt E", "56°", "70°", "cloud-sun"],
    ["Sat", "7 kt SW", "59°", "75°", "sun"],
    ["Sun", "6 kt S", "61°", "77°", "sun"],
  ];
  const wind = state.weather.metrics.find((metric) => metric[0] === "Wind")?.[1] || "8 kt SW";
  const swell = "2 ft";
  return h`
    <main class="screen stack">
      <header class="app-header">
        <div>
          <p class="eyebrow">Marine forecast</p>
          <h1>Weather</h1>
        </div>
        <button class="icon-button" aria-label="Notifications">${iconSvg("bell")}</button>
      </header>

      <section class="weather-current-card">
        <div class="weather-current-head">
          <div>
            <p class="label">Duxbury Bay · Now</p>
            <h2>68°</h2>
            <p>Partly cloudy · feels 66°</p>
          </div>
          <span class="weather-large-icon">${iconSvg("cloud-sun")}</span>
        </div>
        <div class="weather-metrics-row">
          ${weatherMini("wind", "Wind", compactWind(wind))}
          ${weatherMini("waves", "Swell", swell)}
          ${weatherMini("droplets", "Humid", "62%")}
          ${weatherMini("eye", "Vis", "10 mi")}
        </div>
      </section>

      <section class="reference-section">
        <h2 class="section-kicker">Hourly</h2>
        <div class="hourly-strip">
          ${hourly.map((item) => `<div class="hour-card"><span>${item[0]}</span>${iconSvg(item[3])}<b>${item[1]}</b><small>${item[2]}</small></div>`).join("")}
        </div>
      </section>

      <section class="reference-section">
        <h2 class="section-kicker">Tides today</h2>
        <div class="marine-list">
          ${tides.map((item) => `<div class="marine-list-row"><div>${iconSvg(item[3])}<span>${item[0]}</span></div><p><small>${item[1]}</small><b>${item[2]}</b></p></div>`).join("")}
        </div>
      </section>

      <section class="sun-grid">
        ${weatherInfoCard("sunrise", "Sunrise", "5:08 AM")}
        ${weatherInfoCard("sunset", "Sunset", "8:24 PM")}
      </section>

      <section class="reference-section">
        <h2 class="section-kicker">7-day outlook</h2>
        <div class="marine-list">
          ${outlook.map((item) => `<div class="forecast-row"><span>${item[0]}</span>${iconSvg(item[4])}<small>${item[1]}</small><em>${item[2]}</em><b>${item[3]}</b></div>`).join("")}
        </div>
      </section>

      <section class="captain-note-card">
        <div class="section-kicker">${iconLabel("compass", "Captain's note")}</div>
        <p>${escapeHtml(state.weather.note)}</p>
        <div class="captain-weather-pills">
          <span>Local ${state.weather.localCall}</span>
          <span>Offshore ${state.weather.offshoreCall}</span>
          <span>Next ${escapeHtml(state.weather.nextUpdate)}</span>
        </div>
      </section>

      ${state.captainMode ? renderWeatherEditor() : `<section class="reference-card">${renderNotice("Captain tools locked", "Clients see the latest captain call here. Weather editing is available from Profile or Settings after turning on Captain Mode.")}</section>`}
    </main>
  `;
}

function compactWind(value) {
  return value.replace(" kt ", " ");
}

function weatherMini(icon, label, value) {
  return `<div class="weather-mini">${iconSvg(icon)}<span>${label}</span><b>${value}</b></div>`;
}

function weatherInfoCard(icon, label, value) {
  return `<div class="weather-info-card">${iconSvg(icon)}<span>${label}</span><b>${value}</b></div>`;
}

function renderNotice(title, detail) {
  return `<div class="notice row"><span class="icon-well">${iconSvg("lock")}</span><div><b>${title}</b><p>${detail}</p></div></div>`;
}

function renderWeatherEditor() {
  return card(h`
    ${sectionHeader("Captain update controls", "Prototype admin controls for reviewing the client weather experience.")}
    <div class="form-grid">
      <div class="field"><label>Local bass</label><select id="localCall"><option>Green</option><option>Watch</option><option>Hold</option></select></div>
      <div class="field"><label>Offshore</label><select id="offshoreCall"><option>Green</option><option>Watch</option><option>Hold</option></select></div>
      <div class="field"><label>Next update</label><input id="nextUpdate" value="${escapeHtml(state.weather.nextUpdate)}" /></div>
      <div class="field"><label>Captain note</label><textarea id="weatherNote">${escapeHtml(state.weather.note)}</textarea></div>
      <div class="actions"><button class="button primary" data-action="save-weather">Save update</button><button class="button" data-action="reset-weather">Reset sample</button></div>
    </div>
  `);
}

function renderPrep() {
  const current = trip();
  const inquiries = matchingInquiries();
  const inquiry = inquiries[0];
  const checked = state.checklist[current.id] || checklistItems(current).slice(0, 2);
  return h`
    <main class="screen stack">
      <h1 class="title">Trip Hub</h1>
      ${card(h`
        ${sectionHeader(`${current.name} · Trip Hub`, inquiry ? `${inquiry.name}'s request for ${fmtDate(inquiry.preferredDate)}` : "A booked-client view for this selected trip after the captain confirms.")}
        <div class="plan-grid">
          ${tile("Inquiry", inquiry ? inquiry.status : current.deposit, "check")}
          ${tile("Weather", "Captain review", "sun")}
          ${tile("Trip time", current.duration, "clock")}
          ${tile("Prep", `${checked.length}/${checklistItems(current).length} ready`, "checklist")}
        </div>
      `)}
      ${inquiry ? renderInquiryHub(current, inquiry, inquiries) : renderEmptyHub(current)}
      ${renderReminders(current, Boolean(inquiry))}
      ${card(h`
        ${sectionHeader("Captain note", "The kind of short operational update a client should see before departure.")}
        <div class="notice"><p>${captainNote(current)}</p></div>
      `)}
      ${card(h`
        ${sectionHeader("Dock arrival", "Reduce morning-of confusion with the exact dock plan.")}
        ${row("location", "Departure", "25 Mattakeesett Ct, Duxbury, MA 02332")}
        ${row("map", "Parking", "Park near the marina entrance unless the captain texts a different slip.")}
        ${row("bag", "Bring aboard", "Soft bag, drinks, snacks, sunglasses, hat, and soft-soled shoes.")}
        <a class="button primary block" href="https://maps.apple.com/?q=25%20Mattakeesett%20Ct%20Duxbury%20MA%2002332">Open in Maps</a>
      `)}
      ${renderChecklist(current)}
    </main>
  `;
}

function renderInquiryHub(current, inquiry, inquiries) {
  return h`
    ${card(h`
      ${sectionHeader("Inquiry status", "A client-facing receipt for the request that just left the app.")}
      ${row("person", "Client", `${inquiry.name} · ${inquiry.email}`)}
      ${row("calendar", "Preferred date", fmtDate(inquiry.preferredDate))}
      ${row("users", "Party size", `${inquiry.partySize} anglers`)}
      ${row("clock", "Submitted", new Date(inquiry.submittedAt).toLocaleString())}
      ${state.captainMode ? `<div class="chip-row">${["Email draft ready", "Awaiting captain", "Captain confirmed", "Deposit due"].map((status) => `<button class="status-button ${inquiry.status === status ? "is-active" : ""}" data-status="${status}" data-id="${inquiry.id}">${status}</button>`).join("")}</div>` : renderNotice("Captain updates locked", "Clients can see the latest request status here. Status editing stays hidden until Captain Mode is turned on from Profile or Settings.")}
      ${inquiry.notes ? `<div class="data-box" style="padding:12px"><span class="label">Notes</span><p>${escapeHtml(inquiry.notes)}</p></div>` : ""}
    `)}
    ${card(h`
      ${sectionHeader("Day-of plan", "A compact client itinerary for the morning of the trip.")}
      <div class="plan-grid">
        ${tile("Preferred date", fmtDate(inquiry.preferredDate), "calendar")}
        ${tile("Captain status", inquiry.status, "check")}
        ${tile("Trip length", current.duration, "clock")}
        ${tile("Hold", current.deposit, "dollar")}
      </div>
      ${row("sun", "Weather call", "Watch for the captain's go/no-go text the evening before. Offshore trips may wait on the latest marine forecast.")}
      ${row("location", "Meet at the dock", "25 Mattakeesett Ct, Duxbury, MA 02332. Bring soft-soled shoes and keep large coolers in the vehicle.")}
      ${row("users", "Crew", `${inquiry.partySize} anglers for ${current.name}. ${availabilitySummary(inquiry)}`)}
      <div class="actions">
        <button class="button primary" data-modal="packet">View trip packet</button>
        <a class="button primary" href="https://maps.apple.com/?q=25%20Mattakeesett%20Ct%20Duxbury%20MA%2002332">Maps</a>
        <a class="button" href="mailto:Charters@FishHighHook.com?subject=High%20Hook%20trip%20question%20-%20${encodeURIComponent(current.name)}">Ask</a>
      </div>
    `)}
    ${inquiries.length > 1 ? card(h`
      ${sectionHeader("Local inquiry queue", `${inquiries.length} saved requests for this trip on this device.`)}
      ${inquiries.slice(0, 4).map((item) => row("envelope", item.name, `${item.status} · ${fmtDate(item.preferredDate)} · ${item.partySize} anglers`)).join("")}
    `) : ""}
  `;
}

function renderEmptyHub(current) {
  return card(h`
    ${sectionHeader("Start this Trip Hub", `Send a request for ${current.name} and this hub becomes a client-specific plan.`)}
    <div class="plan-grid">
      ${tile("Trip length", current.duration, "clock")}
      ${tile("Rate", current.price, "dollar")}
      ${tile("Deposit", current.deposit, "card")}
      ${tile("Capacity", current.capacity, "users")}
    </div>
    ${row("1", "Choose the trip", `${current.bestFor}. The booking sheet will carry the selected trip, date and party size into a prepared email.`)}
    ${row("2", "Captain confirms", "High Hook confirms weather, availability and deposit details before the date is held.")}
    ${row("3", "Hub unlocks", "After the request is saved locally, this screen shows status, reminders, dock details and the prep checklist.")}
    <div class="actions"><button class="button primary" data-action="book">Request this trip</button><a class="button" href="mailto:Charters@FishHighHook.com">Ask Captain</a></div>
  `);
}

function renderReminders(current, canSchedule) {
  const enabled = reminderKinds.filter((kind) => state.reminders[`${current.id}-${kind[0]}`]).length;
  return card(h`
    ${sectionHeader("Trip reminders", `${enabled} of ${reminderKinds.length} local reminders enabled for this trip.`)}
    <div class="notice"><p>${canSchedule ? "Enabling a reminder saves the preference locally for this inquiry's preferred date." : "Preferences save now. Notification scheduling starts after this trip has a booked inquiry date."}</p></div>
    ${reminderKinds.map((kind) => `
      <button class="toggle-row" data-reminder="${kind[0]}">
        <span><b>${kind[3]} ${kind[1]}</b><p>${kind[2]}</p></span>
        <span class="switch ${state.reminders[`${current.id}-${kind[0]}`] ? "is-on" : ""}"></span>
      </button>
    `).join("")}
  `);
}

function renderChecklist(current) {
  const items = checklistItems(current);
  const checked = new Set(state.checklist[current.id] || items.slice(0, 2));
  return card(h`
    ${sectionHeader("Prep checklist", `${checked.size} of ${items.length} ready for ${current.name} · saved on this device`)}
    ${items.map((item) => `<button class="toggle-row" data-check="${escapeHtml(item)}"><span><b>${checked.has(item) ? "✓" : "○"} ${item}</b></span></button>`).join("")}
  `);
}

function captainNote(current) {
  if (["bluefin", "shark", "haddock-cod"].includes(current.id)) {
    return "Offshore comfort depends on swell and wind direction. Pack food, layers and a waterproof bag; the captain will confirm the final go/no-go window.";
  }
  if (current.id === "kids-camp") {
    return "Camp mornings focus on fishing, knot tying, fish ID and boating safety. Send any medical or comfort notes before the first morning.";
  }
  if (current.id === "ladies-night") {
    return "Evening timing depends on tide and sunset. Bring a light jacket, sunglasses and anything you want for snacks or photos.";
  }
  return "Outgoing tide is the plan. Dress for a cool run across the bay, bring sunglasses, and leave the large cooler in the car until we return.";
}

function availabilitySummary(inquiry) {
  return inquiry.notes?.split("\n")[0]?.startsWith("Availability:")
    ? inquiry.notes.split("\n")[0]
    : "Confirm any backup windows with the captain.";
}

function renderReports() {
  const gallery = [
    ["Oct 3, 2025", '44" Striper · Gurnet Point', assets.gallery[1]],
    ["Oct 5, 2025", "42 lb Cod · Stellwagen ledge", assets.gallery[0]],
    ["Oct 1, 2025", "Dawn run · Duxbury Bay", assets.gallery[2]],
    ["Sep 28, 2025", "Bluefin sounding", assets.tripImages.bluefin],
    ["Sep 21, 2025", "Limit of haddock", assets.tripImages["haddock-cod"]],
    ["Sep 18, 2025", "Sundown striper", assets.heroDawn],
    ["Aug 14, 2025", "Camp day, scup runs", assets.tripImages["kids-camp"]],
  ];
  return h`
    <main class="screen stack">
      <header class="app-header">
        <div>
          <p class="eyebrow">Logbook</p>
          <h1>The Catch</h1>
        </div>
        <button class="icon-button" aria-label="Notifications">${iconSvg("bell")}</button>
      </header>
      <p class="route-subtitle">Photos from this season. The fish, the boat, the crew.</p>
      <section class="catch-grid">
        ${gallery.map((item) => `
          <article class="catch-card">
            <img src="${item[2]}" alt="${item[1]}" />
            <span>${item[0]}</span>
            <p>${item[1]}</p>
          </article>
        `).join("")}
      </section>
    </main>
  `;
}

function renderBookPage() {
  const current = trip();
  return h`
    <main class="screen stack">
      <header class="app-header">
        <div>
          <p class="eyebrow">Reserve a date</p>
          <h1>Book a Charter</h1>
        </div>
        <button class="icon-button" aria-label="Notifications">${iconSvg("bell")}</button>
      </header>
      <section class="booking-page-panel">
        <div class="field"><label for="bookTripSelect">Charter</label><select id="bookTripSelect">${trips.map((item) => `<option value="${item.id}" ${item.id === current.id ? "selected" : ""}>${item.name} — ${shortRate(item)}</option>`).join("")}</select></div>
        <div class="book-split">
          <div class="field"><label for="preferredDate">Preferred date</label><input id="preferredDate" type="date" value="${dateInputValue}" /></div>
          <div class="field"><label for="departureDock">Departure</label><input id="departureDock" value="5:00 AM" readonly /></div>
        </div>
        <div class="counter booking-counter"><b>Party size</b><div class="counter-controls"><button class="button" data-party="-1">-</button><span id="partySize">4</span><button class="button" data-party="1">+</button></div></div>
        <div class="field"><label for="bookName">Your name</label><input id="bookName" autocomplete="name" /></div>
        <div class="field"><label for="bookPhone">Phone</label><input id="bookPhone" type="tel" autocomplete="tel" /></div>
        <div class="field hidden-booking-field"><label for="dateFlex">Date flexibility</label><select id="dateFlex"><option>Flexible by a few days</option><option>Exact date</option><option>Captain can pick best window</option></select></div>
        <div class="field hidden-booking-field"><label for="backupDate">Backup date/window</label><input id="backupDate" type="date" value="${dateInputValue}" /></div>
        <div class="field"><label for="bookNotes">Notes (optional)</label><textarea id="bookNotes"></textarea></div>
        <button class="button primary block" data-action="submit-booking">Request booking</button>
      </section>
      <section class="direct-contact">
        <span class="label">Or reach Capt. Willie directly</span>
        <a href="tel:7812911304">781-291-1304</a>
        <a href="mailto:Charters@FishHighHook.com">Charters@FishHighHook.com</a>
      </section>
    </main>
  `;
}

function renderContact() {
  return h`
    <main class="screen stack">
      <header class="app-header">
        <div>
          <p class="eyebrow">More from High Hook</p>
          <h1>The Captain & The Bay</h1>
        </div>
        <button class="icon-button" aria-label="Notifications">${iconSvg("bell")}</button>
      </header>
      <section class="more-actions">
        <button class="more-action" data-tab="prep">${iconLabel("bag", "Trip Prep")}<small>What to bring</small></button>
        <button class="more-action" data-tab="reports">${iconLabel("images", "Reports")}<small>From the deck</small></button>
      </section>
      <img class="more-feature-image" src="${assets.heroDawn}" alt="High Hook Charters boat at dawn" />
      <section class="reference-card captain-profile">
        <span class="label">The Command</span>
        <h3>Capt. Willie Woodruff</h3>
        <p>Born and raised in Duxbury, MA. Capt. Willie has fished these waters his whole life and chartered as far as the Bahamas, Virgin Islands, Mexico and Barbados. His true passion is angling Massachusetts Bay.</p>
        <p>USCG licensed, CPR & First Aid certified.</p>
      </section>
      <section class="youth-card">
        <img src="${assets.tripImages["kids-camp"]}" alt="Young angler holding a fish on High Hook" />
        <div>
          <span class="label">Summer 2026</span>
          <h3>Youth Angler Camp</h3>
          <p>Two-day clinics for ages 8-15. Knots, rigs, ethics, and a guaranteed bend in the rod.</p>
          <button class="link-button" data-tab="book">Reserve a seat</button>
        </div>
      </section>
      <section class="news-list">
        <h2 class="section-kicker">Fishing News</h2>
        ${[
          ["Nov 30", "Holiday gift certificates available", "Any denomination, any trip. Printed cards mailed within 3 days."],
          ["Apr 4", "2026 Boston Bluefin Tournament", "We're entered again. Charter dates around the event are filling fast."],
          ["Mar 15", "Stellwagen reports start next week", "Capt. Willie's weekly write-ups return when the boat splashes."],
        ].map((item) => `<article><span>${item[0]}</span><h3>${item[1]}</h3><p>${item[2]}</p></article>`).join("")}
      </section>
      <section class="reference-card store-card">
        <span class="label">Ship's Store</span>
        <h3>High Hook gear & apparel</h3>
        <p>Duxbury Harbor · Massachusetts</p>
        <a class="button primary compact" href="https://www.fishhighhook.com/store">Open store</a>
      </section>
      <p class="footer-mark">© High Hook Charters</p>
    </main>
  `;
}

function localDataSummary() {
  const activeReminders = Object.values(state.reminders).filter(Boolean).length;
  const checklistTrips = Object.values(state.checklist).filter((items) => items.length).length;
  if (!state.inquiries.length && !activeReminders && !checklistTrips) {
    return "No local booking inquiries, active trip reminders or prep checklist progress are saved on this device.";
  }
  return `${state.inquiries.length} saved inquiries, ${activeReminders} active reminders and ${checklistTrips} trip checklists on this device.`;
}

function darkHeader(title, backTab = "", action = "notifications") {
  const actionLabel = action === "settings" ? "Settings" : "Notifications";
  return `<header class="dark-header">${backTab ? `<button class="dark-icon-button" data-tab="${backTab}" aria-label="Back">${iconSvg("back")}</button>` : `<span class="dark-header-spacer" aria-hidden="true"></span>`}<h1>${title}</h1><button class="dark-icon-button" data-tab="${action}" aria-label="${actionLabel}">${iconSvg(action === "settings" ? "settings" : "bell")}</button></header>`;
}

function darkLogoBlock() {
  return `<div class="dark-logo"><img src="${assets.logo}" alt="Fish High Hook Fishing Charters" /><strong>FISH HIGH HOOK</strong><span>FISHING CHARTERS</span></div>`;
}

function renderOnboarding() {
  return h`<main class="dark-screen dark-onboarding">
    <div class="onboarding-photo"><img src="${assets.heroDawn}" alt="Fishing charter boat at sunset" /><div class="hero-shade"></div></div>
    ${darkLogoBlock()}
    <section class="onboarding-copy"><h1>Fish Hard.<br />Have Fun.<br />Make Memories.</h1><p>Your next adventure is just a cast away.</p></section>
    <div class="onboarding-dots"><span></span><span class="is-active"></span><span></span></div>
    <button class="dark-primary" data-tab="login">Get Started</button>
    <button class="dark-link" data-tab="home">Skip</button>
  </main>`;
}

function authShell(title, subtitle, body) {
  return h`<main class="dark-screen auth-screen">
    <div class="auth-spacer"></div>
    <section class="auth-card"><h1>${title}</h1><p>${subtitle}</p>${body}</section>
  </main>`;
}

function renderLogin() {
  return authShell("Welcome Back!", "Log in to continue", h`
    <div class="dark-field"><label>Email</label><input value="Charters@FishHighHook.com" /></div>
    <div class="dark-field"><label>Password</label><input type="password" value="password" /></div>
    <button class="dark-link align-end" data-tab="forgot-password">Forgot password?</button>
    <button class="dark-primary" data-tab="home">Log In</button>
    <div class="auth-divider">or continue with</div>
    <div class="auth-social"><button>G</button><button>${iconSvg("phone")}</button></div>
    <p class="auth-foot">Don't have an account? <button data-tab="sign-up">Sign Up</button></p>
  `);
}

function renderSignUp() {
  return authShell("Create Account", "Join us for your next adventure", h`
    <div class="dark-field"><label>Full Name</label><input value="High Hook Guest" /></div>
    <div class="dark-field"><label>Email</label><input value="Charters@FishHighHook.com" /></div>
    <div class="dark-field"><label>Phone (Optional)</label><input value="781-291-1304" /></div>
    <div class="dark-field"><label>Password</label><input type="password" value="password" /></div>
    <label class="dark-check"><input type="checkbox" checked /> I agree to the Terms & Conditions</label>
    <button class="dark-primary" data-tab="home">Sign Up</button>
    <p class="auth-foot">Already have an account? <button data-tab="login">Log In</button></p>
  `);
}

function renderForgotPassword() {
  return authShell("Reset Password", "Enter your email and we'll send you a link to reset it.", h`
    <div class="dark-field"><label>Email</label><input value="Charters@FishHighHook.com" /></div>
    <button class="dark-primary" data-tab="login">Send Reset Link</button>
    <p class="auth-foot"><button data-tab="login">Back to Login</button></p>
  `);
}

function charterCard(item) {
  return `<button class="dark-list-card charter-card" data-trip="${item.id}" data-tab="charter-detail"><img src="${item.image}" alt="${item.name}" /><span><b>${item.name}</b><small>${item.duration}<br />${item.party}</small><em>${item.price}</em></span>${iconSvg("arrow")}</button>`;
}

function renderDarkHome() {
  return h`<main class="dark-screen dark-tab-screen">
    <header class="dark-home-head"><span class="dark-header-spacer" aria-hidden="true"></span>${darkLogoBlock()}<button class="dark-icon-button" data-tab="notifications" aria-label="Notifications">${iconSvg("bell")}</button></header>
    <section class="dark-adventure-card"><div><h2>Your next adventure starts here</h2><p>Duxbury, Stellwagen, Race Point and Massachusetts Bay charters with Capt. Willie.</p><button class="dark-primary" data-tab="booking-date">Book a Charter</button></div></section>
    <section class="dark-status-grid">
      <article>${iconSvg("cloud-sun")}<span>Captain Call</span><b>${state.weather.localCall}</b></article>
      <article>${iconSvg("waves")}<span>Offshore</span><b>${state.weather.offshoreCall}</b></article>
      <article>${iconSvg("checklist")}<span>Trip Hub</span><b>${state.inquiries.length ? "Ready" : "Start"}</b></article>
    </section>
    <section class="dark-section-head"><h2>Featured Charters</h2><button data-tab="charters">View All</button></section>
    <div class="dark-list charter-grid featured-grid">${darkCharters.slice(0, 2).map(charterCard).join("")}</div>
    <section class="dark-section-head"><h2>Latest Report</h2><button data-tab="reports">View</button></section>
    <article class="policy-block"><h2>${escapeHtml(state.reports[0]?.title || "Captain report")}</h2><p>${escapeHtml(state.reports[0]?.note || "Reports publish locally in Captain Mode until a production CMS is connected.")}</p></article>
  </main>`;
}

function renderDarkCharters() {
  const filters = ["All", "Offshore", "Inshore", "Kids Camp", "Ladies Night"];
  const activeFilter = filters.includes(state.charterFilter) ? state.charterFilter : "All";
  const filteredCharters = activeFilter === "All" ? darkCharters : darkCharters.filter((item) => item.type === activeFilter);
  return h`<main class="dark-screen dark-tab-screen">${darkHeader("Charters")}
    <div class="dark-segment">${filters.map((filter) => `<button class="${filter === activeFilter ? "is-active" : ""}" data-charter-filter="${filter}">${filter}</button>`).join("")}</div>
    <div class="dark-list charter-grid">${filteredCharters.map(charterCard).join("")}</div>
    ${filteredCharters.length ? "" : `<section class="policy-block"><h2>No trips in this view</h2><p>Switch to All to see every High Hook trip type.</p></section>`}
  </main>`;
}

function selectedDarkCharter() {
  return darkCharters.find((item) => item.id === state.selectedTripId) || darkCharters[0];
}

function renderDarkCharterDetail() {
  const item = selectedDarkCharter();
  return h`<main class="dark-screen detail-screen">${darkHeader("", "charters")}
    <img class="detail-hero-img" src="${item.image}" alt="${item.name}" />
    <section class="detail-copy"><div><h1>${item.name}</h1><p>${iconSvg("clock")} ${item.duration} &nbsp; ${iconSvg("users")} ${item.party}</p></div><b>${item.price}</b></section>
    <p class="dark-muted">${item.description}</p>
    <h2 class="dark-subtitle">What's Included</h2>
    <ul class="included-list">${item.included.map((entry) => `<li>${iconSvg("check")} ${entry}</li>`).join("")}</ul>
    <button class="dark-primary sticky-action" data-tab="booking-date">Book This Charter</button>
  </main>`;
}

function bookingStepper(active) {
  return `<div class="booking-stepper">${["Date", "Details", "Review", "Confirm"].map((label, index) => `<span class="${index + 1 <= active ? "is-active" : ""}"><b>${index + 1}</b><small>${label}</small></span>`).join("")}</div>`;
}

function renderBookingDate() {
  const item = selectedDarkCharter();
  return h`<main class="dark-screen dark-tab-screen">${darkHeader("Book a Charter", "charter-detail")}
    ${bookingStepper(1)}
    <section class="booking-hero"><img src="${item.image}" alt="${item.name}" /><div><h1>${item.name}</h1><p>${item.duration} · ${item.party}</p><b>${item.price}</b></div></section>
    <h2 class="dark-subtitle">Select Date</h2>
    <section class="calendar-card"><header><b>October 2026</b></header><div class="calendar-grid">${["Sun","Mon","Tue","Wed","Thu","Fri","Sat", ...Array.from({length: 31}, (_, i) => String(i + 1))].map((day) => `<span class="${day === "12" ? "is-picked" : ""}">${day}</span>`).join("")}</div></section>
    <button class="dark-primary sticky-action" data-tab="booking-details">Continue</button>
  </main>`;
}

function renderBookingDetails() {
  const item = selectedDarkCharter();
  return h`<main class="dark-screen dark-tab-screen">${darkHeader("Book a Charter", "booking-date")}
    ${bookingStepper(2)}
    <div class="dark-field"><label>Trip</label><select id="darkTripSelect">${darkCharters.map((charter) => `<option value="${charter.id}" ${charter.id === item.id ? "selected" : ""}>${charter.name} — ${charter.price}</option>`).join("")}</select></div>
    <div class="counter dark-counter"><b>Guests</b><div class="counter-controls"><button class="button" data-party="-1">-</button><span id="partySize">${state.bookingParty}</span><button class="button" data-party="1">+</button></div></div>
    <h2 class="dark-subtitle">Add-ons</h2>
    ${[["Captain confirms weather window", "Included"], ["Trip Hub reminders", "Included"], ["Post-trip photo follow-up", "Included"]].map((row) => `<label class="addon-row"><span><input type="checkbox" checked /> ${row[0]}</span><b>${row[1]}</b></label>`).join("")}
    <div class="dark-field"><label>Contact</label><input id="darkContact" value="Charters@FishHighHook.com" /></div>
    <div class="dark-field"><label>Special Requests (Optional)</label><textarea id="darkNotes" placeholder="Target species, kids, experience level, date flexibility or special considerations."></textarea></div>
    <button class="dark-primary sticky-action" data-tab="booking-review">Continue</button>
  </main>`;
}

function renderBookingReview() {
  const item = selectedDarkCharter();
  const legacy = trip(item.id);
  const deposit = legacy.deposit || "Captain confirms";
  return h`<main class="dark-screen dark-tab-screen">${darkHeader("Book a Charter", "booking-details")}
    ${bookingStepper(3)}
    <h2 class="dark-subtitle">Review Your Trip</h2>
    <section class="review-card">
      ${[["Trip", item.name], ["Date", "October 12, 2026"], ["Guests", String(state.bookingParty)], ["Departure", "25 Mattakeesett Ct"], ["Deposit/Hold", deposit]].map((row) => `<p><span>${row[0]}</span><b>${row[1]}</b></p>`).join("")}
      <p class="review-total"><span>Rate</span><b>${item.price}</b></p>
    </section>
    <p class="deposit-note">No card is charged here. High Hook confirms weather, availability and deposit details before a date is held.</p>
    <button class="dark-primary sticky-action" data-action="confirm-dark-booking">Confirm Booking</button>
  </main>`;
}

function renderBookingConfirmed() {
  const item = selectedDarkCharter();
  return h`<main class="dark-screen confirmed-screen">
    <div class="confirmed-check">${iconSvg("check")}</div><h1>Request Saved!</h1><p>Your High Hook request is saved locally. Send the prepared details to <span>Charters@FishHighHook.com</span> and use Trip Hub for prep.</p>
    <section class="review-card">
      ${[["Booking #", "FHH-LOCAL-001"], ["Trip", item.name], ["Date", "October 12, 2026"], ["Guests", String(state.bookingParty)], ["Rate", item.price]].map((row) => `<p><span>${row[0]}</span><b>${row[1]}</b></p>`).join("")}
    </section>
    <button class="dark-primary" data-tab="booking-detail">View Booking</button><button class="dark-secondary" data-tab="prep">Open Trip Hub</button>
  </main>`;
}

function renderMyBookings() {
  const filters = ["Upcoming", "Past", "Cancelled"];
  const activeFilter = filters.includes(state.bookingFilter) ? state.bookingFilter : "Upcoming";
  const savedRows = state.inquiries.map((item) => ({ date: fmtDate(item.preferredDate), tripName: item.tripName, crew: `${item.partySize} People`, rate: trip(item.tripId).price || "Ask", status: item.status, tripId: item.tripId }));
  const sampleRows = darkBookings.map((item) => ({ date: item[0], tripName: item[1], crew: item[2], rate: item[3], status: item[4], tripId: item[1].includes("Bass") ? "bass-local" : item[1].includes("Kids") ? "kids-camp" : "bluefin" }));
  const sourceRows = savedRows.length ? savedRows : sampleRows;
  const rows = sourceRows.filter((item) => {
    const status = item.status.toLowerCase();
    if (activeFilter === "Past") return status.includes("completed");
    if (activeFilter === "Cancelled") return status.includes("cancel");
    return !status.includes("completed") && !status.includes("cancel");
  });
  return h`<main class="dark-screen dark-tab-screen">${darkHeader("My Bookings")}
    <div class="dark-segment">${filters.map((filter) => `<button class="${filter === activeFilter ? "is-active" : ""}" data-booking-filter="${filter}">${filter}</button>`).join("")}</div>
    <div class="dark-list booking-grid">${rows.map((item) => `<button class="booking-row" data-trip="${item.tripId}" data-tab="booking-detail"><span><small>${item.date}</small><b>${item.tripName}</b><em>${item.crew} · ${item.rate}</em></span><mark class="${item.status.toLowerCase().includes("completed") ? "is-complete" : item.status.toLowerCase().includes("cancel") ? "is-cancelled" : ""}">${item.status}</mark></button>`).join("")}</div>
    ${rows.length ? "" : `<section class="policy-block"><h2>No ${activeFilter.toLowerCase()} bookings</h2><p>Switch filters or book a charter to start a new High Hook trip.</p><button class="dark-primary" data-tab="booking-date">Book a Charter</button></section>`}
  </main>`;
}

function renderBookingDetailPage() {
  const inquiry = matchingInquiries()[0] || state.inquiries[0];
  const item = inquiry ? darkCharters.find((charter) => charter.id === inquiry.tripId) || selectedDarkCharter() : selectedDarkCharter();
  const current = trip(item.id);
  return h`<main class="dark-screen detail-screen">${darkHeader("Booking Details", "bookings")}
    <section class="booking-hero"><img src="${item.image}" alt="${item.name}" /><div><h1>${item.name}</h1><p>${inquiry ? `${fmtDate(inquiry.preferredDate)} · ${inquiry.partySize} People` : "October 12, 2026 · 4 People"}</p><b>${item.price}</b></div></section>
    <div class="booking-actions"><button data-tab="booking-date">${iconSvg("clock")} Reschedule</button><button data-tab="prep">${iconSvg("checklist")} Trip Hub</button><a href="mailto:Charters@FishHighHook.com">${iconSvg("envelope")} Message</a></div>
    <h2 class="dark-subtitle">Trip Details</h2>
    <section class="review-card">${[["Meeting Time", "Captain confirms"], ["Departure Location", "25 Mattakeesett Ct, Duxbury, MA 02332"], ["Deposit/Hold", current.deposit], ["What to Bring", "Soft bag, drinks, snacks, sunglasses, hat, layers and soft-soled shoes"]].map((row) => `<p><span>${row[0]}</span><b>${row[1]}</b></p>`).join("")}</section>
    <button class="dark-primary sticky-action" data-tab="policy">View / Manage Booking</button>
  </main>`;
}

function renderPolicy() {
  return h`<main class="dark-screen dark-tab-screen">${darkHeader("Cancellation Policy", "booking-detail")}
    ${[["Weather", "Trips may be rescheduled or cancelled due to unsafe weather conditions. The captain has final authority on go/no-go decisions."], ["Deposit & Hold", "No date is held until High Hook confirms availability and deposit details. This local app prototype does not charge a card."], ["Cancellations by You", "Cancellation timing and refund details should be confirmed directly with High Hook before booking."], ["No Shows", "No shows or late arrivals may be non-refundable once a trip is confirmed."], ["Questions?", "Contact High Hook anytime before your trip."]].map((item) => `<section class="policy-block"><h2>${item[0]}</h2><p>${item[1]}</p></section>`).join("")}
    <button class="dark-primary sticky-action" data-tab="contact-page">Contact Us</button>
  </main>`;
}

function renderDarkTripHub() {
  const current = trip();
  const inquiry = matchingInquiries()[0] || state.inquiries[0];
  const checked = new Set(state.checklist[current.id] || checklistItems(current).slice(0, 2));
  return h`<main class="dark-screen dark-tab-screen">${darkHeader("Trip Hub", "profile")}
    <section class="booking-hero"><img src="${assets.tripImages[current.id] || assets.heroDawn}" alt="${current.name}" /><div><h1>${current.name}</h1><p>${inquiry ? `${inquiry.name} · ${fmtDate(inquiry.preferredDate)}` : current.bestFor}</p><b>${inquiry ? inquiry.status : current.deposit}</b></div></section>
    <section class="dark-status-grid">
      <article>${iconSvg("sun")}<span>Weather</span><b>${state.weather.localCall}</b></article>
      <article>${iconSvg("clock")}<span>Duration</span><b>${current.duration}</b></article>
      <article>${iconSvg("checklist")}<span>Prep</span><b>${checked.size}/${checklistItems(current).length}</b></article>
    </section>
    ${inquiry ? `<section class="review-card">
      ${[["Client", `${inquiry.name} · ${inquiry.email}`], ["Preferred date", fmtDate(inquiry.preferredDate)], ["Party size", `${inquiry.partySize} anglers`], ["Availability", availabilitySummary(inquiry)]].map((row) => `<p><span>${row[0]}</span><b>${escapeHtml(row[1])}</b></p>`).join("")}
    </section>` : `<section class="policy-block"><h2>Start this Trip Hub</h2><p>Send a charter request and this screen becomes the client-specific place for status, weather, reminders, dock details and prep.</p><button class="dark-primary" data-tab="booking-date">Request this trip</button></section>`}
    ${state.captainMode && inquiry ? `<section class="policy-block"><h2>Captain Status</h2><div class="chip-row">${["Email draft ready", "Awaiting captain", "Captain confirmed", "Deposit due"].map((status) => `<button class="status-button ${inquiry.status === status ? "is-active" : ""}" data-status="${status}" data-id="${inquiry.id}">${status}</button>`).join("")}</div></section>` : `<section class="policy-block"><h2>Captain updates</h2><p>Status editing is hidden from clients. Turn on Captain Mode from Profile or Settings for local review controls.</p></section>`}
    <section class="policy-block"><h2>Dock Arrival</h2>${[["Departure", "25 Mattakeesett Ct, Duxbury, MA 02332"], ["Bring", "Soft bag, drinks, snacks, sunglasses, hat, layers and soft-soled shoes"], ["Weather call", "Watch for the captain's go/no-go text the evening before"]].map((row) => `<p><span>${row[0]}</span><b>${row[1]}</b></p>`).join("")}<a class="dark-primary dark-link-button" href="https://maps.apple.com/?q=25%20Mattakeesett%20Ct%20Duxbury%20MA%2002332">Open in Maps</a></section>
    <section class="policy-block"><h2>Prep Checklist</h2>${checklistItems(current).map((item) => `<button class="dark-toggle-row" data-check="${escapeHtml(item)}"><span>${checked.has(item) ? "✓" : "○"} ${item}</span></button>`).join("")}</section>
    <section class="policy-block"><h2>Trip Reminders</h2>${reminderKinds.map((kind) => `<button class="dark-toggle-row" data-reminder="${kind[0]}"><span>${kind[1]}<small>${kind[2]}</small></span><span class="switch ${state.reminders[`${current.id}-${kind[0]}`] ? "is-on" : ""}"></span></button>`).join("")}</section>
  </main>`;
}

function renderDarkReports() {
  const reportPhotos = [assets.gallery[1], assets.gallery[0], assets.heroDawn, assets.tripImages.bluefin, assets.tripImages["haddock-cod"], assets.tripImages["kids-camp"]];
  return h`<main class="dark-screen dark-tab-screen">${darkHeader("The Catch", "profile")}
    <section class="gallery-grid-dark">${reportPhotos.map((src) => {
      const index = Math.max(0, galleryPhotos.findIndex((photo) => photo.src === src));
      return `<button data-photo-index="${index}"><img src="${src}" alt="High Hook catch report" /></button>`;
    }).join("")}</section>
    <div class="dark-list report-grid">${state.reports.map((item) => `<article class="policy-block"><h2>${escapeHtml(item.title)}</h2><p><b>${escapeHtml(item.date)} · ${escapeHtml(item.condition)}</b></p><p>${escapeHtml(item.note)}</p></article>`).join("")}</div>
    ${state.captainMode ? `<section class="policy-block"><h2>Publish Local Report</h2><div class="dark-field"><label>Title</label><input id="reportTitle" value="Fresh captain report" /></div><div class="dark-field"><label>Condition</label><input id="reportCondition" value="2 ft swell" /></div><div class="dark-field"><label>Note</label><textarea id="reportNote">Add a short deck report for local review.</textarea></div><button class="dark-primary" data-action="publish-report">Publish Report</button></section>` : `<section class="policy-block"><h2>Reports are client-safe</h2><p>Publishing controls stay hidden until Captain Mode is unlocked.</p></section>`}
  </main>`;
}

function renderDarkRegulations() {
  return h`<main class="dark-screen dark-tab-screen">${darkHeader("Regulations", "profile")}
    ${regulations.map((item) => `<section class="policy-block"><h2>${iconSvg(item[4])} ${item[0]}</h2><p>${item[1]}</p><p><b>${item[2]}</b></p><a class="dark-secondary dark-link-button" href="${item[3]}">Open Official Source</a></section>`).join("")}
  </main>`;
}

function renderDarkLocalData() {
  return h`<main class="dark-screen dark-tab-screen">${darkHeader("Data & Privacy", "settings")}
    <section class="policy-block"><h2>Local Data</h2><p>${localDataSummary()}</p><button class="dark-primary" data-modal="export">Export Local Data</button><button class="dark-secondary" data-action="clear-data">Clear Local Data</button></section>
    <section class="policy-block"><h2>Privacy</h2><p>This local prototype stores booking requests, checklist progress and reminders in this browser only. Production still needs server-side deletion/export policy once CRM or Supabase persistence is connected.</p></section>
    <section class="policy-block"><h2>Payments</h2><p>No card is charged in the app. The live High Hook pricing page says half-day trips require a $100 deposit, full-day tuna trips require a $300 deposit, and kids camps/certificates require full payment at sign-up or ordering.</p></section>
  </main>`;
}

function renderDarkWeather() {
  const hourly = [
    ["6 AM", "58°", "6 kt", "cloud-sun"],
    ["9 AM", "64°", "8 kt", "sun"],
    ["12 PM", "71°", "10 kt", "sun"],
    ["3 PM", "73°", "12 kt", "cloud-sun"],
    ["6 PM", "68°", "9 kt", "cloud"],
  ];
  const tides = [
    ["Low", "0.4 ft", "4:12 AM"],
    ["High", "9.8 ft", "10:28 AM"],
    ["Low", "0.6 ft", "4:41 PM"],
    ["High", "10.1 ft", "10:55 PM"],
  ];
  const metrics = [
    ["Wind", state.weather.metrics.find((metric) => metric[0] === "Wind")?.[1] || "8 kt SW", "wind"],
    ["Swell", state.weather.metrics.find((metric) => metric[0] === "Swell")?.[1] || "1.5 ft", "waves"],
    ["Tide", state.weather.metrics.find((metric) => metric[0] === "Tide")?.[1] || "Outgoing 8:40", "tide"],
    ["Water", state.weather.metrics.find((metric) => metric[0] === "Water")?.[1] || "62F", "sun"],
  ];
  return h`<main class="dark-screen dark-tab-screen">${darkHeader("Weather & Tides", "profile")}
    <section class="dark-weather-hero">
      <div><span>Duxbury Bay · Now</span><h1>68°</h1><p>Partly cloudy · feels 66°</p></div>
      <i>${iconSvg("cloud-sun")}</i>
    </section>
    <section class="dark-status-grid">
      <article>${iconSvg("sun")}<span>Local</span><b>${state.weather.localCall}</b></article>
      <article>${iconSvg("waves")}<span>Offshore</span><b>${state.weather.offshoreCall}</b></article>
      <article>${iconSvg("clock")}<span>Next</span><b>${escapeHtml(state.weather.nextUpdate)}</b></article>
    </section>
    <section class="policy-block"><h2>Marine Metrics</h2><div class="dark-metric-grid">${metrics.map((item) => `<article>${iconSvg(item[2])}<span>${item[0]}</span><b>${item[1]}</b></article>`).join("")}</div></section>
    <section class="policy-block"><h2>Hourly</h2><div class="dark-hourly">${hourly.map((item) => `<article><span>${item[0]}</span>${iconSvg(item[3])}<b>${item[1]}</b><small>${item[2]}</small></article>`).join("")}</div></section>
    <section class="policy-block"><h2>Tides Today</h2>${tides.map((item) => `<p><span>${item[0]}</span><b>${item[1]} · ${item[2]}</b></p>`).join("")}</section>
    <section class="policy-block"><h2>Captain's Note</h2><p>${escapeHtml(state.weather.note)}</p><p><span>Updated</span><b>${fmtDate(state.weather.updatedAt)}</b></p></section>
    ${state.captainMode ? renderDarkWeatherEditor() : `<section class="policy-block"><h2>Captain tools locked</h2><p>Clients see the latest captain call here. Turn on Captain Mode from Profile or Settings to update weather status locally.</p></section>`}
  </main>`;
}

function renderDarkWeatherEditor() {
  return `<section class="policy-block"><h2>Captain Weather Controls</h2>
    <div class="dark-field"><label>Local bass</label><select id="localCall"><option>Green</option><option>Watch</option><option>Hold</option></select></div>
    <div class="dark-field"><label>Offshore</label><select id="offshoreCall"><option>Green</option><option>Watch</option><option>Hold</option></select></div>
    <div class="dark-field"><label>Next update</label><input id="nextUpdate" value="${escapeHtml(state.weather.nextUpdate)}" /></div>
    <div class="dark-field"><label>Captain note</label><textarea id="weatherNote">${escapeHtml(state.weather.note)}</textarea></div>
    <button class="dark-primary" data-action="save-weather">Save update</button>
    <button class="dark-secondary" data-action="reset-weather">Reset sample</button>
  </section>`;
}

function renderGalleryDark() {
  const filters = ["All", "Offshore", "Nearshore", "Inshore"];
  const activeFilter = filters.includes(state.galleryFilter) ? state.galleryFilter : "All";
  const photos = activeFilter === "All" ? galleryPhotos : galleryPhotos.filter((photo) => photo.category === activeFilter);
  return h`<main class="dark-screen dark-tab-screen">${darkHeader("Gallery")}
    <div class="dark-segment">${filters.map((filter) => `<button class="${filter === activeFilter ? "is-active" : ""}" data-gallery-filter="${filter}">${filter}</button>`).join("")}</div>
    <section class="gallery-grid-dark">${photos.map((photo) => `<button data-photo-index="${galleryPhotos.indexOf(photo)}"><img src="${photo.src}" alt="${escapeHtml(photo.title)}" /></button>`).join("")}</section>
  </main>`;
}

function renderPhotoViewer() {
  const index = Math.max(0, Math.min(galleryPhotos.length - 1, state.selectedPhotoIndex));
  const photo = galleryPhotos[index];
  const isLiked = state.likedPhotos.includes(index);
  return h`<main class="dark-screen photo-viewer">${darkHeader(`${index + 1} / ${galleryPhotos.length}`, "gallery")}
    <img src="${photo.src}" alt="${escapeHtml(photo.title)}" />
    <div class="photo-actions"><button class="${isLiked ? "is-liked" : ""}" data-action="toggle-photo-like">${iconSvg("star")}<span>${isLiked ? "Liked" : "Like"}</span></button><button data-action="download-photo">${iconSvg("share")}<span>Download</span></button><button data-action="share-photo">${iconSvg("share")}<span>Share</span></button><button data-action="photo-info">${iconSvg("eye")}<span>Info</span></button></div>
    <p class="photo-caption">${escapeHtml(photo.title)} · ${escapeHtml(photo.category)}</p>
    <div class="photo-thumbs">${galleryPhotos.slice(0, 6).map((item, thumbIndex) => `<button class="${thumbIndex === index ? "is-active" : ""}" data-photo-index="${thumbIndex}"><img src="${item.src}" alt="" /></button>`).join("")}</div>
  </main>`;
}

function renderCrew() {
  return h`<main class="dark-screen dark-tab-screen">${darkHeader("Our Crew", "profile")}
    <div class="dark-list crew-grid">${darkCrew.map((person) => `<article class="crew-row"><img src="${person[3]}" alt="${person[0]}" /><span><b>${person[0]}</b><small>${person[1]}</small><em>${person[2]}</em></span></article>`).join("")}</div>
    <button class="dark-primary sticky-action" data-tab="contact-page">Meet the Crew</button>
  </main>`;
}

function renderLocations() {
  return h`<main class="dark-screen dark-tab-screen">${darkHeader("Locations", "profile")}
    <section class="map-card"><img src="${assets.heroDawn}" alt="Map preview" /></section>
    <div class="dark-list location-grid">${darkLocations.map((item, index) => `<button class="location-row" data-location-index="${index}">${iconSvg("location")}<span><b>${item[0]}</b><small>${item[1]}</small></span></button>`).join("")}</div>
  </main>`;
}

function renderLocationDetail() {
  const location = darkLocations[Math.max(0, Math.min(darkLocations.length - 1, state.selectedLocationIndex))] || darkLocations[0];
  const isDock = location[0] === "High Hook Dock";
  const query = encodeURIComponent(isDock ? "25 Mattakeesett Ct Duxbury MA 02332" : `${location[0]} Massachusetts`);
  return h`<main class="dark-screen dark-tab-screen">${darkHeader("", "locations")}
    <section class="map-card"><img src="${location[2]}" alt="${escapeHtml(location[0])} map preview" /></section>
    <section class="location-detail-card"><h1>${location[0]}</h1><p>${location[1]}</p><a class="dark-primary dark-link-button" href="https://maps.apple.com/?q=${query}">Get Directions</a></section>
    <h2 class="dark-subtitle">Details</h2><p class="dark-muted">Departure details and exact meeting time are confirmed by the captain before the trip. Keep large coolers in the vehicle until the boat returns.</p>
    <h2 class="dark-subtitle">Amenities</h2><div class="amenities"><span>${iconSvg("card")}</span><span>${iconSvg("users")}</span><span>${iconSvg("bag")}</span><span>${iconSvg("anchor")}</span></div>
  </main>`;
}

function renderContactPage() {
  const contactRows = [
    ["phone", "Call", "781-291-1304", "tel:7812911304"],
    ["envelope", "Email", "Charters@FishHighHook.com", "mailto:Charters@FishHighHook.com"],
    ["location", "Dock", "25 Mattakeesett Ct, Duxbury, MA", "https://maps.apple.com/?q=25%20Mattakeesett%20Ct%20Duxbury%20MA%2002332"],
    ["clock", "Response", "Captain typically replies within 24 hours", ""],
  ];
  return h`<main class="dark-screen dark-tab-screen">${darkHeader("Contact Us", "profile")}
    ${contactRows.map((item) => item[3] ? `<a class="contact-row" href="${item[3]}">${iconSvg(item[0])}<span><b>${item[1]}</b><small>${item[2]}</small></span></a>` : `<button class="contact-row" data-action="response-info">${iconSvg(item[0])}<span><b>${item[1]}</b><small>${item[2]}</small></span></button>`).join("")}
    <section class="policy-block"><h2>Capt. Willie Woodruff</h2><p>Born and raised in Duxbury, MA. USCG licensed, CPR & First Aid certified, and focused on Massachusetts Bay, Stellwagen, Race Point and local South Shore fishing.</p></section>
    ${renderCaptainModeCard()}
    <h2 class="dark-subtitle">More</h2><div class="settings-list"><button data-tab="locations">${iconSvg("location")}<span>Locations</span>${iconSvg("arrow")}</button><button data-tab="regulations">${iconSvg("shield")}<span>Regulations</span>${iconSvg("arrow")}</button><button data-tab="local-data">${iconSvg("doc")}<span>Local Data</span>${iconSvg("arrow")}</button></div>
  </main>`;
}

function renderCaptainModeCard() {
  return `<section class="policy-block captain-mode-card">
    <h2>Captain Mode</h2>
    <p>${state.captainMode ? "Captain Mode is on for this device. Weather, Reports and Trip Hub status controls are available." : "Captain Mode is off. Client-safe screens are shown until the captain unlocks local review controls."}</p>
    <button class="${state.captainMode ? "dark-secondary" : "dark-primary"}" data-action="${state.captainMode ? "lock-captain" : "unlock-captain"}">${state.captainMode ? "Turn Captain Mode Off" : "Turn Captain Mode On"}</button>
  </section>`;
}

function renderNotifications() {
  const read = new Set(state.readNotifications);
  return h`<main class="dark-screen dark-tab-screen">${darkHeader("Notifications", "profile")}
    <button class="dark-link align-end" data-action="mark-notifications-read">Mark all as read</button>
    <div class="dark-list notification-grid">${darkNotifications.map((item, index) => {
      const id = `notification-${index}`;
      return `<button class="notification-row ${read.has(id) ? "is-read" : ""}" data-notification-id="${id}"><span>${iconSvg(item[3])}</span><div><b>${item[0]}</b><p>${item[1]}</p></div><small>${read.has(id) ? "Read" : item[2]}</small></button>`;
    }).join("")}</div>
  </main>`;
}

function renderProfile() {
  return h`<main class="dark-screen dark-tab-screen profile-screen">${darkHeader("", "", "settings")}
    <img class="avatar" src="${assets.gallery[1]}" alt="High Hook angler" /><h1>High Hook Guest</h1><p>Charters@FishHighHook.com<br />Duxbury, Massachusetts</p>
    ${renderCaptainModeCard()}
    <div class="settings-list">${[
      ["Personal Information", "person", "contact-page"],
      ["My Bookings", "calendar", "bookings"],
      ["Payment Methods", "card", "local-data"],
      ["Address Book", "location", "locations"],
      ["Change Password", "lock", "forgot-password"],
      ["Log Out", "arrow", "login"],
    ].map((item) => `<button data-tab="${item[2]}">${iconSvg(item[1])}<span>${item[0]}</span>${iconSvg("arrow")}</button>`).join("")}</div>
    <h2 class="dark-subtitle">Explore</h2>
    <div class="settings-list">${[
      ["Trip Hub", "checklist", "prep"],
      ["Reports", "images", "reports"],
      ["Notifications", "bell", "notifications"],
      ["Crew", "users", "crew"],
      ["Weather & Tides", "cloud-sun", "weather"],
      ["Regulations", "shield", "regulations"],
      ["Contact High Hook", "envelope", "contact-page"],
    ].map((item) => `<button data-tab="${item[2]}">${iconSvg(item[1])}<span>${item[0]}</span>${iconSvg("arrow")}</button>`).join("")}</div>
  </main>`;
}

function renderSettings() {
  const settingRows = [
    ["push", "Push Notifications"],
    ["email", "Email Notifications"],
    ["darkMode", "Dark Mode"],
  ];
  return h`<main class="dark-screen dark-tab-screen">${darkHeader("Settings", "profile")}
    <h2 class="dark-subtitle">Preferences</h2>
    <div class="settings-list">${settingRows.map((item) => `<button data-setting="${item[0]}"><span>${item[1]}</span><span class="switch ${state.settings[item[0]] ? "is-on" : ""}"></span></button>`).join("")}</div>
    <h2 class="dark-subtitle">Captain Tools</h2>
    ${renderCaptainModeCard()}
    <h2 class="dark-subtitle">App</h2><div class="settings-list"><button><span>Language</span><b>English</b>${iconSvg("arrow")}</button></div>
    <h2 class="dark-subtitle">About</h2><div class="settings-list"><button data-tab="local-data"><span>Privacy Policy</span>${iconSvg("arrow")}</button><button data-tab="policy"><span>Terms of Service</span>${iconSvg("arrow")}</button><button data-tab="regulations"><span>Regulations</span>${iconSvg("arrow")}</button><button><span>App Version</span><b>1.0.0</b></button></div>
  </main>`;
}

function renderDock() {
  const tabs = [
    { tab: "home", icon: "home", label: "Home" },
    { tab: "charters", icon: "anchor", label: "Trips" },
    { tab: "weather", icon: "cloud-sun", label: "Weather" },
    { tab: "gallery", icon: "images", label: "Gallery" },
    { tab: "profile", icon: "person", label: "Profile" },
  ];
  const dockGroups = {
    home: ["home"],
    charters: ["charters", "charter-detail"],
    weather: ["weather"],
    gallery: ["gallery", "photo-viewer"],
    profile: ["profile", "bookings", "booking-detail", "policy", "prep", "settings", "contact", "crew", "locations", "location-detail", "notifications", "reports", "regulations", "local-data"],
  };
  return `<nav class="dock" aria-label="High Hook navigation">${tabs.map((item) => {
    const isActive = dockGroups[item.tab].includes(state.tab);
    return `<button class="dock-button ${isActive ? "is-active" : ""}" data-tab="${item.tab}"><span>${iconSvg(item.icon)}</span><span>${item.label}</span></button>`;
  }).join("")}</nav>`;
}

function renderModal() {
  if (!state.modal) return "";
  if (state.modal === "booking") return renderBookingModal();
  if (state.modal === "booking-success") return renderBookingSuccessModal();
  if (state.modal === "trip-detail") return renderTripDetailModal();
  if (state.modal === "packet") return renderPacketModal();
  if (state.modal === "export") return renderExportModal();
  return "";
}

function renderBookingModal() {
  const current = trip();
  return h`
    <div class="modal-backdrop" role="dialog" aria-modal="true">
      <section class="modal-panel">
        <div class="modal-header"><h2>Book a charter</h2><button class="button" data-action="close-modal">Done</button></div>
        <div id="bookingForm" class="stack">
          ${card(h`
            ${sectionHeader("Selected trip", "The inquiry will be tied to this option.")}
            <h3>${current.icon} ${current.name}</h3><p>${current.details}</p>
            <div class="plan-grid">${tile("Rate", current.price, "dollar")}${tile("Deposit", current.deposit, "card")}</div>
          `)}
          ${card(h`
            ${sectionHeader("Your crew", "Give the captain enough context to confirm the right date and plan.")}
            <div class="form-grid">
              <div class="field"><label for="bookName">Name</label><input id="bookName" autocomplete="name" /></div>
              <div class="field"><label for="bookEmail">Email</label><input id="bookEmail" type="email" autocomplete="email" /></div>
              <div class="counter"><b>Party size</b><div class="counter-controls"><button class="button" data-party="-1">-</button><span id="partySize">4</span><button class="button" data-party="1">+</button></div></div>
              <div class="field"><label for="preferredDate">Preferred date</label><input id="preferredDate" type="date" value="${dateInputValue}" /></div>
              <div class="field"><label for="dateFlex">Date flexibility</label><select id="dateFlex"><option>Flexible by a few days</option><option>Exact date</option><option>Captain can pick best window</option></select></div>
              <div class="field"><label for="backupDate">Backup date/window</label><input id="backupDate" type="date" value="${dateInputValue}" /></div>
              <div class="field"><label for="bookNotes">Notes for the captain</label><textarea id="bookNotes" placeholder="Target species, kids, experience level, date flexibility or special considerations."></textarea></div>
            </div>
          `)}
          ${card(h`
            ${sectionHeader("Deposit & hold", "No card is charged in the app.")}
            ${row("dollar", "Deposit", `${current.deposit} is handled after the captain confirms the date.`)}
            ${row("clock", "Hold status", "This inquiry does not reserve the boat until High Hook replies and the deposit is settled.")}
            ${row("envelope", "Best response", "Flexible dates and backup windows help the captain match weather, tide and availability.")}
          `)}
          ${card(h`
            ${sectionHeader("What happens next", "A clear handoff before the user commits.")}
            ${row("envelope", "Email draft opens", "The app prepares a clean message to Charters@FishHighHook.com.")}
            ${row("sun", "Captain confirms window", "Weather, tide and fish reports shape the final plan.")}
            ${row("dollar", "Deposit holds the date", "No date is held until the captain confirms and payment is handled.")}
            ${row("checklist", "Trip Hub unlocks", "Booked clients get arrival details, captain notes, weather status and a prep checklist in one place.")}
          `)}
          <button class="button primary block" data-action="submit-booking">Email</button>
        </div>
      </section>
    </div>
  `;
}

function renderBookingSuccessModal() {
  const success = state.bookingSuccess || {};
  const inquiry = state.inquiries.find((item) => item.id === success.inquiryId) || state.inquiries[0];
  return h`
    <div class="modal-backdrop" role="dialog" aria-modal="true">
      <section class="modal-panel">
        <div class="modal-header"><h2>Email draft ready</h2><button class="button" data-action="close-modal">Done</button></div>
        <div class="stack">
          ${card(h`
            <div class="success-mark">${iconSvg("check")}</div>
            ${sectionHeader("Email draft ready", "Review the prepared message in Mail and send it to High Hook.")}
            <p>A later production backend can also mirror these requests into a CRM or booking queue.</p>
            ${inquiry ? `<div class="data-box"><b>${escapeHtml(inquiry.tripName)}</b><p>${escapeHtml(inquiry.name)} &middot; ${escapeHtml(fmtDate(inquiry.preferredDate))} &middot; Party of ${inquiry.partySize}</p></div>` : ""}
            <div class="actions">
              <button class="button primary block" data-action="reopen-email">${iconLabel("envelope", "Reopen email draft")}</button>
              <button class="button block" data-action="preview-trip-hub">${iconLabel("checklist", "Preview Trip Hub")}</button>
            </div>
          `)}
        </div>
      </section>
    </div>
  `;
}

function renderTripDetailModal() {
  const current = trip();
  return h`
    <div class="modal-backdrop" role="dialog" aria-modal="true">
      <section class="modal-panel">
        <div class="modal-header"><h2>${current.name}</h2><button class="button" data-action="close-modal">Done</button></div>
        <div class="stack">
          <p>${current.details}</p>
          <div class="plan-grid">${tile("Duration", current.duration)}${tile("Season", current.season)}${tile("Target", current.target)}${tile("Capacity", current.capacity)}${tile("Rate", current.price)}${tile("Deposit", current.deposit)}</div>
          ${card(h`${sectionHeader("Prep", "Trip-specific checklist starter.")}${current.prep.map((item) => row("check", item, "Recommended for this trip.")).join("")}`)}
          <button class="button primary block" data-action="book">Request this trip</button>
        </div>
      </section>
    </div>
  `;
}

function packetText() {
  const current = trip();
  const inquiry = matchingInquiries()[0];
  if (!inquiry) return "";
  return `High Hook Charters Trip Packet

Trip: ${current.name}
Preferred date: ${fmtDate(inquiry.preferredDate)}
Captain status: ${inquiry.status}
Client: ${inquiry.name}
Party size: ${inquiry.partySize} anglers
Trip length: ${current.duration}
Rate: ${current.price}
Deposit/Hold: ${current.deposit}

Departure
25 Mattakeesett Ct
Duxbury, MA 02332

Weather call
Watch for the captain's go/no-go text the evening before. Offshore trips may wait on the latest marine forecast.

Availability
${availabilitySummary(inquiry)}

Bring aboard
Soft bag, drinks, snacks, sunglasses, hat, layers and soft-soled shoes. Keep large coolers in the vehicle until fish return dockside.

Captain question
Charters@FishHighHook.com`;
}

function renderPacketModal() {
  const text = packetText();
  const current = trip();
  const inquiry = matchingInquiries()[0];
  if (!inquiry) return "";
  return h`
    <div class="modal-backdrop" role="dialog" aria-modal="true">
      <section class="modal-panel">
        <div class="modal-header"><h2>Trip Packet</h2><button class="button" data-action="close-modal">Done</button></div>
        <div class="stack">
          ${card(h`
            ${sectionHeader("Trip packet", `${current.name} · ${fmtDate(inquiry.preferredDate)}`)}
            <div class="packet-card" tabindex="0" aria-label="Selectable trip packet text">${escapeHtml(text)}</div>
            <button class="button primary block" data-action="share-packet">${iconLabel("share", "Share trip packet")}</button>
            <p class="muted small-note">Local review mode: this packet is generated from device-saved inquiry details. Production should generate the final client packet from the confirmed booking record.</p>
          `)}
        </div>
      </section>
    </div>
  `;
}

function renderExportModal() {
  const exportText = `High Hook local client data export
Generated: ${new Date().toLocaleString()}

Saved inquiries (${state.inquiries.length})
${state.inquiries.map((item) => `- ${item.name} <${item.email}> · ${item.tripName} · ${fmtDate(item.preferredDate)} · ${item.status}`).join("\n") || "- None"}

Local summary
${localDataSummary()}`;
  return h`<div class="modal-backdrop" role="dialog" aria-modal="true"><section class="modal-panel"><div class="modal-header"><h2>Local Data Export</h2><button class="button" data-action="close-modal">Done</button></div><pre class="data-box" style="padding:14px;white-space:pre-wrap;color:var(--sunwash)">${escapeHtml(exportText)}</pre><button class="button primary block" data-action="copy-export">Copy export</button></section></div>`;
}

function render() {
  const content = {
    onboarding: renderOnboarding,
    login: renderLogin,
    "sign-up": renderSignUp,
    "forgot-password": renderForgotPassword,
    home: renderDarkHome,
    charters: renderDarkCharters,
    "charter-detail": renderDarkCharterDetail,
    "booking-date": renderBookingDate,
    "booking-details": renderBookingDetails,
    "booking-review": renderBookingReview,
    "booking-confirmed": renderBookingConfirmed,
    bookings: renderMyBookings,
    "booking-detail": renderBookingDetailPage,
    policy: renderPolicy,
    gallery: renderGalleryDark,
    "photo-viewer": renderPhotoViewer,
    crew: renderCrew,
    locations: renderLocations,
    "location-detail": renderLocationDetail,
    "contact-page": renderContactPage,
    notifications: renderNotifications,
    profile: renderProfile,
    settings: renderSettings,
    prep: renderDarkTripHub,
    reports: renderDarkReports,
    regulations: renderDarkRegulations,
    "local-data": renderDarkLocalData,
    trips: renderDarkCharters,
    "trip-list": renderDarkCharters,
    weather: renderDarkWeather,
    book: renderBookingDate,
    contact: renderContactPage,
  }[state.tab] || renderDarkHome;
  const authTabs = ["onboarding", "login", "sign-up", "forgot-password", "booking-confirmed"];
  app.innerHTML = `${state.captainMode ? '<div class="captain-banner">Captain Mode unlocked on this device</div>' : ""}${content()}${authTabs.includes(state.tab) ? "" : renderDock()}${renderModal()}`;
  bind();
}

function persist() {
  store.set("highHook.web.hasSeenOnboarding", !["onboarding", "login", "sign-up", "forgot-password"].includes(state.tab));
  store.set("highHook.web.captainMode", state.captainMode);
  store.set("highHook.web.inquiries", state.inquiries);
  store.set("highHook.web.reminders", state.reminders);
  store.set("highHook.web.checklist", state.checklist);
  store.set("highHook.web.reports", state.reports);
  store.set("highHook.web.selectedLocationIndex", state.selectedLocationIndex);
  store.set("highHook.web.bookingFilter", state.bookingFilter);
  store.set("highHook.web.charterFilter", state.charterFilter);
  store.set("highHook.web.galleryFilter", state.galleryFilter);
  store.set("highHook.web.selectedPhotoIndex", state.selectedPhotoIndex);
  store.set("highHook.web.likedPhotos", state.likedPhotos);
  store.set("highHook.web.readNotifications", state.readNotifications);
  store.set("highHook.web.settings", state.settings);
  store.set("highHook.web.weather", state.weather);
}

function bind() {
  document.querySelectorAll("[data-tab]").forEach((button) => button.addEventListener("click", () => setTab(button.dataset.tab)));
  document.querySelectorAll("[data-trip]").forEach((button) => button.addEventListener("click", () => selectTrip(button.dataset.trip)));
  document.querySelectorAll("[data-trip-detail]").forEach((button) => button.addEventListener("click", () => { selectTrip(button.dataset.tripDetail); state.modal = "trip-detail"; render(); }));
  document.querySelectorAll("[data-goal]").forEach((button) => button.addEventListener("click", () => {
    const goal = goals.find((item) => item[0] === button.dataset.goal);
    state.selectedGoal = goal[0];
    state.selectedTripId = goal[3];
    render();
  }));
  document.querySelectorAll("[data-modal]").forEach((button) => button.addEventListener("click", () => { state.modal = button.dataset.modal; render(); }));
  document.querySelectorAll("[data-action]").forEach((button) => button.addEventListener("click", handleAction));
  document.querySelectorAll("[data-charter-filter]").forEach((button) => button.addEventListener("click", () => {
    state.charterFilter = button.dataset.charterFilter;
    persist();
    render();
  }));
  document.querySelectorAll("[data-booking-filter]").forEach((button) => button.addEventListener("click", () => {
    state.bookingFilter = button.dataset.bookingFilter;
    persist();
    render();
  }));
  document.querySelectorAll("[data-gallery-filter]").forEach((button) => button.addEventListener("click", () => {
    state.galleryFilter = button.dataset.galleryFilter;
    persist();
    render();
  }));
  document.querySelectorAll("[data-photo-index]").forEach((button) => button.addEventListener("click", () => {
    state.selectedPhotoIndex = Number(button.dataset.photoIndex);
    persist();
    setTab("photo-viewer");
  }));
  document.querySelectorAll("[data-notification-id]").forEach((button) => button.addEventListener("click", () => {
    if (!state.readNotifications.includes(button.dataset.notificationId)) {
      state.readNotifications.push(button.dataset.notificationId);
    }
    persist();
    render();
  }));
  document.querySelectorAll("[data-location-index]").forEach((button) => button.addEventListener("click", () => {
    state.selectedLocationIndex = Number(button.dataset.locationIndex);
    persist();
    setTab("location-detail");
  }));
  document.querySelectorAll("[data-setting]").forEach((button) => button.addEventListener("click", () => {
    state.settings[button.dataset.setting] = !state.settings[button.dataset.setting];
    persist();
    render();
  }));
  document.querySelectorAll("[data-party]").forEach((button) => button.addEventListener("click", () => {
    const node = document.querySelector("#partySize");
    state.bookingParty = Math.max(1, Math.min(6, Number(node.textContent) + Number(button.dataset.party)));
    node.textContent = state.bookingParty;
  }));
  document.querySelectorAll("[data-status]").forEach((button) => button.addEventListener("click", () => {
    const item = state.inquiries.find((record) => record.id === button.dataset.id);
    if (item) item.status = button.dataset.status;
    persist();
    render();
  }));
  document.querySelectorAll("[data-reminder]").forEach((button) => button.addEventListener("click", () => {
    const key = `${state.selectedTripId}-${button.dataset.reminder}`;
    state.reminders[key] = !state.reminders[key];
    persist();
    render();
  }));
  document.querySelectorAll("[data-check]").forEach((button) => button.addEventListener("click", () => {
    const current = trip();
    const items = checklistItems(current);
    const set = new Set(state.checklist[current.id] || items.slice(0, 2));
    if (set.has(button.dataset.check)) set.delete(button.dataset.check);
    else set.add(button.dataset.check);
    state.checklist[current.id] = [...set];
    persist();
    render();
  }));
  if (document.querySelector("#localCall")) {
    document.querySelector("#localCall").value = state.weather.localCall;
    document.querySelector("#offshoreCall").value = state.weather.offshoreCall;
  }
}

function handleAction(event) {
  const action = event.currentTarget.dataset.action;
  if (action === "book") openBooking();
  if (action === "close-modal") closeModal();
  if (action === "submit-booking") submitBooking();
  if (action === "reopen-email" && state.bookingSuccess?.mailto) {
    window.location.href = state.bookingSuccess.mailto;
  }
  if (action === "preview-trip-hub") {
    state.tab = "prep";
    state.modal = null;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  if (action === "unlock-captain") unlockCaptain();
  if (action === "lock-captain") {
    state.captainMode = false;
    persist();
    render();
  }
  if (action === "clear-data" && confirm("Clear local booking data from this browser?")) {
    state.inquiries = [];
    state.reminders = {};
    state.checklist = {};
    persist();
    render();
  }
  if (action === "save-weather") {
    state.weather.localCall = document.querySelector("#localCall").value;
    state.weather.offshoreCall = document.querySelector("#offshoreCall").value;
    state.weather.nextUpdate = document.querySelector("#nextUpdate").value;
    state.weather.note = document.querySelector("#weatherNote").value;
    state.weather.updatedAt = new Date().toISOString();
    persist();
    render();
  }
  if (action === "reset-weather") {
    localStorage.removeItem("highHook.web.weather");
    location.reload();
  }
  if (action === "publish-report") {
    state.reports.unshift({
      date: new Date().toLocaleDateString(undefined, { month: "short", day: "numeric" }),
      title: document.querySelector("#reportTitle").value,
      condition: document.querySelector("#reportCondition").value,
      note: document.querySelector("#reportNote").value,
      publishedAt: new Date().toISOString(),
    });
    persist();
    render();
  }
  if (action === "share-packet") shareText(packetText());
  if (action === "copy-export") shareText(document.querySelector("pre").textContent);
  if (action === "response-info") {
    alert("High Hook typically replies within 24 hours. For urgent same-day trip changes, call 781-291-1304.");
  }
  if (action === "mark-notifications-read") {
    state.readNotifications = darkNotifications.map((_, index) => `notification-${index}`);
    persist();
    render();
  }
  if (action === "toggle-photo-like") {
    const index = Math.max(0, Math.min(galleryPhotos.length - 1, state.selectedPhotoIndex));
    state.likedPhotos = state.likedPhotos.includes(index) ? state.likedPhotos.filter((item) => item !== index) : [...state.likedPhotos, index];
    persist();
    render();
  }
  if (action === "share-photo") {
    const photo = galleryPhotos[state.selectedPhotoIndex] || galleryPhotos[0];
    shareText(`High Hook Charters photo: ${photo.title}\n${photo.src}`);
  }
  if (action === "download-photo") {
    const photo = galleryPhotos[state.selectedPhotoIndex] || galleryPhotos[0];
    const link = document.createElement("a");
    link.href = photo.src;
    link.download = `high-hook-${photo.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.jpg`;
    link.click();
  }
  if (action === "photo-info") {
    const photo = galleryPhotos[state.selectedPhotoIndex] || galleryPhotos[0];
    alert(`${photo.title}\nCategory: ${photo.category}\nHigh Hook Charters gallery`);
  }
  if (action === "confirm-dark-booking") {
    const item = selectedDarkCharter();
    const current = trip(item.id);
    state.inquiries.unshift({
      id: `FHH-${Date.now()}`,
      tripId: item.id,
      tripName: item.name,
      name: "High Hook Guest",
      email: document.querySelector("#darkContact")?.value || "Charters@FishHighHook.com",
      partySize: state.bookingParty,
      preferredDate: "2026-10-12",
      notes: `Availability: Captain can pick best window; backup October 13, 2026.\n\n${current.details}`,
      submittedAt: new Date().toISOString(),
      status: "Email draft ready",
    });
    persist();
    setTab("booking-confirmed");
  }
}

function unlockCaptain() {
  const code = prompt("Captain Mode review code");
  if (String(code || "").trim().toUpperCase() === "HIGHHOOK") {
    state.captainMode = true;
    persist();
    render();
  } else if (code !== null) {
    alert("That code did not match. Use HIGHHOOK for local review.");
  }
}

function submitBooking() {
  const selectedTripId = document.querySelector("#bookTripSelect")?.value;
  if (selectedTripId) state.selectedTripId = selectedTripId;
  const name = document.querySelector("#bookName").value.trim();
  const email = document.querySelector("#bookEmail")?.value.trim() || "";
  const phone = document.querySelector("#bookPhone")?.value.trim() || "";
  if (!name || (!email && !phone)) {
    alert("Name and contact are required.");
    return;
  }
  const current = trip();
  const preferredDate = document.querySelector("#preferredDate").value || dateInputValue;
  const backupDate = document.querySelector("#backupDate")?.value || preferredDate;
  const dateFlex = document.querySelector("#dateFlex")?.value || "Flexible by a few days";
  const notes = document.querySelector("#bookNotes").value.trim();
  const contact = email || phone;
  const localNotes = `Availability: ${dateFlex}; backup ${fmtDate(backupDate)}.${notes ? `\n\n${notes}` : ""}`;
  const inquiry = {
    id: crypto.randomUUID(),
    tripId: current.id,
    tripName: current.name,
    name,
    email: contact,
    partySize: Number(document.querySelector("#partySize").textContent),
    preferredDate,
    notes: localNotes,
    submittedAt: new Date().toISOString(),
    status: "Email draft ready",
  };
  state.inquiries.unshift(inquiry);
  persist();
  const body = encodeURIComponent(`High Hook charter request

Trip: ${current.name}
Target: ${current.target}
Rate: ${current.price}
Deposit: ${current.deposit}

Name: ${name}
Email: ${email || "Not provided"}
Phone: ${phone || "Not provided"}
Party size: ${inquiry.partySize}
Preferred date: ${fmtDate(preferredDate)}
Date flexibility: ${dateFlex}
Backup date/window: ${fmtDate(backupDate)}

Notes:
${notes || "None provided yet."}

Sent from the High Hook Charters web app.`);
  const mailto = `mailto:Charters@FishHighHook.com?subject=${encodeURIComponent(`High Hook charter request - ${current.name}`)}&body=${body}`;
  state.bookingSuccess = { inquiryId: inquiry.id, mailto };
  state.modal = "booking-success";
  render();
  window.location.href = mailto;
}

async function shareText(text) {
  if (navigator.share) {
    await navigator.share({ text });
    return;
  }
  await navigator.clipboard.writeText(text);
  alert("Copied.");
}

render();
