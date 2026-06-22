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
    deposit: "$425 deposit",
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
    deposit: "$425 deposit",
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
    deposit: "$800 deposit",
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
    deposit: "$800 deposit",
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
    deposit: "$800 deposit",
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
    capacity: "Ages 10-15",
    bestFor: "Kids who love the ocean or want to learn",
    price: "$600 per camper",
    deposit: "Camp registration",
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
  tab: "trips",
  selectedTripId: "bass-local",
  selectedGoal: "firstTimer",
  modal: null,
  bookingSuccess: null,
  captainMode: store.get("highHook.web.captainMode", false),
  inquiries: store.get("highHook.web.inquiries", []),
  reminders: store.get("highHook.web.reminders", {}),
  checklist: store.get("highHook.web.checklist", {}),
  reports: store.get("highHook.web.reports", defaultReports),
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
  return new Date(value).toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" });
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
    arrow: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
    card: '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18"/><path d="M7 15h4"/>',
    envelope: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',
    bell: '<path d="M10.3 21a2 2 0 0 0 3.4 0"/><path d="M4 16.5c1.3-1.4 2-3 2-7a6 6 0 0 1 12 0c0 4 0.7 5.6 2 7 .5.5.1 1.5-.7 1.5H4.7c-.8 0-1.2-1-.7-1.5Z"/>',
    home: '<path d="M4 11 12 4l8 7"/><path d="M6 10.5V20h12v-9.5"/><path d="M10 20v-6h4v6"/>',
    images: '<rect x="8" y="3" width="13" height="13" rx="2"/><path d="M16 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h3"/><path d="m9 14 2.4-2.4a1.2 1.2 0 0 1 1.7 0L16 14.5"/><circle cx="16" cy="8" r="1"/>',
    ellipsis: '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
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
  state.tab = tab;
  state.modal = null;
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
          <button class="button primary" data-action="book">${iconLabel("arrow", "Quick book Oct 12")}</button>
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

      <section class="reference-section">
        <div class="section-line">
          <h2>Charter Types</h2>
          <button class="link-button" data-modal="trip-detail">View selected</button>
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
          <button class="button primary block" data-action="book">Request ${current.name}</button>
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

function renderWeather() {
  const callHeadline = {
    Green: "Green for local morning trips",
    Watch: "Watch the next forecast update",
    Hold: "Hold pending captain review",
  }[state.weather.localCall];
  return h`
    <main class="screen stack">
      <h1 class="title">Weather</h1>
      ${card(h`
        ${sectionHeader("Captain call", `Last captain update: ${new Date(state.weather.updatedAt).toLocaleString()}`)}
        <div class="trip-summary">
          <span class="icon-well">${state.weather.localCall === "Green" ? "✓" : state.weather.localCall === "Watch" ? "!" : "×"}</span>
          <div><h3>${callHeadline}</h3><p>${state.weather.note}</p></div>
        </div>
        <div class="plan-grid">
          ${tile("Local bass", state.weather.localCall, "fish")}
          ${tile("Offshore", state.weather.offshoreCall, "radio")}
          ${tile("Next update", state.weather.nextUpdate, "clock")}
        </div>
      `)}
      ${state.captainMode ? renderWeatherEditor() : card(renderNotice("Captain tools locked", "Clients see the latest captain call here. Weather editing is available from Contact after unlocking Captain Mode for local review."))}
      ${card(h`
        ${sectionHeader("Marine conditions", "Captain-entered values saved on this device until live marine data is wired.")}
        <div class="metric-grid">
          ${state.weather.metrics.map((metric) => tile(metric[0], `${metric[1]} · ${metric[2]}`, metric[3])).join("")}
        </div>
        <div class="notice"><p>Client view: these are captain-entered review values until live marine data or authenticated captain updates are connected.</p></div>
      `)}
      ${card(h`
        ${sectionHeader("Watch list", "The variables that change a charter plan fastest.")}
        <div class="tile-grid">
          ${row("wind", "Wind shift", "A small direction change can make one side of the bay fishable and another sloppy.")}
          ${row("warning", "Fog window", "Visibility matters for running, finding birds and returning to the dock comfortably.")}
          ${row("waves", "Ground swell", "Offshore trips need a wider comfort margin than local striped bass trips.")}
          ${row("tide", "Tide timing", "Moving water drives the bite, especially on local bass and bluefish trips.")}
        </div>
      `)}
      ${card(h`
        ${sectionHeader("Captain decision timeline", "Clear timing reduces day-before uncertainty.")}
        ${row("1", "Night before", "Captain reviews wind, tide, sea state, fog and recent bite reports.")}
        ${row("2", "Crew text", "Booked clients receive clothing, timing and dock arrival guidance.")}
        ${row("3", "Morning check", "Final call happens after local observations and any overnight forecast shift.")}
        ${row("4", "Adjust or reschedule", "Safety-first call if the window closes or fishable water changes.")}
      `)}
    </main>
  `;
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
      ${state.captainMode ? `<div class="chip-row">${["Email draft ready", "Awaiting captain", "Captain confirmed", "Deposit due"].map((status) => `<button class="status-button ${inquiry.status === status ? "is-active" : ""}" data-status="${status}" data-id="${inquiry.id}">${status}</button>`).join("")}</div>` : renderNotice("Captain updates locked", "Clients can see the latest request status here. Status editing stays hidden until Captain Mode is unlocked from Contact.")}
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
  return h`
    <main class="screen stack">
      <h1 class="title">Reports</h1>
      ${state.captainMode ? card(h`
        ${sectionHeader("Publish local report", "Prototype captain/CMS controls saved on this device.")}
        <div class="form-grid">
          <div class="field"><label>Title</label><input id="reportTitle" value="Bass bite update" /></div>
          <div class="field"><label>Condition</label><input id="reportCondition" value="Outgoing tide" /></div>
          <div class="field"><label>Report note</label><textarea id="reportNote">Clean water and steady marks around the bay.</textarea></div>
          <button class="button primary" data-action="publish-report">Publish local report</button>
        </div>
      `) : card(renderNotice("Reports are client-safe", "Captain publishing controls stay hidden until Captain Mode is unlocked from Contact."))}
      ${card(h`
        ${sectionHeader("Fishing reports", `${state.reports.length} local report highlights.`)}
        <div class="stack">
          ${state.reports.map((report) => `<article class="report-card" style="padding:14px"><span class="label">${report.date} · ${report.condition}</span><h3>${escapeHtml(report.title)}</h3><p>${escapeHtml(report.note)}</p></article>`).join("")}
        </div>
      `)}
      ${card(h`
        ${sectionHeader("Gallery preview", "Production should connect real trip photos, moderation and public report controls.")}
        <div class="tile-grid">
          ${tile("Bass", "Topwater shots", "fish")}
          ${tile("Offshore", "Tuna windows", "radio")}
          ${tile("Camp", "Kids learning knots", "kids")}
        </div>
      `)}
    </main>
  `;
}

function renderContact() {
  const summary = localDataSummary();
  return h`
    <main class="screen stack">
      <h1 class="title">Contact</h1>
      ${card(h`
        ${sectionHeader("Captain & Contact", "Make it easy to ask a question, find the dock or reopen the store.")}
        <a class="row" href="mailto:Charters@FishHighHook.com"><span class="icon-well">${iconSvg("envelope")}</span><div><b>Email</b><p>Charters@FishHighHook.com</p></div></a>
        <a class="row" href="https://www.fishhighhook.com/"><span class="icon-well">⌘</span><div><b>Website</b><p>fishhighhook.com</p></div></a>
        <a class="row" href="https://maps.apple.com/?q=25%20Mattakeesett%20Ct%20Duxbury%20MA%2002332"><span class="icon-well">${iconSvg("location")}</span><div><b>Departure</b><p>25 Mattakeesett Ct, Duxbury, MA 02332</p></div></a>
        <a class="row" href="https://www.fishhighhook.com/store"><span class="icon-well">${iconSvg("bag")}</span><div><b>Store</b><p>High Hook gear and gift ideas</p></div></a>
      `)}
      ${card(h`
        ${sectionHeader("Captain Mode", state.captainMode ? "Local review tools are visible for weather, reports and booking status." : "Keep the customer app clean. Unlock only when the captain is reviewing operations.")}
        ${row(state.captainMode ? "lock-open" : "lock", state.captainMode ? "Unlocked on this device" : "Locked for client review", state.captainMode ? "Weather update controls, report publishing and Trip Hub status editing are available locally. Production still needs real captain sign-in." : "Clients see reports, weather calls and trip status without editing controls.")}
        <button class="button ${state.captainMode ? "" : "primary"} block" data-action="${state.captainMode ? "lock-captain" : "unlock-captain"}">${state.captainMode ? "Lock Captain Mode" : "Unlock Captain Mode"}</button>
        <p class="muted">Review unlock code: HIGHHOOK. This is a local prototype gate, not production authentication.</p>
      `)}
      ${card(h`
        ${sectionHeader("Trust & safety", "Plain-language expectations for booking, privacy and on-water decisions.")}
        ${row("shield", "Privacy", "Booking details are saved locally on this device for the prototype and sent through your Mail draft. Production needs a published privacy policy and secure backend storage.")}
        ${row("dollar", "Payments", "No card is charged in the app. Deposits and balances are handled only after High Hook confirms the date.")}
        ${row("sun", "Captain authority", "Weather, tide, safety and fishery rules can change. The captain's latest call overrides any sample app data.")}
        ${row("emergency", "Emergency", "For immediate on-water emergencies, call emergency services or hail the Coast Guard. This app is not an emergency channel.")}
        <a class="button block" href="tel:911">Call 911</a>
        <div class="data-box" style="padding:12px"><b>Local client data</b><p>${summary}</p><div class="actions" style="margin-top:12px"><button class="button primary" data-modal="export">Export local data</button><button class="button" data-action="clear-data">Clear local booking data</button></div></div>
      `)}
      ${card(h`
        ${sectionHeader("Sessions", "Kids camp and social evening options from High Hook.")}
        ${row("kids", "Kids Camp", "Ages 10-15 learn fishing, knot tying, lures, fish ID, boating safety and South Shore marine life. $600 · 4 days · 8am-12pm")}
        ${row("moon", "Ladies Night Fishing", "A relaxed evening fishing session for friend groups, first timers and after-work crews. Select summer evenings · ask captain")}
      `)}
      ${card(h`
        ${sectionHeader("Regulations", "Rules move during the season. Use these official sources and defer to the captain before keeping fish.")}
        ${regulations.map((item) => `<a class="row" href="${item[3]}"><span class="icon-well">${item[4]}</span><div><b>${item[0]}</b><p>${item[1]}</p><p><strong>${item[2]}</strong></p></div></a>`).join("")}
        <p class="muted">Verified source links: June 19, 2026. This app should still support captain/admin updates before release.</p>
      `)}
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

function renderDock() {
  const tabs = [
    ["trips", "home", "Home"],
    ["weather", "sun", "Weather"],
    ["prep", "checklist", "Hub"],
    ["reports", "images", "Gallery"],
    ["contact", "ellipsis", "More"],
  ];
  return `<nav class="dock" aria-label="High Hook navigation">${tabs.map((tab) => `<button class="dock-button ${state.tab === tab[0] ? "is-active" : ""}" data-tab="${tab[0]}"><span>${iconSvg(tab[1])}</span><span>${tab[2]}</span></button>`).join("")}</nav>`;
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
              <div class="field"><label>Name</label><input id="bookName" autocomplete="name" /></div>
              <div class="field"><label>Email</label><input id="bookEmail" type="email" autocomplete="email" /></div>
              <div class="counter"><b>Party size</b><div class="counter-controls"><button class="button" data-party="-1">-</button><span id="partySize">4</span><button class="button" data-party="1">+</button></div></div>
              <div class="field"><label>Preferred date</label><input id="preferredDate" type="date" value="${dateInputValue}" /></div>
              <div class="field"><label>Date flexibility</label><select id="dateFlex"><option>Flexible by a few days</option><option>Exact date</option><option>Captain can pick best window</option></select></div>
              <div class="field"><label>Backup date/window</label><input id="backupDate" type="date" value="${dateInputValue}" /></div>
              <div class="field"><label>Notes for the captain</label><textarea id="bookNotes" placeholder="Target species, kids, experience level, date flexibility or special considerations."></textarea></div>
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
    trips: renderTrips,
    weather: renderWeather,
    prep: renderPrep,
    reports: renderReports,
    contact: renderContact,
  }[state.tab]();
  app.innerHTML = `${state.captainMode ? '<div class="captain-banner">Captain Mode unlocked on this device</div>' : ""}${content}${renderDock()}${renderModal()}`;
  bind();
}

function persist() {
  store.set("highHook.web.captainMode", state.captainMode);
  store.set("highHook.web.inquiries", state.inquiries);
  store.set("highHook.web.reminders", state.reminders);
  store.set("highHook.web.checklist", state.checklist);
  store.set("highHook.web.reports", state.reports);
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
  document.querySelectorAll("[data-party]").forEach((button) => button.addEventListener("click", () => {
    const node = document.querySelector("#partySize");
    node.textContent = Math.max(1, Math.min(6, Number(node.textContent) + Number(button.dataset.party)));
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
  const name = document.querySelector("#bookName").value.trim();
  const email = document.querySelector("#bookEmail").value.trim();
  if (!name || !email) {
    alert("Name and email are required.");
    return;
  }
  const current = trip();
  const preferredDate = document.querySelector("#preferredDate").value || dateInputValue;
  const backupDate = document.querySelector("#backupDate").value || preferredDate;
  const dateFlex = document.querySelector("#dateFlex").value;
  const notes = document.querySelector("#bookNotes").value.trim();
  const localNotes = `Availability: ${dateFlex}; backup ${fmtDate(backupDate)}.${notes ? `\n\n${notes}` : ""}`;
  const inquiry = {
    id: crypto.randomUUID(),
    tripId: current.id,
    tripName: current.name,
    name,
    email,
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
Email: ${email}
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
