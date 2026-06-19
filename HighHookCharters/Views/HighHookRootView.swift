import SwiftUI

enum AppTab: String, CaseIterable, Identifiable {
    case trips = "Trips"
    case weather = "Weather"
    case prep = "Prep"
    case reports = "Reports"
    case contact = "Contact"

    var id: String { rawValue }

    var symbol: String {
        switch self {
        case .trips: "fish"
        case .weather: "cloud.sun"
        case .prep: "checklist"
        case .reports: "photo.on.rectangle.angled"
        case .contact: "phone"
        }
    }
}

struct HighHookRootView: View {
    @AppStorage("highHook.inquiryRecords") private var inquiryRecordsJSON = "[]"
    @AppStorage("highHook.captainWeatherUpdate") private var captainWeatherUpdateJSON = ""
    @AppStorage("highHook.fishingReports") private var fishingReportsJSON = ""
    @AppStorage("highHook.tripReminders") private var tripRemindersJSON = "[]"
    @AppStorage("highHook.prepChecklistProgress") private var prepChecklistProgressJSON = "{}"
    @AppStorage("highHook.captainModeUnlocked") private var captainModeUnlocked = false
    @State private var selectedTab = AppTab.trips
    @State private var selectedTrip = CharterData.trips[0]
    @State private var presentedTrip: CharterTrip?
    @State private var showingBooking = false
    @State private var inquiries: [InquiryRecord] = []
    @State private var captainWeatherUpdate = CaptainWeatherUpdate.sample
    @State private var fishingReports = CharterData.reports
    @State private var tripReminders: [TripReminderPreference] = []

    var body: some View {
        ZStack {
            ChartPaperBackground()
                .ignoresSafeArea()

            NavigationStack {
                selectedContent
            }
        }
        .safeAreaInset(edge: .bottom) {
            HighHookTabDock(selectedTab: $selectedTab)
        }
        .preferredColorScheme(.dark)
        .tint(Color.highHookOrange)
        .sheet(isPresented: $showingBooking) {
            BookingInquiryView(
                trip: selectedTrip,
                onInquirySubmitted: { inquiry in
                    saveInquiry(inquiry)
                },
                onOpenTripHub: { selectedTab = .prep }
            )
        }
        .sheet(item: $presentedTrip) { trip in
            NavigationStack {
                TripDetailView(trip: trip, onBook: {
                    selectedTrip = trip
                    presentedTrip = nil
                    showingBooking = true
                })
            }
        }
        .onAppear(perform: loadInquiries)
        .onAppear(perform: loadCaptainWeatherUpdate)
        .onAppear(perform: loadFishingReports)
        .onAppear(perform: loadTripReminders)
    }

    @ViewBuilder
    private var selectedContent: some View {
        switch selectedTab {
        case .trips:
            TripsHomeView(
                selectedTrip: $selectedTrip,
                onOpenTrip: { presentedTrip = $0 },
                onBook: { showingBooking = true }
            )
        case .weather:
            WeatherView(
                update: captainWeatherUpdate,
                captainModeUnlocked: captainModeUnlocked,
                onSaveUpdate: saveCaptainWeatherUpdate
            )
        case .prep:
            PrepView(
                trip: selectedTrip,
                inquiry: matchingInquiry,
                inquiryHistory: matchingInquiryHistory,
                reminders: matchingTripReminders,
                remindersCanSchedule: matchingInquiry != nil,
                captainModeUnlocked: captainModeUnlocked,
                onUpdateInquiryStatus: updateInquiryStatus,
                onToggleReminder: updateTripReminder,
                onBook: { showingBooking = true }
            )
        case .reports:
            ReportsView(
                reports: fishingReports,
                captainModeUnlocked: captainModeUnlocked,
                onPublishReport: publishFishingReport
            )
        case .contact:
            ContactView(
                localClientDataSummary: localClientDataSummary,
                localClientDataExport: localClientDataExport,
                captainModeUnlocked: captainModeUnlocked,
                onUnlockCaptainMode: { captainModeUnlocked = true },
                onLockCaptainMode: { captainModeUnlocked = false },
                onClearLocalBookingData: clearLocalBookingData
            )
        }
    }

    private var matchingInquiry: InquiryRecord? {
        matchingInquiryHistory.first
    }

    private var matchingInquiryHistory: [InquiryRecord] {
        inquiries
            .filter { $0.tripId == selectedTrip.id }
            .sorted { $0.submittedAt > $1.submittedAt }
    }

    private var matchingTripReminders: [TripReminderPreference] {
        TripReminderPreference.Kind.allCases.map { kind in
            tripReminders.first {
                $0.tripId == selectedTrip.id && $0.kind == kind
            } ?? TripReminderPreference(tripId: selectedTrip.id, kind: kind, isEnabled: false)
        }
    }

    private var localClientDataSummary: String {
        let activeReminderCount = tripReminders.filter(\.isEnabled).count
        let checklistTripCount = decodedPrepChecklistProgress().filter { !$0.value.isEmpty }.count
        if inquiries.isEmpty && activeReminderCount == 0 && checklistTripCount == 0 {
            return "No local booking inquiries, active trip reminders or prep checklist progress are saved on this device."
        }

        let inquiryLabel = inquiries.count == 1 ? "1 saved inquiry" : "\(inquiries.count) saved inquiries"
        let reminderLabel = activeReminderCount == 1 ? "1 active reminder" : "\(activeReminderCount) active reminders"
        let checklistLabel = checklistTripCount == 1 ? "1 trip checklist" : "\(checklistTripCount) trip checklists"
        return "\(inquiryLabel), \(reminderLabel) and \(checklistLabel) on this device."
    }

    private var localClientDataExport: String {
        var lines: [String] = [
            "High Hook local client data export",
            "Generated: \(Self.exportDateFormatter.string(from: Date()))",
            "",
            "This export contains prototype data saved locally on this device. Emails already sent through Mail are not changed by clearing app data.",
            "",
            "Saved inquiries (\(inquiries.count))"
        ]

        if inquiries.isEmpty {
            lines.append("- None")
        } else {
            for inquiry in inquiries.sorted(by: { $0.submittedAt > $1.submittedAt }) {
                lines.append("- \(inquiry.name) <\(inquiry.email)>")
                lines.append("  Trip: \(inquiry.tripName)")
                lines.append("  Preferred date: \(Self.clientDateFormatter.string(from: inquiry.preferredDate))")
                lines.append("  Party size: \(inquiry.partySize)")
                lines.append("  Status: \(inquiry.status.rawValue)")
                lines.append("  Submitted: \(Self.exportDateFormatter.string(from: inquiry.submittedAt))")
                if !inquiry.notes.isEmpty {
                    lines.append("  Notes: \(inquiry.notes.replacingOccurrences(of: "\n", with: " / "))")
                }
            }
        }

        let enabledReminders = tripReminders.filter(\.isEnabled)
        lines.append("")
        lines.append("Active trip reminders (\(enabledReminders.count))")
        if enabledReminders.isEmpty {
            lines.append("- None")
        } else {
            for reminder in enabledReminders.sorted(by: { $0.updatedAt > $1.updatedAt }) {
                lines.append("- \(reminder.kind.rawValue) for \(tripName(for: reminder.tripId))")
                lines.append("  Updated: \(Self.exportDateFormatter.string(from: reminder.updatedAt))")
            }
        }

        let checklistProgress = decodedPrepChecklistProgress()
            .filter { !$0.value.isEmpty }
            .sorted { tripName(for: $0.key) < tripName(for: $1.key) }
        lines.append("")
        lines.append("Prep checklist progress (\(checklistProgress.count))")
        if checklistProgress.isEmpty {
            lines.append("- None")
        } else {
            for (tripId, items) in checklistProgress {
                lines.append("- \(tripName(for: tripId)): \(items.count) items ready")
                for item in items.sorted() {
                    lines.append("  - \(item)")
                }
            }
        }

        return lines.joined(separator: "\n")
    }

    private func saveInquiry(_ inquiry: InquiryRecord) {
        var updated = inquiries
        updated.removeAll { $0.id == inquiry.id }
        updated.insert(inquiry, at: 0)
        inquiries = updated
        persistInquiries(updated)
        scheduleEnabledReminders(for: inquiry)
    }

    private func updateInquiryStatus(_ inquiry: InquiryRecord, _ status: InquiryRecord.Status) {
        var updated = inquiries
        guard let index = updated.firstIndex(where: { $0.id == inquiry.id }) else { return }
        updated[index].status = status
        inquiries = updated
        persistInquiries(updated)
    }

    private func loadInquiries() {
        guard let data = inquiryRecordsJSON.data(using: .utf8) else { return }
        inquiries = (try? JSONDecoder().decode([InquiryRecord].self, from: data)) ?? []
    }

    private func persistInquiries(_ updated: [InquiryRecord]) {
        guard let data = try? JSONEncoder().encode(updated),
              let json = String(data: data, encoding: .utf8)
        else { return }
        inquiryRecordsJSON = json
    }

    private func saveCaptainWeatherUpdate(_ update: CaptainWeatherUpdate) {
        captainWeatherUpdate = update
        persistCaptainWeatherUpdate(update)
    }

    private func loadCaptainWeatherUpdate() {
        guard let data = captainWeatherUpdateJSON.data(using: .utf8),
              !data.isEmpty,
              let update = try? JSONDecoder().decode(CaptainWeatherUpdate.self, from: data)
        else { return }
        captainWeatherUpdate = update
    }

    private func persistCaptainWeatherUpdate(_ update: CaptainWeatherUpdate) {
        guard let data = try? JSONEncoder().encode(update),
              let json = String(data: data, encoding: .utf8)
        else { return }
        captainWeatherUpdateJSON = json
    }

    private func publishFishingReport(_ report: FishingReport) {
        var updated = fishingReports
        updated.removeAll { $0.id == report.id }
        updated.insert(report, at: 0)
        fishingReports = updated
        persistFishingReports(updated)
    }

    private func loadFishingReports() {
        guard let data = fishingReportsJSON.data(using: .utf8),
              !data.isEmpty,
              let reports = try? JSONDecoder().decode([FishingReport].self, from: data)
        else { return }
        fishingReports = reports
    }

    private func persistFishingReports(_ updated: [FishingReport]) {
        guard let data = try? JSONEncoder().encode(updated),
              let json = String(data: data, encoding: .utf8)
        else { return }
        fishingReportsJSON = json
    }

    private func updateTripReminder(_ kind: TripReminderPreference.Kind, _ isEnabled: Bool) {
        let id = TripReminderPreference.makeId(tripId: selectedTrip.id, kind: kind)
        var updated = tripReminders

        if let index = updated.firstIndex(where: { $0.id == id }) {
            updated[index].isEnabled = isEnabled
            updated[index].updatedAt = Date()
        } else {
            updated.append(TripReminderPreference(
                tripId: selectedTrip.id,
                kind: kind,
                isEnabled: isEnabled
            ))
        }

        tripReminders = updated
        persistTripReminders(updated)

        let trip = selectedTrip
        let inquiry = matchingInquiry
        Task {
            await TripReminderScheduler.sync(
                kind: kind,
                isEnabled: isEnabled,
                trip: trip,
                inquiry: inquiry
            )
        }
    }

    private func loadTripReminders() {
        guard let data = tripRemindersJSON.data(using: .utf8) else { return }
        tripReminders = (try? JSONDecoder().decode([TripReminderPreference].self, from: data)) ?? []
    }

    private func persistTripReminders(_ updated: [TripReminderPreference]) {
        guard let data = try? JSONEncoder().encode(updated),
              let json = String(data: data, encoding: .utf8)
        else { return }
        tripRemindersJSON = json
    }

    private func scheduleEnabledReminders(for inquiry: InquiryRecord) {
        guard let trip = CharterData.trips.first(where: { $0.id == inquiry.tripId }) else { return }
        let enabledReminders = tripReminders.filter {
            $0.tripId == inquiry.tripId && $0.isEnabled
        }

        for reminder in enabledReminders {
            Task {
                await TripReminderScheduler.sync(
                    kind: reminder.kind,
                    isEnabled: true,
                    trip: trip,
                    inquiry: inquiry
                )
            }
        }
    }

    private func clearLocalBookingData() {
        TripReminderScheduler.cancel(reminders: tripReminders)
        inquiries = []
        tripReminders = []
        persistInquiries([])
        persistTripReminders([])
        prepChecklistProgressJSON = "{}"
    }

    private func decodedPrepChecklistProgress() -> [String: [String]] {
        guard let data = prepChecklistProgressJSON.data(using: .utf8),
              let progress = try? JSONDecoder().decode([String: [String]].self, from: data)
        else { return [:] }
        return progress
    }

    private func tripName(for tripId: String) -> String {
        CharterData.trips.first { $0.id == tripId }?.name ?? tripId
    }

    private static let clientDateFormatter: DateFormatter = {
        let formatter = DateFormatter()
        formatter.dateStyle = .long
        formatter.timeStyle = .none
        return formatter
    }()

    private static let exportDateFormatter: DateFormatter = {
        let formatter = DateFormatter()
        formatter.dateStyle = .medium
        formatter.timeStyle = .short
        return formatter
    }()
}

private struct HighHookTabDock: View {
    @Binding var selectedTab: AppTab

    var body: some View {
        HStack(spacing: 6) {
            ForEach(AppTab.allCases) { tab in
                Button {
                    selectedTab = tab
                } label: {
                    VStack(spacing: 4) {
                        Image(systemName: tab.symbol)
                            .font(.system(size: 18, weight: .semibold))
                            .frame(height: 20)
                        Text(tab.rawValue)
                            .font(.caption2.weight(.bold))
                            .lineLimit(1)
                    }
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 10)
                    .foregroundStyle(selectedTab == tab ? Color.highHookSunwash : Color.highHookDeckText)
                    .background {
                        if selectedTab == tab {
                            RoundedRectangle(cornerRadius: 12, style: .continuous)
                                .fill(Color.highHookHarbor.opacity(0.96))
                                .overlay(alignment: .top) {
                                    Capsule()
                                        .fill(Color.highHookOrange)
                                        .frame(width: 28, height: 3)
                                        .offset(y: 4)
                                }
                                .overlay {
                                    RoundedRectangle(cornerRadius: 12, style: .continuous)
                                        .stroke(Color.highHookOrange.opacity(0.62), lineWidth: 1)
                                }
                        }
                    }
                }
                .buttonStyle(.plain)
                .accessibilityLabel(tab.rawValue)
            }
        }
        .padding(8)
        .frame(maxWidth: 620)
        .background(
            LinearGradient(
                colors: [Color.highHookMidnight.opacity(0.98), Color.highHookBlue.opacity(0.94)],
                startPoint: .topLeading,
                endPoint: .bottomTrailing
            ),
            in: RoundedRectangle(cornerRadius: 22, style: .continuous)
        )
        .overlay {
            RoundedRectangle(cornerRadius: 22, style: .continuous)
                .stroke(Color.highHookLine.opacity(0.44), lineWidth: 1)
        }
        .shadow(color: Color.highHookNavy.opacity(0.45), radius: 18, x: 0, y: 8)
        .padding(.horizontal, 16)
        .padding(.bottom, 8)
    }
}
