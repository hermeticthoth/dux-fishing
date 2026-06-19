import SwiftUI

struct WeatherView: View {
    let update: CaptainWeatherUpdate
    let captainModeUnlocked: Bool
    let onSaveUpdate: (CaptainWeatherUpdate) -> Void
    @State private var draft: CaptainWeatherUpdate

    init(update: CaptainWeatherUpdate, captainModeUnlocked: Bool, onSaveUpdate: @escaping (CaptainWeatherUpdate) -> Void) {
        self.update = update
        self.captainModeUnlocked = captainModeUnlocked
        self.onSaveUpdate = onSaveUpdate
        _draft = State(initialValue: update)
    }

    var body: some View {
        ScrollView {
            LazyVStack(spacing: 18) {
                BrandScreenTitle(title: "Weather")

                MarineCard {
                    CaptainCallPanel(update: update)
                }

                if captainModeUnlocked {
                    MarineCard {
                        CaptainWeatherEditor(
                            draft: $draft,
                            onSave: saveDraft,
                            onReset: resetDraft
                        )
                    }
                } else {
                    MarineCard {
                        CaptainModeNotice(
                            title: "Captain tools locked",
                            detail: "Clients see the latest captain call here. Weather editing is available from Contact after unlocking Captain Mode for local review."
                        )
                    }
                }

                MarineCard {
                    VStack(alignment: .leading, spacing: 16) {
                        SectionHeader(
                            title: "Marine conditions",
                            subtitle: "Captain-entered values saved on this device until live marine data is wired."
                        )

                        LazyVGrid(columns: [GridItem(.adaptive(minimum: 148), spacing: 12)], spacing: 12) {
                            ForEach(update.metrics) { metric in
                                MetricPill(symbol: metric.symbol, title: metric.label, value: "\(metric.value) · \(metric.status)")
                            }
                        }

                        HStack(alignment: .top, spacing: 10) {
                            Image(systemName: "exclamationmark.triangle")
                                .foregroundStyle(Color.highHookOrange)
                            Text(captainModeUnlocked ? "Captain Mode: this update persists locally for review. Production needs authenticated captain/admin sync or a live marine feed before App Store release." : "Client view: these are captain-entered review values until live marine data or authenticated captain updates are connected.")
                                .font(.caption.weight(.semibold))
                                .foregroundStyle(Color.highHookDeckText)
                        }
                        .padding(12)
                        .background(Color.highHookNavy.opacity(0.58), in: RoundedRectangle(cornerRadius: 10, style: .continuous))
                    }
                }

                MarineCard {
                    VStack(alignment: .leading, spacing: 14) {
                        SectionHeader(
                            title: "Watch list",
                            subtitle: "The variables that change a charter plan fastest."
                        )

                        LazyVGrid(columns: [GridItem(.adaptive(minimum: 210), spacing: 12)], spacing: 12) {
                            WatchTile(symbol: "wind", title: "Wind shift", detail: "A small direction change can make one side of the bay fishable and another sloppy.")
                            WatchTile(symbol: "cloud.fog", title: "Fog window", detail: "Visibility matters for running, finding birds and returning to the dock comfortably.")
                            WatchTile(symbol: "water.waves", title: "Ground swell", detail: "Offshore trips need a wider comfort margin than local striped bass trips.")
                            WatchTile(symbol: "arrow.down.to.line.compact", title: "Tide timing", detail: "Moving water drives the bite, especially on local bass and bluefish trips.")
                        }
                    }
                }

                MarineCard {
                    VStack(alignment: .leading, spacing: 14) {
                        SectionHeader(
                            title: "Captain decision timeline",
                            subtitle: "Clear timing reduces day-before uncertainty."
                        )

                        DecisionRow(symbol: "1.circle", title: "Night before", detail: "Captain reviews wind, tide, sea state, fog and recent bite reports.")
                        DecisionRow(symbol: "2.circle", title: "Crew text", detail: "Booked clients receive clothing, timing and dock arrival guidance.")
                        DecisionRow(symbol: "3.circle", title: "Morning check", detail: "Final call happens after local observations and any overnight forecast shift.")
                        DecisionRow(symbol: "4.circle", title: "Adjust or reschedule", detail: "Safety-first call if the window closes or fishable water changes.")
                    }
                }
            }
            .padding()
            .padding(.bottom, 118)
        }
        .scrollContentBackground(.hidden)
        .background(ChartPaperBackground().ignoresSafeArea())
        .navigationTitle("")
        .onChange(of: update) {
            draft = update
        }
    }

    private func saveDraft() {
        var saved = draft
        saved.updatedAt = Date()
        onSaveUpdate(saved)
        draft = saved
    }

    private func resetDraft() {
        draft = CaptainWeatherUpdate.sample
        onSaveUpdate(draft)
    }
}

private struct CaptainCallPanel: View {
    let update: CaptainWeatherUpdate

    var body: some View {
        VStack(alignment: .leading, spacing: 16) {
            SectionHeader(
                title: "Captain call",
                subtitle: "Last captain update: \(Self.dateFormatter.string(from: update.updatedAt))"
            )

            HStack(alignment: .top, spacing: 14) {
                Image(systemName: update.localCall.symbol)
                    .font(.largeTitle)
                    .foregroundStyle(Color.highHookOrange)
                    .frame(width: 58, height: 58)
                    .background(Color.highHookNavy.opacity(0.72), in: RoundedRectangle(cornerRadius: 14, style: .continuous))

                VStack(alignment: .leading, spacing: 7) {
                    Text(update.localCall.headline)
                        .font(.title2.weight(.black))
                        .foregroundStyle(Color.highHookSunwash)
                    Text(update.note)
                        .font(.subheadline)
                        .foregroundStyle(Color.highHookDeckText)
                        .fixedSize(horizontal: false, vertical: true)
                }
            }

            LazyVGrid(columns: [GridItem(.adaptive(minimum: 150), spacing: 12)], spacing: 12) {
                WeatherDecisionTile(title: "Local bass", value: update.localCall.rawValue, symbol: "fish", tone: update.localCall.tone)
                WeatherDecisionTile(title: "Offshore", value: update.offshoreCall.rawValue, symbol: "dot.radiowaves.left.and.right", tone: update.offshoreCall.tone)
                WeatherDecisionTile(title: "Next update", value: update.nextUpdate, symbol: "clock", tone: .neutral)
            }
        }
    }

    private static let dateFormatter: DateFormatter = {
        let formatter = DateFormatter()
        formatter.dateStyle = .medium
        formatter.timeStyle = .short
        return formatter
    }()
}

private struct CaptainWeatherEditor: View {
    @Binding var draft: CaptainWeatherUpdate
    let onSave: () -> Void
    let onReset: () -> Void

    var body: some View {
        VStack(alignment: .leading, spacing: 16) {
            SectionHeader(
                title: "Captain update controls",
                subtitle: "Prototype admin controls for reviewing the client weather experience."
            )

            WeatherCallPicker(title: "Local bass", selection: $draft.localCall)
            WeatherCallPicker(title: "Offshore", selection: $draft.offshoreCall)

            BrandedWeatherTextField(title: "Next update", text: $draft.nextUpdate, symbol: "clock")

            VStack(alignment: .leading, spacing: 8) {
                Label("Captain note", systemImage: "text.bubble")
                    .font(.headline)
                    .foregroundStyle(Color.highHookSunwash)
                TextEditor(text: $draft.note)
                    .frame(minHeight: 96)
                    .scrollContentBackground(.hidden)
                    .foregroundStyle(Color.highHookSunwash)
                    .padding(8)
                    .background(Color.highHookMidnight.opacity(0.78), in: RoundedRectangle(cornerRadius: 10, style: .continuous))
                    .overlay {
                        RoundedRectangle(cornerRadius: 10, style: .continuous)
                            .stroke(Color.highHookLine.opacity(0.28), lineWidth: 1)
                    }
            }

            HStack(spacing: 10) {
                Button {
                    onSave()
                } label: {
                    Label("Save update", systemImage: "square.and.arrow.down")
                }
                .buttonStyle(BrandActionButtonStyle(tone: .primary))

                Button {
                    onReset()
                } label: {
                    Label("Reset sample", systemImage: "arrow.counterclockwise")
                }
                .buttonStyle(BrandActionButtonStyle(tone: .secondary))
            }

            Text("These controls are intentionally local. Production should require captain sign-in, write audit history and update booked clients automatically.")
                .font(.caption)
                .foregroundStyle(Color.highHookDeckText)
        }
    }
}

private struct WeatherCallPicker: View {
    let title: String
    @Binding var selection: CaptainWeatherUpdate.CharterCall

    var body: some View {
        VStack(alignment: .leading, spacing: 9) {
            Text(title.uppercased())
                .font(.caption.weight(.black))
                .foregroundStyle(Color.highHookDeckText)

            LazyVGrid(columns: [GridItem(.adaptive(minimum: 110), spacing: 8)], spacing: 8) {
                ForEach(CaptainWeatherUpdate.CharterCall.allCases, id: \.self) { call in
                    Button {
                        selection = call
                    } label: {
                        Label(call.rawValue, systemImage: call.symbol)
                            .font(.caption.weight(.bold))
                            .lineLimit(1)
                            .frame(maxWidth: .infinity, alignment: .leading)
                    }
                    .buttonStyle(WeatherCallButtonStyle(isSelected: selection == call, tone: call.tone))
                }
            }
        }
    }
}

private struct BrandedWeatherTextField: View {
    let title: String
    @Binding var text: String
    let symbol: String

    var body: some View {
        HStack(spacing: 10) {
            Image(systemName: symbol)
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

private enum WeatherDecisionTone {
    case go
    case watch
    case neutral
}

private extension CaptainWeatherUpdate.CharterCall {
    var tone: WeatherDecisionTone {
        switch self {
        case .green: .go
        case .watch: .watch
        case .hold: .neutral
        }
    }
}

private struct WeatherCallButtonStyle: ButtonStyle {
    let isSelected: Bool
    let tone: WeatherDecisionTone

    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .foregroundStyle(isSelected ? Color.highHookSunwash : Color.highHookDeckText)
            .padding(.vertical, 9)
            .padding(.horizontal, 10)
            .background(
                (isSelected ? Color.highHookHarbor : Color.highHookNavy.opacity(0.68))
                    .opacity(configuration.isPressed ? 0.72 : 1),
                in: RoundedRectangle(cornerRadius: 9, style: .continuous)
            )
            .overlay {
                RoundedRectangle(cornerRadius: 9, style: .continuous)
                    .stroke(borderColor.opacity(isSelected ? 0.78 : 0.28), lineWidth: 1)
            }
    }

    private var borderColor: Color {
        switch tone {
        case .go: Color.highHookOrange
        case .watch: Color.highHookDeckText
        case .neutral: Color.highHookTeal
        }
    }
}

private struct WeatherDecisionTile: View {
    let title: String
    let value: String
    let symbol: String
    let tone: WeatherDecisionTone

    var body: some View {
        HStack(spacing: 10) {
            Image(systemName: symbol)
                .foregroundStyle(iconColor)
                .frame(width: 30, height: 30)
                .background(Color.highHookNavy.opacity(0.68), in: RoundedRectangle(cornerRadius: 8, style: .continuous))
            VStack(alignment: .leading, spacing: 2) {
                Text(title.uppercased())
                    .font(.caption2.weight(.black))
                    .foregroundStyle(Color.highHookDeckText)
                Text(value)
                    .font(.headline.weight(.black))
                    .foregroundStyle(Color.highHookSunwash)
            }
            Spacer(minLength: 0)
        }
        .padding(12)
        .background(Color.highHookNavy.opacity(0.58), in: RoundedRectangle(cornerRadius: 12, style: .continuous))
        .overlay {
            RoundedRectangle(cornerRadius: 12, style: .continuous)
                .stroke(iconColor.opacity(0.42), lineWidth: 1)
        }
    }

    private var iconColor: Color {
        switch tone {
        case .go: Color.highHookOrange
        case .watch: Color.highHookDeckText
        case .neutral: Color.highHookTeal
        }
    }
}

private struct WatchTile: View {
    let symbol: String
    let title: String
    let detail: String

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Image(systemName: symbol)
                .foregroundStyle(Color.highHookOrange)
                .frame(width: 30, height: 30)
                .background(Color.highHookNavy.opacity(0.72), in: RoundedRectangle(cornerRadius: 8, style: .continuous))
            Text(title)
                .font(.headline.weight(.bold))
                .foregroundStyle(Color.highHookSunwash)
            Text(detail)
                .font(.caption)
                .foregroundStyle(Color.highHookDeckText)
                .fixedSize(horizontal: false, vertical: true)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .padding(12)
        .background(Color.highHookNavy.opacity(0.56), in: RoundedRectangle(cornerRadius: 12, style: .continuous))
    }
}

private struct DecisionRow: View {
    let symbol: String
    let title: String
    let detail: String

    var body: some View {
        HStack(alignment: .top, spacing: 12) {
            Image(systemName: symbol)
                .font(.title3)
                .foregroundStyle(Color.highHookOrange)
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
