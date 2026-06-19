import SwiftUI

struct BookingInquiryView: View {
    let trip: CharterTrip
    let onInquirySubmitted: (InquiryRecord) -> Void
    let onOpenTripHub: () -> Void
    @Environment(\.dismiss) private var dismiss
    @Environment(\.openURL) private var openURL
    @State private var name = ""
    @State private var email = ""
    @State private var partySize = 4
    @State private var preferredDate = Date()
    @State private var backupDate = Calendar.current.date(byAdding: .day, value: 1, to: Date()) ?? Date()
    @State private var dateFlexibility = DateFlexibility.flexible
    @State private var notes = ""
    @State private var submitted = false

    private var canSubmit: Bool {
        !name.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty &&
        !email.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty
    }

    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(alignment: .leading, spacing: 16) {
                    if submitted {
                        SuccessPanel(emailURL: inquiryEmailURL, onOpenTripHub: openTripHub)
                    } else {
                        SelectedTripPanel(trip: trip)

                        MarineCard {
                            VStack(alignment: .leading, spacing: 14) {
                                SectionHeader(
                                    title: "Your crew",
                                    subtitle: "Give the captain enough context to confirm the right date and plan."
                                )
                                BrandedTextField(title: "Name", text: $name, systemImage: "person")
                                    .textContentType(.name)
                                BrandedTextField(title: "Email", text: $email, systemImage: "envelope")
                                    .keyboardType(.emailAddress)
                                    .textContentType(.emailAddress)
                                    .textInputAutocapitalization(.never)

                                HStack(spacing: 12) {
                                    Label("Party size", systemImage: "person.3")
                                        .font(.headline)
                                        .foregroundStyle(Color.highHookSunwash)
                                    Spacer()
                                    Stepper("\(partySize)", value: $partySize, in: 1...6)
                                        .labelsHidden()
                                    Text("\(partySize)")
                                        .font(.title3.weight(.black))
                                        .foregroundStyle(Color.highHookOrange)
                                        .frame(width: 34)
                                }
                                .padding(12)
                                .background(Color.highHookNavy.opacity(0.72), in: RoundedRectangle(cornerRadius: 12, style: .continuous))

                                DatePicker("Preferred date", selection: $preferredDate, displayedComponents: .date)
                                    .font(.headline)
                                    .foregroundStyle(Color.highHookSunwash)
                                    .tint(Color.highHookOrange)
                                    .padding(12)
                                    .background(Color.highHookNavy.opacity(0.72), in: RoundedRectangle(cornerRadius: 12, style: .continuous))

                                AvailabilityPanel(
                                    preferredDate: preferredDate,
                                    backupDate: $backupDate,
                                    dateFlexibility: $dateFlexibility
                                )

                                VStack(alignment: .leading, spacing: 8) {
                                    Label("Notes for the captain", systemImage: "text.bubble")
                                        .font(.headline)
                                        .foregroundStyle(Color.highHookSunwash)
                                    TextEditor(text: $notes)
                                        .frame(minHeight: 118)
                                        .scrollContentBackground(.hidden)
                                        .foregroundStyle(Color.highHookSunwash)
                                        .padding(8)
                                        .background(Color.highHookMidnight.opacity(0.78), in: RoundedRectangle(cornerRadius: 10, style: .continuous))
                                        .overlay {
                                            RoundedRectangle(cornerRadius: 10, style: .continuous)
                                                .stroke(Color.highHookLine.opacity(0.28), lineWidth: 1)
                                        }
                                    Text("Target species, kids, experience level, date flexibility or special considerations.")
                                        .font(.caption)
                                        .foregroundStyle(Color.highHookDeckText)
                                }
                            }
                        }

                        MarineCard {
                            VStack(alignment: .leading, spacing: 14) {
                                SectionHeader(
                                    title: "Deposit & hold",
                                    subtitle: "No card is charged in the app."
                                )
                                DepositRow(symbol: "creditcard", title: "Deposit", detail: "\(trip.deposit) is handled after the captain confirms the date.")
                                DepositRow(symbol: "calendar.badge.clock", title: "Hold status", detail: "This inquiry does not reserve the boat until High Hook replies and the deposit is settled.")
                                DepositRow(symbol: "text.bubble", title: "Best response", detail: "Flexible dates and backup windows help the captain match weather, tide and availability.")
                            }
                        }

                        MarineCard {
                            VStack(alignment: .leading, spacing: 14) {
                                SectionHeader(
                                    title: "What happens next",
                                    subtitle: "A clear handoff before the user commits."
                                )
                                BookingStep(symbol: "envelope", title: "Email draft opens", detail: "The app prepares a clean message to Charters@FishHighHook.com.")
                                BookingStep(symbol: "cloud.sun", title: "Captain confirms window", detail: "Weather, tide and fish reports shape the final plan.")
                                BookingStep(symbol: "creditcard", title: "Deposit holds the date", detail: "No date is held until the captain confirms and payment is handled.")
                                BookingStep(symbol: "checklist", title: "Trip Hub unlocks", detail: "Booked clients get arrival details, captain notes, weather status and a prep checklist in one place.")
                            }
                        }

                        InquiryPreviewPanel(
                            trip: trip,
                            name: name,
                            email: email,
                            partySize: partySize,
                            preferredDate: preferredDate,
                            backupDate: backupDate,
                            dateFlexibility: dateFlexibility,
                            notes: notes
                        )
                    }
                }
                .padding()
                .padding(.bottom, 32)
            }
            .scrollContentBackground(.hidden)
            .background(ChartPaperBackground().ignoresSafeArea())
            .navigationTitle("Book a charter")
            .toolbarBackground(Color.highHookNavy, for: .navigationBar)
            .toolbarColorScheme(.dark, for: .navigationBar)
            .toolbar {
                ToolbarItem(placement: .cancellationAction) {
                    Button(submitted ? "Done" : "Cancel") { dismiss() }
                }
                if !submitted {
                    ToolbarItem(placement: .confirmationAction) {
                        Button("Email") { sendInquiry() }
                            .disabled(!canSubmit)
                    }
                }
            }
            .onChange(of: preferredDate) {
                if backupDate < preferredDate {
                    backupDate = preferredDate
                }
            }
        }
    }

    private var inquiryEmailURL: URL {
        var components = URLComponents()
        components.scheme = "mailto"
        components.path = "Charters@FishHighHook.com"
        components.queryItems = [
            URLQueryItem(name: "subject", value: "High Hook charter request - \(trip.name)"),
            URLQueryItem(name: "body", value: inquiryEmailBody)
        ]
        return components.url ?? URL(string: "mailto:Charters@FishHighHook.com")!
    }

    private var inquiryEmailBody: String {
        """
        High Hook charter request

        Trip: \(trip.name)
        Target: \(trip.target)
        Rate: \(trip.price)
        Deposit: \(trip.deposit)

        Name: \(name.trimmingCharacters(in: .whitespacesAndNewlines))
        Email: \(email.trimmingCharacters(in: .whitespacesAndNewlines))
        Party size: \(partySize)
        Preferred date: \(Self.dateFormatter.string(from: preferredDate))
        Date flexibility: \(dateFlexibility.rawValue)
        Backup date/window: \(Self.dateFormatter.string(from: backupDate))

        Notes:
        \(notes.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty ? "None provided yet." : notes.trimmingCharacters(in: .whitespacesAndNewlines))

        Sent from the High Hook Charters app.
        """
    }

    private func sendInquiry() {
        guard canSubmit else { return }
        onInquirySubmitted(inquiryRecord(status: .draftReady))
        openURL(inquiryEmailURL)
        submitted = true
    }

    private func openTripHub() {
        dismiss()
        onOpenTripHub()
    }

    private func inquiryRecord(status: InquiryRecord.Status) -> InquiryRecord {
        InquiryRecord(
            tripId: trip.id,
            tripName: trip.name,
            name: name.trimmingCharacters(in: .whitespacesAndNewlines),
            email: email.trimmingCharacters(in: .whitespacesAndNewlines),
            partySize: partySize,
            preferredDate: preferredDate,
            notes: localInquiryNotes,
            submittedAt: Date(),
            status: status
        )
    }

    private var localInquiryNotes: String {
        let cleanNotes = notes.trimmingCharacters(in: .whitespacesAndNewlines)
        let availability = "Availability: \(dateFlexibility.rawValue); backup \(Self.dateFormatter.string(from: backupDate))."
        guard !cleanNotes.isEmpty else { return availability }
        return "\(availability)\n\n\(cleanNotes)"
    }

    private static let dateFormatter: DateFormatter = {
        let formatter = DateFormatter()
        formatter.dateStyle = .long
        formatter.timeStyle = .none
        return formatter
    }()
}

private enum DateFlexibility: String, CaseIterable {
    case exact = "Exact date"
    case flexible = "Flexible by a few days"
    case captainChoice = "Captain can pick best window"

    var detail: String {
        switch self {
        case .exact: "Best when travel plans are locked."
        case .flexible: "Best for matching tide and weather."
        case .captainChoice: "Best for serious fishing windows."
        }
    }
}

private struct SelectedTripPanel: View {
    let trip: CharterTrip

    var body: some View {
        MarineCard {
            VStack(alignment: .leading, spacing: 12) {
                SectionHeader(title: "Selected trip", subtitle: "The inquiry will be tied to this option.")
                Label(trip.name, systemImage: trip.symbol)
                    .font(.title3.weight(.black))
                    .foregroundStyle(Color.highHookSunwash)
                Text(trip.details)
                    .font(.subheadline)
                    .foregroundStyle(Color.highHookDeckText)
                LabeledContent("Rate", value: trip.price)
                LabeledContent("Deposit", value: trip.deposit)
                LabeledContent("Best for", value: trip.bestFor)
            }
            .foregroundStyle(Color.highHookSunwash)
        }
    }
}

private struct BrandedTextField: View {
    let title: String
    @Binding var text: String
    let systemImage: String

    var body: some View {
        HStack(spacing: 10) {
            Image(systemName: systemImage)
                .foregroundStyle(Color.highHookOrange)
                .frame(width: 22)
            TextField(title, text: $text)
                .textFieldStyle(.plain)
                .foregroundStyle(Color.highHookSunwash)
                .tint(Color.highHookOrange)
        }
        .padding(12)
        .background(Color.highHookNavy.opacity(0.72), in: RoundedRectangle(cornerRadius: 12, style: .continuous))
        .overlay {
            RoundedRectangle(cornerRadius: 12, style: .continuous)
                .stroke(Color.highHookLine.opacity(0.28), lineWidth: 1)
        }
    }
}

private struct AvailabilityPanel: View {
    let preferredDate: Date
    @Binding var backupDate: Date
    @Binding var dateFlexibility: DateFlexibility

    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            Label("Availability", systemImage: "calendar.badge.clock")
                .font(.headline)
                .foregroundStyle(Color.highHookSunwash)

            LazyVGrid(columns: [GridItem(.adaptive(minimum: 150), spacing: 8)], spacing: 8) {
                ForEach(DateFlexibility.allCases, id: \.self) { option in
                    Button {
                        dateFlexibility = option
                    } label: {
                        VStack(alignment: .leading, spacing: 5) {
                            Text(option.rawValue)
                                .font(.caption.weight(.black))
                                .foregroundStyle(dateFlexibility == option ? Color.highHookSunwash : Color.highHookDeckText)
                            Text(option.detail)
                                .font(.caption2.weight(.semibold))
                                .foregroundStyle(Color.highHookDeckText)
                                .fixedSize(horizontal: false, vertical: true)
                        }
                        .frame(maxWidth: .infinity, alignment: .leading)
                    }
                    .buttonStyle(AvailabilityChipStyle(isSelected: dateFlexibility == option))
                }
            }

            DatePicker("Backup date/window", selection: $backupDate, in: preferredDate..., displayedComponents: .date)
                .font(.headline)
                .foregroundStyle(Color.highHookSunwash)
                .tint(Color.highHookOrange)
                .padding(12)
                .background(Color.highHookMidnight.opacity(0.68), in: RoundedRectangle(cornerRadius: 10, style: .continuous))

            Text("The captain can use this backup window if weather, tide or availability makes the first date a poor fit.")
                .font(.caption)
                .foregroundStyle(Color.highHookDeckText)
        }
        .padding(12)
        .background(Color.highHookNavy.opacity(0.72), in: RoundedRectangle(cornerRadius: 12, style: .continuous))
        .overlay {
            RoundedRectangle(cornerRadius: 12, style: .continuous)
                .stroke(Color.highHookLine.opacity(0.28), lineWidth: 1)
        }
    }
}

private struct AvailabilityChipStyle: ButtonStyle {
    let isSelected: Bool

    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .padding(10)
            .background(
                (isSelected ? Color.highHookHarbor : Color.highHookMidnight.opacity(0.72))
                    .opacity(configuration.isPressed ? 0.7 : 1),
                in: RoundedRectangle(cornerRadius: 10, style: .continuous)
            )
            .overlay {
                RoundedRectangle(cornerRadius: 10, style: .continuous)
                    .stroke((isSelected ? Color.highHookOrange : Color.highHookLine).opacity(isSelected ? 0.76 : 0.28), lineWidth: 1)
            }
    }
}

private struct DepositRow: View {
    let symbol: String
    let title: String
    let detail: String

    var body: some View {
        HStack(alignment: .top, spacing: 10) {
            Image(systemName: symbol)
                .foregroundStyle(Color.highHookOrange)
                .frame(width: 24)
            VStack(alignment: .leading, spacing: 3) {
                Text(title)
                    .font(.subheadline.weight(.bold))
                    .foregroundStyle(Color.highHookSunwash)
                Text(detail)
                    .font(.caption)
                    .foregroundStyle(Color.highHookDeckText)
                    .fixedSize(horizontal: false, vertical: true)
            }
        }
        .padding(10)
        .background(Color.highHookNavy.opacity(0.52), in: RoundedRectangle(cornerRadius: 10, style: .continuous))
    }
}

private struct SuccessPanel: View {
    let emailURL: URL
    let onOpenTripHub: () -> Void

    var body: some View {
        MarineCard {
            VStack(alignment: .leading, spacing: 12) {
                Image(systemName: "checkmark.seal.fill")
                    .font(.largeTitle)
                    .foregroundStyle(Color.highHookOrange)
                Text("Email draft ready")
                    .font(.title2.bold())
                    .foregroundStyle(Color.highHookSunwash)
                Text("Review the prepared message in Mail and send it to High Hook. A later production backend can also mirror these requests into a CRM or booking queue.")
                    .foregroundStyle(Color.highHookDeckText)
                Link(destination: emailURL) {
                    Label("Reopen email draft", systemImage: "envelope")
                }
                .buttonStyle(BrandActionButtonStyle(tone: .primary))

                Button {
                    onOpenTripHub()
                } label: {
                    Label("Preview Trip Hub", systemImage: "checklist")
                }
                .buttonStyle(BrandActionButtonStyle(tone: .secondary))
            }
        }
    }
}

private struct InquiryPreviewPanel: View {
    let trip: CharterTrip
    let name: String
    let email: String
    let partySize: Int
    let preferredDate: Date
    let backupDate: Date
    let dateFlexibility: DateFlexibility
    let notes: String

    var body: some View {
        MarineCard {
            VStack(alignment: .leading, spacing: 14) {
                SectionHeader(
                    title: "Email preview",
                    subtitle: "This is the information the captain will receive."
                )
                PreviewRow(title: "Trip", value: trip.name)
                PreviewRow(title: "Crew", value: crewSummary)
                PreviewRow(title: "Date", value: Self.dateFormatter.string(from: preferredDate))
                PreviewRow(title: "Flexibility", value: "\(dateFlexibility.rawValue) · backup \(Self.dateFormatter.string(from: backupDate))")
                PreviewRow(title: "Notes", value: notes.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty ? "None yet" : notes)
            }
        }
    }

    private var crewSummary: String {
        let cleanName = name.trimmingCharacters(in: .whitespacesAndNewlines)
        let cleanEmail = email.trimmingCharacters(in: .whitespacesAndNewlines)
        let contact = [cleanName, cleanEmail].filter { !$0.isEmpty }.joined(separator: " · ")
        return contact.isEmpty ? "\(partySize) anglers" : "\(contact) · \(partySize) anglers"
    }

    private static let dateFormatter: DateFormatter = {
        let formatter = DateFormatter()
        formatter.dateStyle = .medium
        formatter.timeStyle = .none
        return formatter
    }()
}

private struct PreviewRow: View {
    let title: String
    let value: String

    var body: some View {
        VStack(alignment: .leading, spacing: 3) {
            Text(title.uppercased())
                .font(.caption2.weight(.black))
                .foregroundStyle(Color.highHookDeckText)
            Text(value)
                .font(.subheadline.weight(.semibold))
                .foregroundStyle(Color.highHookSunwash)
                .fixedSize(horizontal: false, vertical: true)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .padding(10)
        .background(Color.highHookNavy.opacity(0.58), in: RoundedRectangle(cornerRadius: 10, style: .continuous))
    }
}

private struct BookingStep: View {
    let symbol: String
    let title: String
    let detail: String

    var body: some View {
        HStack(alignment: .top, spacing: 10) {
            Image(systemName: symbol)
                .foregroundStyle(Color.highHookOrange)
                .frame(width: 24)
            VStack(alignment: .leading, spacing: 3) {
                Text(title)
                    .font(.subheadline.weight(.bold))
                    .foregroundStyle(Color.highHookSunwash)
                Text(detail)
                    .font(.caption)
                    .foregroundStyle(Color.highHookDeckText)
            }
        }
        .padding(.vertical, 3)
    }
}
