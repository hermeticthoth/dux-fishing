import SwiftUI

struct PrepView: View {
    @AppStorage("highHook.prepChecklistProgress") private var checklistProgressJSON = "{}"
    let trip: CharterTrip
    let inquiry: InquiryRecord?
    let inquiryHistory: [InquiryRecord]
    let reminders: [TripReminderPreference]
    let remindersCanSchedule: Bool
    let captainModeUnlocked: Bool
    let onUpdateInquiryStatus: (InquiryRecord, InquiryRecord.Status) -> Void
    let onToggleReminder: (TripReminderPreference.Kind, Bool) -> Void
    let onBook: () -> Void
    @State private var checkedItems: Set<String> = []

    private var checklist: [String] {
        [
            "Confirm departure: 25 Mattakeesett Ct, Duxbury, MA 02332",
            "Watch for the captain's weather text the evening before"
        ] + trip.prep + [
            "Leave large coolers in the vehicle until fish return dockside"
        ]
    }

    private var defaultCheckedItems: Set<String> {
        Set(checklist.prefix(2))
    }

    private var completion: Double {
        guard !checklist.isEmpty else { return 0 }
        return Double(checkedItems.count) / Double(checklist.count)
    }

    var body: some View {
        ScrollView {
            LazyVStack(spacing: 18) {
                BrandScreenTitle(title: "Trip Hub")

                MarineCard {
                    VStack(alignment: .leading, spacing: 16) {
                        SectionHeader(
                            title: "\(trip.name) · Trip Hub",
                            subtitle: tripHubSubtitle
                        )

                        LazyVGrid(columns: [GridItem(.adaptive(minimum: 148), spacing: 12)], spacing: 12) {
                            HubStatusTile(symbol: "checkmark.seal", title: "Inquiry", value: inquiryStatus, tone: inquiry == nil ? .watch : .ready)
                            HubStatusTile(symbol: "cloud.sun", title: "Weather", value: "Captain review", tone: .watch)
                            HubStatusTile(symbol: "clock", title: "Trip time", value: trip.duration, tone: .ready)
                            HubStatusTile(symbol: "checklist", title: "Prep", value: "\(checkedItems.count)/\(checklist.count) ready", tone: completion >= 1 ? .ready : .watch)
                        }
                    }
                }

                if let inquiry {
                    InquiryStatusCard(
                        inquiry: inquiry,
                        captainModeUnlocked: captainModeUnlocked,
                        onUpdateStatus: { status in
                            onUpdateInquiryStatus(inquiry, status)
                        }
                    )
                    DayOfPlanCard(trip: trip, inquiry: inquiry)
                } else {
                    EmptyTripHubCard(trip: trip, onBook: onBook)
                }

                if inquiryHistory.count > 1 {
                    InquiryHistoryCard(inquiries: inquiryHistory)
                }

                TripReminderCard(
                    reminders: reminders,
                    canScheduleNotifications: remindersCanSchedule,
                    onToggleReminder: onToggleReminder
                )

                MarineCard {
                    VStack(alignment: .leading, spacing: 16) {
                        SectionHeader(
                            title: "Captain note",
                            subtitle: "The kind of short operational update a client should see before departure."
                        )
                        HStack(alignment: .top, spacing: 12) {
                            Image(systemName: "quote.opening")
                                .font(.title3)
                                .foregroundStyle(Color.highHookOrange)
                            Text(captainNote)
                                .font(.headline)
                                .foregroundStyle(Color.highHookSunwash)
                        }
                        .padding(14)
                        .background(Color.highHookNavy.opacity(0.64), in: RoundedRectangle(cornerRadius: 12, style: .continuous))
                    }
                }

                MarineCard {
                    VStack(alignment: .leading, spacing: 16) {
                        SectionHeader(
                            title: "Dock arrival",
                            subtitle: "Reduce morning-of confusion with the exact dock plan."
                        )
                        ArrivalRow(symbol: "mappin.and.ellipse", title: "Departure", detail: "25 Mattakeesett Ct, Duxbury, MA 02332")
                        ArrivalRow(symbol: "car", title: "Parking", detail: "Park near the marina entrance unless the captain texts a different slip.")
                        ArrivalRow(symbol: "bag", title: "Bring aboard", detail: "Soft bag, drinks, snacks, sunglasses, hat, and soft-soled shoes.")
                        Link(destination: URL(string: "https://maps.apple.com/?q=25%20Mattakeesett%20Ct%20Duxbury%20MA%2002332")!) {
                            Label("Open in Maps", systemImage: "location")
                                .frame(maxWidth: .infinity)
                        }
                        .buttonStyle(BrandActionButtonStyle(tone: .primary, expands: true))
                    }
                }

                MarineCard {
                    VStack(alignment: .leading, spacing: 16) {
                        SectionHeader(
                            title: "Prep checklist",
                            subtitle: "\(checkedItems.count) of \(checklist.count) ready for \(trip.name) · saved on this device"
                        )

                        ProgressView(value: completion)
                            .tint(Color.highHookOrange)

                        ForEach(checklist, id: \.self) { item in
                            Button {
                                toggle(item)
                            } label: {
                                HStack(alignment: .top, spacing: 12) {
                                    Image(systemName: checkedItems.contains(item) ? "checkmark.circle.fill" : "circle")
                                        .foregroundStyle(checkedItems.contains(item) ? Color.highHookOrange : Color.highHookDeckText)
                                    Text(item)
                                        .foregroundStyle(Color.highHookSunwash)
                                        .frame(maxWidth: .infinity, alignment: .leading)
                                }
                                .padding(.vertical, 8)
                            }
                            .buttonStyle(.plain)
                        }
                    }
                }
            }
            .padding()
            .padding(.bottom, 118)
        }
        .scrollContentBackground(.hidden)
        .background(ChartPaperBackground().ignoresSafeArea())
        .navigationTitle("")
        .onAppear {
            loadChecklistProgress()
        }
        .onChange(of: trip.id) {
            loadChecklistProgress()
        }
    }

    private func toggle(_ item: String) {
        if checkedItems.contains(item) {
            checkedItems.remove(item)
        } else {
            checkedItems.insert(item)
        }
        persistChecklistProgress()
    }

    private func loadChecklistProgress() {
        let savedProgress = decodedChecklistProgress()
        if let savedItems = savedProgress[trip.id] {
            checkedItems = Set(savedItems).intersection(checklist)
        } else {
            checkedItems = defaultCheckedItems
            persistChecklistProgress(defaultCheckedItems)
        }
    }

    private func persistChecklistProgress(_ items: Set<String>? = nil) {
        var savedProgress = decodedChecklistProgress()
        savedProgress[trip.id] = Array(items ?? checkedItems).sorted()

        guard let data = try? JSONEncoder().encode(savedProgress),
              let json = String(data: data, encoding: .utf8)
        else { return }
        checklistProgressJSON = json
    }

    private func decodedChecklistProgress() -> [String: [String]] {
        guard let data = checklistProgressJSON.data(using: .utf8),
              let progress = try? JSONDecoder().decode([String: [String]].self, from: data)
        else { return [:] }
        return progress
    }

    private var depositStatus: String {
        trip.deposit.contains("$") ? "Hold \(trip.deposit)" : trip.deposit
    }

    private var tripHubSubtitle: String {
        if let inquiry {
            return "\(inquiry.name)'s request for \(Self.dateFormatter.string(from: inquiry.preferredDate))"
        }
        return "A booked-client view for this selected trip after the captain confirms."
    }

    private var inquiryStatus: String {
        inquiry?.status.rawValue ?? depositStatus
    }

    private var captainNote: String {
        switch trip.id {
        case "bluefin", "shark", "haddock-cod":
            "Offshore comfort depends on swell and wind direction. Pack food, layers and a waterproof bag; the captain will confirm the final go/no-go window."
        case "kids-camp":
            "Camp mornings focus on fishing, knot tying, fish ID and boating safety. Send any medical or comfort notes before the first morning."
        case "ladies-night":
            "Evening timing depends on tide and sunset. Bring a light jacket, sunglasses and anything you want for snacks or photos."
        default:
            "Outgoing tide is the plan. Dress for a cool run across the bay, bring sunglasses, and leave the large cooler in the car until we return."
        }
    }

    private static let dateFormatter: DateFormatter = {
        let formatter = DateFormatter()
        formatter.dateStyle = .medium
        formatter.timeStyle = .none
        return formatter
    }()
}

private struct DayOfPlanCard: View {
    let trip: CharterTrip
    let inquiry: InquiryRecord
    @State private var showingTripPacket = false

    var body: some View {
        MarineCard {
            VStack(alignment: .leading, spacing: 16) {
                SectionHeader(
                    title: "Day-of plan",
                    subtitle: "A compact client itinerary for the morning of the trip."
                )

                LazyVGrid(columns: [GridItem(.adaptive(minimum: 178), spacing: 10)], spacing: 10) {
                    PlanTile(symbol: "calendar", title: "Preferred date", value: Self.dateFormatter.string(from: inquiry.preferredDate))
                    PlanTile(symbol: inquiry.status.symbol, title: "Captain status", value: inquiry.status.rawValue)
                    PlanTile(symbol: "clock", title: "Trip length", value: trip.duration)
                    PlanTile(symbol: "creditcard", title: "Hold", value: trip.deposit)
                }

                VStack(spacing: 10) {
                    PlanRow(
                        symbol: "cloud.sun",
                        title: "Weather call",
                        detail: "Watch for the captain's go/no-go text the evening before. Offshore trips may wait on the latest marine forecast."
                    )
                    PlanRow(
                        symbol: "mappin.and.ellipse",
                        title: "Meet at the dock",
                        detail: "25 Mattakeesett Ct, Duxbury, MA 02332. Bring soft-soled shoes and keep large coolers in the vehicle."
                    )
                    PlanRow(
                        symbol: "person.3",
                        title: "Crew",
                        detail: "\(inquiry.partySize) anglers for \(trip.name). \(availabilitySummary)"
                    )
                }

                Button {
                    showingTripPacket = true
                } label: {
                    Label("View trip packet", systemImage: "doc.text")
                        .frame(maxWidth: .infinity)
                }
                .buttonStyle(BrandActionButtonStyle(tone: .primary, expands: true))
                .accessibilityHint("Opens a shareable client trip plan")

                HStack(spacing: 10) {
                    Link(destination: URL(string: "https://maps.apple.com/?q=25%20Mattakeesett%20Ct%20Duxbury%20MA%2002332")!) {
                        Label("Maps", systemImage: "location")
                            .frame(maxWidth: .infinity)
                    }
                    .buttonStyle(BrandActionButtonStyle(tone: .primary, expands: true))

                    Link(destination: captainMailURL) {
                        Label("Ask", systemImage: "envelope")
                            .frame(maxWidth: .infinity)
                    }
                    .buttonStyle(BrandActionButtonStyle(tone: .secondary, expands: true))
                }
            }
        }
        .sheet(isPresented: $showingTripPacket) {
            TripPacketSheet(trip: trip, inquiry: inquiry, packetText: tripPacketText)
        }
    }

    private var availabilitySummary: String {
        let firstLine = inquiry.notes
            .split(separator: "\n", omittingEmptySubsequences: true)
            .first
            .map(String.init) ?? ""
        guard firstLine.hasPrefix("Availability:") else {
            return "Confirm any backup windows with the captain."
        }
        return firstLine
    }

    private var captainMailURL: URL {
        var components = URLComponents()
        components.scheme = "mailto"
        components.path = "Charters@FishHighHook.com"
        components.queryItems = [
            URLQueryItem(name: "subject", value: "High Hook trip question - \(trip.name)"),
            URLQueryItem(name: "body", value: """
            Hi High Hook,

            I have a question about my \(trip.name) request for \(Self.dateFormatter.string(from: inquiry.preferredDate)).

            Name: \(inquiry.name)
            Party size: \(inquiry.partySize)
            Status shown in app: \(inquiry.status.rawValue)

            Question:
            """)
        ]
        return components.url ?? URL(string: "mailto:Charters@FishHighHook.com")!
    }

    private var tripPacketText: String {
        """
        High Hook Charters Trip Packet

        Trip: \(trip.name)
        Preferred date: \(Self.dateFormatter.string(from: inquiry.preferredDate))
        Captain status: \(inquiry.status.rawValue)
        Client: \(inquiry.name)
        Party size: \(inquiry.partySize) anglers
        Trip length: \(trip.duration)
        Rate: \(trip.price)
        Deposit/Hold: \(trip.deposit)

        Departure
        25 Mattakeesett Ct
        Duxbury, MA 02332

        Weather call
        Watch for the captain's go/no-go text the evening before. Offshore trips may wait on the latest marine forecast.

        Availability
        \(availabilitySummary)

        Bring aboard
        Soft bag, drinks, snacks, sunglasses, hat, layers and soft-soled shoes. Keep large coolers in the vehicle until fish return dockside.

        Captain question
        Charters@FishHighHook.com
        """
    }

    private static let dateFormatter: DateFormatter = {
        let formatter = DateFormatter()
        formatter.dateStyle = .medium
        formatter.timeStyle = .none
        return formatter
    }()
}

private struct TripPacketSheet: View {
    let trip: CharterTrip
    let inquiry: InquiryRecord
    let packetText: String
    @Environment(\.dismiss) private var dismiss

    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(alignment: .leading, spacing: 16) {
                    SectionHeader(
                        title: "Trip packet",
                        subtitle: "\(trip.name) · \(Self.dateFormatter.string(from: inquiry.preferredDate))"
                    )

                    Text(packetText)
                        .font(.callout.weight(.semibold))
                        .foregroundStyle(Color.highHookSunwash)
                        .textSelection(.enabled)
                        .frame(maxWidth: .infinity, alignment: .leading)
                        .padding(14)
                        .background(Color.highHookNavy.opacity(0.7), in: RoundedRectangle(cornerRadius: 12, style: .continuous))
                        .overlay {
                            RoundedRectangle(cornerRadius: 12, style: .continuous)
                                .stroke(Color.highHookLine.opacity(0.3), lineWidth: 1)
                        }

                    ShareLink(item: packetText) {
                        Label("Share trip packet", systemImage: "square.and.arrow.up")
                            .frame(maxWidth: .infinity)
                    }
                    .buttonStyle(BrandActionButtonStyle(tone: .primary, expands: true))

                    Text("Local review mode: this packet is generated from device-saved inquiry details. Production should generate the final client packet from the confirmed booking record.")
                        .font(.caption)
                        .foregroundStyle(Color.highHookDeckText)
                }
                .padding()
            }
            .background(ChartPaperBackground().ignoresSafeArea())
            .navigationTitle("Trip Packet")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .topBarTrailing) {
                    Button("Done") {
                        dismiss()
                    }
                    .foregroundStyle(Color.highHookOrange)
                }
            }
        }
        .presentationDetents([.medium, .large])
    }

    private static let dateFormatter: DateFormatter = {
        let formatter = DateFormatter()
        formatter.dateStyle = .medium
        formatter.timeStyle = .none
        return formatter
    }()
}

private struct EmptyTripHubCard: View {
    let trip: CharterTrip
    let onBook: () -> Void

    var body: some View {
        MarineCard {
            VStack(alignment: .leading, spacing: 16) {
                SectionHeader(
                    title: "Start this Trip Hub",
                    subtitle: "Send a request for \(trip.name) and this hub becomes a client-specific plan."
                )

                LazyVGrid(columns: [GridItem(.adaptive(minimum: 154), spacing: 10)], spacing: 10) {
                    PlanTile(symbol: "clock", title: "Trip length", value: trip.duration)
                    PlanTile(symbol: "dollarsign.circle", title: "Rate", value: trip.price)
                    PlanTile(symbol: "creditcard", title: "Deposit", value: trip.deposit)
                    PlanTile(symbol: "person.3", title: "Capacity", value: trip.capacity)
                }

                VStack(spacing: 10) {
                    PlanRow(
                        symbol: "1.circle",
                        title: "Choose the trip",
                        detail: "\(trip.bestFor). The booking sheet will carry the selected trip, date and party size into a prepared email."
                    )
                    PlanRow(
                        symbol: "2.circle",
                        title: "Captain confirms",
                        detail: "High Hook confirms weather, availability and deposit details before the date is held."
                    )
                    PlanRow(
                        symbol: "3.circle",
                        title: "Hub unlocks",
                        detail: "After the request is saved locally, this screen shows status, reminders, dock details and the prep checklist."
                    )
                }

                ViewThatFits(in: .horizontal) {
                    HStack(spacing: 10) {
                        requestButton
                        askCaptainLink
                    }
                    VStack(alignment: .leading, spacing: 10) {
                        requestButton
                        askCaptainLink
                    }
                }

                Text("Prototype note: local request status appears immediately after the prepared email step. Production should sync this to CRM/Supabase and captain admin review.")
                    .font(.caption)
                    .foregroundStyle(Color.highHookDeckText)
            }
        }
    }

    private var requestButton: some View {
        Button(action: onBook) {
            Label("Request this trip", systemImage: "calendar.badge.plus")
                .frame(maxWidth: .infinity)
        }
        .buttonStyle(BrandActionButtonStyle(tone: .primary, expands: true))
    }

    private var askCaptainLink: some View {
        Link(destination: captainMailURL) {
            Label("Ask Captain", systemImage: "envelope")
                .frame(maxWidth: .infinity)
        }
        .buttonStyle(BrandActionButtonStyle(tone: .secondary, expands: true))
    }

    private var captainMailURL: URL {
        var components = URLComponents()
        components.scheme = "mailto"
        components.path = "Charters@FishHighHook.com"
        components.queryItems = [
            URLQueryItem(name: "subject", value: "High Hook trip question - \(trip.name)"),
            URLQueryItem(name: "body", value: """
            Hi High Hook,

            I have a question before requesting \(trip.name).

            Trip: \(trip.name)
            Rate: \(trip.price)
            Deposit: \(trip.deposit)

            Question:
            """)
        ]
        return components.url ?? URL(string: "mailto:Charters@FishHighHook.com")!
    }
}

private struct PlanTile: View {
    let symbol: String
    let title: String
    let value: String

    var body: some View {
        VStack(alignment: .leading, spacing: 7) {
            Image(systemName: symbol)
                .foregroundStyle(Color.highHookOrange)
            Text(title.uppercased())
                .font(.caption2.weight(.black))
                .foregroundStyle(Color.highHookDeckText)
            Text(value)
                .font(.headline.weight(.black))
                .foregroundStyle(Color.highHookSunwash)
                .lineLimit(2)
                .minimumScaleFactor(0.82)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .padding(12)
        .background(Color.highHookNavy.opacity(0.62), in: RoundedRectangle(cornerRadius: 12, style: .continuous))
        .overlay {
            RoundedRectangle(cornerRadius: 12, style: .continuous)
                .stroke(Color.highHookLine.opacity(0.26), lineWidth: 1)
        }
    }
}

private struct PlanRow: View {
    let symbol: String
    let title: String
    let detail: String

    var body: some View {
        HStack(alignment: .top, spacing: 12) {
            Image(systemName: symbol)
                .foregroundStyle(Color.highHookOrange)
                .frame(width: 30, height: 30)
                .background(Color.highHookNavy.opacity(0.72), in: RoundedRectangle(cornerRadius: 8, style: .continuous))
            VStack(alignment: .leading, spacing: 4) {
                Text(title)
                    .font(.subheadline.weight(.black))
                    .foregroundStyle(Color.highHookSunwash)
                Text(detail)
                    .font(.caption)
                    .foregroundStyle(Color.highHookDeckText)
                    .fixedSize(horizontal: false, vertical: true)
            }
            Spacer(minLength: 0)
        }
        .padding(10)
        .background(Color.highHookNavy.opacity(0.46), in: RoundedRectangle(cornerRadius: 10, style: .continuous))
    }
}

private struct TripReminderCard: View {
    let reminders: [TripReminderPreference]
    let canScheduleNotifications: Bool
    let onToggleReminder: (TripReminderPreference.Kind, Bool) -> Void

    private var enabledCount: Int {
        reminders.filter(\.isEnabled).count
    }

    private var schedulingNote: String {
        if canScheduleNotifications {
            return "Enabling a reminder asks iOS for notification permission and schedules it from this inquiry's preferred date."
        }
        return "Preferences save now. Notification scheduling starts after this trip has a booked inquiry date."
    }

    var body: some View {
        MarineCard {
            VStack(alignment: .leading, spacing: 16) {
                SectionHeader(
                    title: "Trip reminders",
                    subtitle: "\(enabledCount) of \(reminders.count) local reminders enabled for this trip."
                )

                Text(schedulingNote)
                    .font(.caption.weight(.semibold))
                    .foregroundStyle(Color.highHookDeckText)
                    .padding(12)
                    .frame(maxWidth: .infinity, alignment: .leading)
                    .background(Color.highHookNavy.opacity(0.48), in: RoundedRectangle(cornerRadius: 10, style: .continuous))

                VStack(spacing: 10) {
                    ForEach(reminders) { reminder in
                        HStack(alignment: .center, spacing: 12) {
                            Image(systemName: reminder.kind.symbol)
                                .foregroundStyle(reminder.isEnabled ? Color.highHookOrange : Color.highHookDeckText)
                                .frame(width: 30, height: 30)
                                .background(Color.highHookNavy.opacity(0.72), in: RoundedRectangle(cornerRadius: 8, style: .continuous))

                            VStack(alignment: .leading, spacing: 3) {
                                Text(reminder.kind.rawValue)
                                    .font(.subheadline.weight(.black))
                                    .foregroundStyle(Color.highHookSunwash)
                                Text(reminder.kind.timing)
                                    .font(.caption)
                                    .foregroundStyle(Color.highHookDeckText)
                            }

                            Spacer(minLength: 0)

                            Toggle("", isOn: Binding(
                                get: { reminder.isEnabled },
                                set: { onToggleReminder(reminder.kind, $0) }
                            ))
                            .labelsHidden()
                            .tint(Color.highHookOrange)
                            .accessibilityLabel(reminder.kind.rawValue)
                        }
                        .padding(12)
                        .background(Color.highHookNavy.opacity(0.52), in: RoundedRectangle(cornerRadius: 10, style: .continuous))
                    }
                }

                Text("Local review mode: preferences and pending local notifications stay on this device. Production should schedule APNs reminders from booked-trip and captain-status events.")
                    .font(.caption)
                    .foregroundStyle(Color.highHookDeckText)
            }
        }
    }
}

private struct InquiryStatusCard: View {
    let inquiry: InquiryRecord
    let captainModeUnlocked: Bool
    let onUpdateStatus: (InquiryRecord.Status) -> Void

    var body: some View {
        MarineCard {
            VStack(alignment: .leading, spacing: 16) {
                SectionHeader(
                    title: "Inquiry status",
                    subtitle: "A client-facing receipt for the request that just left the app."
                )

                VStack(spacing: 10) {
                    InquiryStatusRow(symbol: "person", title: "Client", value: "\(inquiry.name) · \(inquiry.email)")
                    InquiryStatusRow(symbol: "calendar", title: "Preferred date", value: Self.dateFormatter.string(from: inquiry.preferredDate))
                    InquiryStatusRow(symbol: "person.3", title: "Party size", value: "\(inquiry.partySize) anglers")
                    InquiryStatusRow(symbol: "clock", title: "Submitted", value: Self.submittedFormatter.string(from: inquiry.submittedAt))
                }

                if captainModeUnlocked {
                    VStack(alignment: .leading, spacing: 10) {
                        Text("Captain status controls")
                            .font(.caption.weight(.black))
                            .foregroundStyle(Color.highHookDeckText)
                        LazyVGrid(columns: [GridItem(.adaptive(minimum: 138), spacing: 8)], spacing: 8) {
                            ForEach(InquiryRecord.Status.allCases, id: \.self) { status in
                                Button {
                                    onUpdateStatus(status)
                                } label: {
                                    Label(status.rawValue, systemImage: status.symbol)
                                        .font(.caption.weight(.bold))
                                        .lineLimit(1)
                                        .minimumScaleFactor(0.78)
                                        .frame(maxWidth: .infinity, alignment: .leading)
                                }
                                .buttonStyle(StatusButtonStyle(isSelected: inquiry.status == status))
                            }
                        }
                        Text("Captain Mode: local review control. Production should require captain sign-in and sync to CRM/Supabase.")
                            .font(.caption2)
                            .foregroundStyle(Color.highHookDeckText)
                    }
                } else {
                    CaptainModeNotice(
                        title: "Captain updates locked",
                        detail: "Clients can see the latest request status here. Status editing stays hidden until Captain Mode is unlocked from Contact."
                    )
                }

                if !inquiry.notes.isEmpty {
                    VStack(alignment: .leading, spacing: 6) {
                        Text("Notes")
                            .font(.caption.weight(.black))
                            .foregroundStyle(Color.highHookDeckText)
                        Text(inquiry.notes)
                            .font(.subheadline.weight(.semibold))
                            .foregroundStyle(Color.highHookSunwash)
                            .fixedSize(horizontal: false, vertical: true)
                    }
                    .frame(maxWidth: .infinity, alignment: .leading)
                    .padding(12)
                    .background(Color.highHookNavy.opacity(0.58), in: RoundedRectangle(cornerRadius: 10, style: .continuous))
                }

                Text("Production next step: sync this record to CRM/Supabase, add payment/deposit state, and let the captain update status from an admin queue.")
                    .font(.caption)
                    .foregroundStyle(Color.highHookDeckText)
            }
        }
    }

    private static let dateFormatter: DateFormatter = {
        let formatter = DateFormatter()
        formatter.dateStyle = .long
        formatter.timeStyle = .none
        return formatter
    }()

    private static let submittedFormatter: DateFormatter = {
        let formatter = DateFormatter()
        formatter.dateStyle = .medium
        formatter.timeStyle = .short
        return formatter
    }()
}

private struct InquiryHistoryCard: View {
    let inquiries: [InquiryRecord]

    var body: some View {
        MarineCard {
            VStack(alignment: .leading, spacing: 14) {
                SectionHeader(
                    title: "Local inquiry queue",
                    subtitle: "\(inquiries.count) saved requests for this trip on this device."
                )

                ForEach(inquiries.prefix(4)) { inquiry in
                    HStack(alignment: .top, spacing: 12) {
                        Image(systemName: inquiry.status.symbol)
                            .foregroundStyle(Color.highHookOrange)
                            .frame(width: 28, height: 28)
                            .background(Color.highHookNavy.opacity(0.72), in: RoundedRectangle(cornerRadius: 8, style: .continuous))
                        VStack(alignment: .leading, spacing: 4) {
                            Text(inquiry.name)
                                .font(.subheadline.weight(.black))
                                .foregroundStyle(Color.highHookSunwash)
                            Text("\(inquiry.status.rawValue) · \(Self.dateFormatter.string(from: inquiry.preferredDate)) · \(inquiry.partySize) anglers")
                                .font(.caption)
                                .foregroundStyle(Color.highHookDeckText)
                                .fixedSize(horizontal: false, vertical: true)
                        }
                    }
                    .padding(10)
                    .background(Color.highHookNavy.opacity(0.46), in: RoundedRectangle(cornerRadius: 10, style: .continuous))
                }
            }
        }
    }

    private static let dateFormatter: DateFormatter = {
        let formatter = DateFormatter()
        formatter.dateStyle = .medium
        formatter.timeStyle = .none
        return formatter
    }()
}

private struct StatusButtonStyle: ButtonStyle {
    let isSelected: Bool

    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .foregroundStyle(isSelected ? Color.highHookSunwash : Color.highHookDeckText)
            .padding(.vertical, 9)
            .padding(.horizontal, 10)
            .background(
                (isSelected ? Color.highHookHarbor : Color.highHookNavy.opacity(0.7))
                    .opacity(configuration.isPressed ? 0.72 : 1),
                in: RoundedRectangle(cornerRadius: 9, style: .continuous)
            )
            .overlay {
                RoundedRectangle(cornerRadius: 9, style: .continuous)
                    .stroke((isSelected ? Color.highHookOrange : Color.highHookLine).opacity(isSelected ? 0.78 : 0.28), lineWidth: 1)
            }
    }
}

private struct InquiryStatusRow: View {
    let symbol: String
    let title: String
    let value: String

    var body: some View {
        HStack(alignment: .top, spacing: 12) {
            Image(systemName: symbol)
                .foregroundStyle(Color.highHookOrange)
                .frame(width: 28, height: 28)
                .background(Color.highHookNavy.opacity(0.72), in: RoundedRectangle(cornerRadius: 8, style: .continuous))
            VStack(alignment: .leading, spacing: 3) {
                Text(title.uppercased())
                    .font(.caption2.weight(.black))
                    .foregroundStyle(Color.highHookDeckText)
                Text(value)
                    .font(.subheadline.weight(.semibold))
                    .foregroundStyle(Color.highHookSunwash)
                    .fixedSize(horizontal: false, vertical: true)
            }
            Spacer(minLength: 0)
        }
        .padding(10)
        .background(Color.highHookNavy.opacity(0.46), in: RoundedRectangle(cornerRadius: 10, style: .continuous))
    }
}

private enum HubTone {
    case ready
    case watch
}

private struct HubStatusTile: View {
    let symbol: String
    let title: String
    let value: String
    let tone: HubTone

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Image(systemName: symbol)
                .foregroundStyle(tone == .ready ? Color.highHookOrange : Color.highHookDeckText)
            Text(title.uppercased())
                .font(.caption2.weight(.black))
                .foregroundStyle(Color.highHookDeckText)
            Text(value)
                .font(.headline.weight(.black))
                .foregroundStyle(Color.highHookSunwash)
                .lineLimit(2)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .padding(12)
        .background(Color.highHookNavy.opacity(0.72), in: RoundedRectangle(cornerRadius: 12, style: .continuous))
        .overlay {
            RoundedRectangle(cornerRadius: 12, style: .continuous)
                .stroke(Color.highHookLine.opacity(0.28), lineWidth: 1)
        }
    }
}

private struct ArrivalRow: View {
    let symbol: String
    let title: String
    let detail: String

    var body: some View {
        HStack(alignment: .top, spacing: 12) {
            Image(systemName: symbol)
                .foregroundStyle(Color.highHookOrange)
                .frame(width: 28, height: 28)
                .background(Color.highHookNavy.opacity(0.72), in: RoundedRectangle(cornerRadius: 8, style: .continuous))
            VStack(alignment: .leading, spacing: 4) {
                Text(title)
                    .font(.headline)
                    .foregroundStyle(Color.highHookSunwash)
                Text(detail)
                    .font(.subheadline)
                    .foregroundStyle(Color.highHookDeckText)
            }
        }
    }
}
