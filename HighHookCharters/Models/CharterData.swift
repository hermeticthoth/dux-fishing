import Foundation
import SwiftUI

struct CharterTrip: Identifiable, Hashable {
    let id: String
    let name: String
    let symbol: String
    let duration: String
    let season: String
    let target: String
    let capacity: String
    let bestFor: String
    let price: String
    let deposit: String
    let details: String
    let prep: [String]
}

struct FishingReport: Identifiable, Codable, Equatable {
    let id: UUID
    let date: String
    var title: String
    var note: String
    var condition: String
    var publishedAt: Date

    init(id: UUID = UUID(), date: String, title: String, note: String, condition: String, publishedAt: Date = Date()) {
        self.id = id
        self.date = date
        self.title = title
        self.note = note
        self.condition = condition
        self.publishedAt = publishedAt
    }
}

struct WeatherMetric: Identifiable, Codable, Equatable {
    let id: UUID
    let label: String
    let symbol: String
    var value: String
    var status: String

    init(id: UUID = UUID(), label: String, value: String, status: String, symbol: String) {
        self.id = id
        self.label = label
        self.value = value
        self.status = status
        self.symbol = symbol
    }
}

struct RegulationResource: Identifiable {
    let id = UUID()
    let title: String
    let detail: String
    let source: String
    let url: URL
    let symbol: String
}

struct InquiryRecord: Identifiable, Codable, Equatable {
    enum Status: String, Codable, CaseIterable, Equatable {
        case draftReady = "Email draft ready"
        case awaitingCaptain = "Awaiting captain"
        case captainConfirmed = "Captain confirmed"
        case depositDue = "Deposit due"

        var symbol: String {
            switch self {
            case .draftReady: "envelope"
            case .awaitingCaptain: "clock"
            case .captainConfirmed: "checkmark.seal"
            case .depositDue: "creditcard"
            }
        }
    }

    let id: UUID
    let tripId: String
    let tripName: String
    let name: String
    let email: String
    let partySize: Int
    let preferredDate: Date
    let notes: String
    let submittedAt: Date
    var status: Status

    init(
        id: UUID = UUID(),
        tripId: String,
        tripName: String,
        name: String,
        email: String,
        partySize: Int,
        preferredDate: Date,
        notes: String,
        submittedAt: Date,
        status: Status
    ) {
        self.id = id
        self.tripId = tripId
        self.tripName = tripName
        self.name = name
        self.email = email
        self.partySize = partySize
        self.preferredDate = preferredDate
        self.notes = notes
        self.submittedAt = submittedAt
        self.status = status
    }
}

struct TripReminderPreference: Identifiable, Codable, Equatable {
    enum Kind: String, Codable, CaseIterable, Equatable {
        case nightBefore = "Night-before weather check"
        case dockArrival = "Dock arrival"
        case prepChecklist = "Prep checklist"
        case postTripPhotos = "Post-trip photos"

        var symbol: String {
            switch self {
            case .nightBefore: "cloud.sun"
            case .dockArrival: "location"
            case .prepChecklist: "checklist"
            case .postTripPhotos: "photo.on.rectangle"
            }
        }

        var timing: String {
            switch self {
            case .nightBefore: "Evening before departure"
            case .dockArrival: "Morning-of dock window"
            case .prepChecklist: "One day before trip"
            case .postTripPhotos: "After the boat returns"
            }
        }

        var notificationTitle: String {
            switch self {
            case .nightBefore: "High Hook weather check"
            case .dockArrival: "High Hook dock arrival"
            case .prepChecklist: "High Hook prep checklist"
            case .postTripPhotos: "High Hook photos"
            }
        }

        var notificationBody: String {
            switch self {
            case .nightBefore: "Check the captain's latest weather call before your trip."
            case .dockArrival: "Review the dock address, parking plan and what to bring aboard."
            case .prepChecklist: "Run through your trip checklist so the morning starts easy."
            case .postTripPhotos: "Ask the captain about trip photos, fish care and report highlights."
            }
        }
    }

    let id: String
    let tripId: String
    var kind: Kind
    var isEnabled: Bool
    var updatedAt: Date

    init(tripId: String, kind: Kind, isEnabled: Bool, updatedAt: Date = Date()) {
        self.id = Self.makeId(tripId: tripId, kind: kind)
        self.tripId = tripId
        self.kind = kind
        self.isEnabled = isEnabled
        self.updatedAt = updatedAt
    }

    static func makeId(tripId: String, kind: Kind) -> String {
        "\(tripId)-\(kind.rawValue)"
    }
}

struct CaptainWeatherUpdate: Codable, Equatable {
    enum CharterCall: String, Codable, CaseIterable, Equatable {
        case green = "Green"
        case watch = "Watch"
        case hold = "Hold"

        var symbol: String {
            switch self {
            case .green: "checkmark.seal.fill"
            case .watch: "exclamationmark.triangle.fill"
            case .hold: "xmark.octagon.fill"
            }
        }

        var headline: String {
            switch self {
            case .green: "Green for local morning trips"
            case .watch: "Watch the next forecast update"
            case .hold: "Hold pending captain review"
            }
        }
    }

    var localCall: CharterCall
    var offshoreCall: CharterCall
    var nextUpdate: String
    var note: String
    var updatedAt: Date
    var metrics: [WeatherMetric]

    static let sample = CaptainWeatherUpdate(
        localCall: .green,
        offshoreCall: .watch,
        nextUpdate: "7:00 PM",
        note: "Local striped bass trips look comfortable. Offshore trips still need a captain review after the evening forecast update.",
        updatedAt: Date(timeIntervalSince1970: 1_750_300_800),
        metrics: CharterData.weather
    )
}

enum CharterData {
    static let trips: [CharterTrip] = [
        CharterTrip(
            id: "bass-local",
            name: "Striped Bass Local",
            symbol: "fish",
            duration: "Half day",
            season: "May through October",
            target: "Striped bass and bluefish",
            capacity: "1-6 anglers",
            bestFor: "Families, first timers, steady local action",
            price: "$825 1-4, $850 5, $875 6",
            deposit: "$425 deposit",
            details: "Fish Duxbury, Plymouth, Marshfield, Scituate, Cohasset, Quincy and Boston Harbor with light tackle, trolling, live bait or casting depending on the bite.",
            prep: ["Soft-soled shoes", "Light rain shell", "Sunglasses", "Snacks and drinks"]
        ),
        CharterTrip(
            id: "race-point",
            name: "Race Point Striped Bass",
            symbol: "water.waves",
            duration: "5 hours",
            season: "Peak migration windows",
            target: "Trophy striped bass",
            capacity: "Up to 6 anglers",
            bestFor: "Groups chasing a bigger run",
            price: "$1,250 half day",
            deposit: "$425 deposit",
            details: "A longer run to Race Point for a chance at larger schools and heavier fish when the Cape bite lines up.",
            prep: ["Wind layer", "Hat with retention", "Camera", "Motion sickness plan"]
        ),
        CharterTrip(
            id: "bluefin",
            name: "Bluefin Tuna",
            symbol: "dot.radiowaves.left.and.right",
            duration: "8 hours",
            season: "Offshore season",
            target: "Bluefin tuna",
            capacity: "1-6 anglers",
            bestFor: "Serious crews ready for an offshore day",
            price: "$1,550 1-4, $1,600 5, $1,650 6",
            deposit: "$800 deposit",
            details: "Offshore tuna trip with stand-up gear, trolling, casting or live bait strategy based on reports and conditions.",
            prep: ["Packed lunch", "Warm layer", "Waterproof bag", "Non-marking deck shoes"]
        ),
        CharterTrip(
            id: "haddock-cod",
            name: "Haddock / Cod",
            symbol: "anchor",
            duration: "6 or 8 hours",
            season: "Groundfish windows",
            target: "Haddock and cod",
            capacity: "1-6 anglers",
            bestFor: "Filling the cooler and learning bottom fishing",
            price: "$1,550 3/4 day, $1,750 full day",
            deposit: "$800 deposit",
            details: "Bottom fishing structure and ledges for haddock and cod, with rigging and fish handling handled by the crew.",
            prep: ["Cooler in the car", "Food and drinks", "Deck-safe footwear", "Extra layers"]
        ),
        CharterTrip(
            id: "shark",
            name: "Shark Fishing",
            symbol: "sailboat",
            duration: "Full day",
            season: "Summer offshore",
            target: "Shark species",
            capacity: "1-6 anglers",
            bestFor: "High-adrenaline groups and experienced anglers",
            price: "$1,650 1-4, $1,750 5-6",
            deposit: "$800 deposit",
            details: "A full offshore day built around chumming, heavy tackle and safe catch-and-release handling.",
            prep: ["Sun protection", "Full lunch", "Camera", "Comfortable layered clothing"]
        ),
        CharterTrip(
            id: "kids-camp",
            name: "High Hook Kids Camp",
            symbol: "figure.and.child.holdinghands",
            duration: "4 days, 8am-12pm",
            season: "Summer sessions",
            target: "Fishing, ecology and safe boating",
            capacity: "Ages 10-15",
            bestFor: "Kids who love the ocean or want to learn",
            price: "$600 per camper",
            deposit: "Camp registration",
            details: "Four mornings of fishing, knot tying, lures, fish ID, boating safety and South Shore marine life.",
            prep: ["Sunscreen", "Water bottle", "Snack", "Life jacket if preferred"]
        ),
        CharterTrip(
            id: "ladies-night",
            name: "Ladies Night Fishing",
            symbol: "moon.stars",
            duration: "Evening session",
            season: "Select summer dates",
            target: "Striped bass, bluefish and harbor sunset",
            capacity: "Private groups",
            bestFor: "Friend groups, relaxed after-work outings and first timers",
            price: "Ask for current availability",
            deposit: "Confirmed with captain",
            details: "A social, approachable evening fishing session for groups who want an easy on-ramp to High Hook without committing to a full offshore day.",
            prep: ["Light jacket", "Sunglasses", "Snacks and drinks", "Camera"]
        )
    ]

    static let checklist = [
        "Confirm departure: 25 Mattakeesett Ct, Duxbury, MA 02332",
        "Bring food, drinks, sunglasses, hat and soft-soled shoes",
        "Check weather window and captain text the evening before",
        "Purchase Massachusetts saltwater permit if needed",
        "Leave large coolers in the vehicle until fish return dockside"
    ]

    static let weather = [
        WeatherMetric(label: "Wind", value: "8 kt SW", status: "Good", symbol: "wind"),
        WeatherMetric(label: "Swell", value: "1.5 ft", status: "Fishable", symbol: "water.waves"),
        WeatherMetric(label: "Tide", value: "Outgoing 8:40", status: "Prime", symbol: "arrow.down.to.line.compact"),
        WeatherMetric(label: "Water", value: "62F", status: "Active", symbol: "thermometer.sun")
    ]

    static let reports = [
        FishingReport(date: "Jun 18", title: "Bass stacked tight on moving water", note: "Early outgoing tide produced the cleanest topwater shots. Keep the rod tip down when the bluefish show.", condition: "62F water", publishedAt: Date(timeIntervalSince1970: 1_750_300_800)),
        FishingReport(date: "Jun 15", title: "Groundfish bite steady east of the bay", note: "Haddock responded well to lighter rigs. Cod released cleanly when the drift slowed.", condition: "2 ft swell", publishedAt: Date(timeIntervalSince1970: 1_750_041_600)),
        FishingReport(date: "Jun 11", title: "Tuna windows opening offshore", note: "Scattered marks and bird life. The next settled-weather stretch is worth watching.", condition: "10 kt wind", publishedAt: Date(timeIntervalSince1970: 1_749_696_000))
    ]

    static let regulations: [RegulationResource] = [
        RegulationResource(
            title: "Massachusetts saltwater rules",
            detail: "Striped bass, bluefish, sharks and state-water species can change by season. Check the official DMF table before keeping fish.",
            source: "Mass.gov · updated Apr 28, 2026",
            url: URL(string: "https://www.mass.gov/info-details/recreational-saltwater-fishing-regulations")!,
            symbol: "fish"
        ),
        RegulationResource(
            title: "Atlantic bluefin tuna",
            detail: "Bluefin retention limits can be adjusted or closed during the season. Captain handles permits and final retention calls.",
            source: "NOAA HMS · current bag limits",
            url: URL(string: "https://www.fisheries.noaa.gov/atlantic-highly-migratory-species/recreational-atlantic-bluefin-tuna-fishery-statuses-and-bag")!,
            symbol: "dot.radiowaves.left.and.right"
        ),
        RegulationResource(
            title: "Groundfish: haddock and cod",
            detail: "Haddock and cod limits depend on area, season and species. Confirm before any cooler-filling trip.",
            source: "NOAA Northeast Multispecies",
            url: URL(string: "https://www.fisheries.noaa.gov/species/northeast-multispecies-groundfish/recreational")!,
            symbol: "anchor"
        )
    ]
}
