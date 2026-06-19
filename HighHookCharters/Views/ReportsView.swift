import SwiftUI

struct ReportsView: View {
    let reports: [FishingReport]
    let captainModeUnlocked: Bool
    let onPublishReport: (FishingReport) -> Void
    @State private var title = "Bass bite update"
    @State private var condition = "62F water"
    @State private var note = "Moving water produced the cleanest shots today. Bring light layers and expect the captain to adjust around tide."

    private var canPublish: Bool {
        !title.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty &&
        !note.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty &&
        !condition.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty
    }

    var body: some View {
        ScrollView {
            LazyVStack(spacing: 18) {
                BrandScreenTitle(title: "Reports")

                if captainModeUnlocked {
                    MarineCard {
                        VStack(alignment: .leading, spacing: 16) {
                            SectionHeader(
                                title: "Captain report controls",
                                subtitle: "Prototype CMS controls for publishing a fresh bite update."
                            )

                            ReportTextField(title: "Report title", text: $title, symbol: "newspaper")
                            ReportTextField(title: "Condition", text: $condition, symbol: "thermometer.sun")

                            VStack(alignment: .leading, spacing: 8) {
                                Label("Report note", systemImage: "text.bubble")
                                    .font(.headline)
                                    .foregroundStyle(Color.highHookSunwash)
                                TextEditor(text: $note)
                                    .frame(minHeight: 108)
                                    .scrollContentBackground(.hidden)
                                    .foregroundStyle(Color.highHookSunwash)
                                    .padding(8)
                                    .background(Color.highHookMidnight.opacity(0.78), in: RoundedRectangle(cornerRadius: 10, style: .continuous))
                                    .overlay {
                                        RoundedRectangle(cornerRadius: 10, style: .continuous)
                                            .stroke(Color.highHookLine.opacity(0.28), lineWidth: 1)
                                    }
                            }

                            Button {
                                publish()
                            } label: {
                                Label("Publish local report", systemImage: "square.and.arrow.up")
                            }
                            .buttonStyle(BrandActionButtonStyle(tone: .primary))
                            .disabled(!canPublish)

                            Text("Captain Mode: local publishing is for release review only. Production needs authenticated CMS/admin sync, photo upload, moderation and public report controls.")
                                .font(.caption)
                                .foregroundStyle(Color.highHookDeckText)
                        }
                    }
                } else {
                    MarineCard {
                        CaptainModeNotice(
                            title: "Reports are client-safe",
                            detail: "Prospects see published trip reports and gallery previews. Publishing controls stay hidden until Captain Mode is unlocked from Contact."
                        )
                    }
                }

                MarineCard {
                    VStack(alignment: .leading, spacing: 16) {
                        SectionHeader(
                            title: "Fishing Reports",
                            subtitle: "\(reports.count) saved reports on this device. Fresh proof for prospects and useful intel for returning clients."
                        )

                        ForEach(reports) { report in
                            ReportRow(report: report)

                            if report.id != reports.last?.id {
                                Divider()
                            }
                        }
                    }
                }

                MarineCard {
                    VStack(alignment: .leading, spacing: 14) {
                        SectionHeader(
                            title: "Gallery Preview",
                            subtitle: "Visual proof moments for the eventual client photo feed."
                        )

                        LazyVGrid(columns: [GridItem(.adaptive(minimum: 120), spacing: 10)], spacing: 10) {
                            GalleryTile(symbol: "fish", label: "Bass bite")
                            GalleryTile(symbol: "camera", label: "Dock photo")
                            GalleryTile(symbol: "water.waves", label: "Offshore day")
                            GalleryTile(symbol: "figure.and.child.holdinghands", label: "Kids camp")
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
    }

    private func publish() {
        guard canPublish else { return }
        let report = FishingReport(
            date: Self.shortDateFormatter.string(from: Date()),
            title: title.trimmingCharacters(in: .whitespacesAndNewlines),
            note: note.trimmingCharacters(in: .whitespacesAndNewlines),
            condition: condition.trimmingCharacters(in: .whitespacesAndNewlines),
            publishedAt: Date()
        )
        onPublishReport(report)
        title = "New bite update"
        condition = "Captain-entered condition"
        note = "Add the bite, weather, tide and client-safe notes here."
    }

    private static let shortDateFormatter: DateFormatter = {
        let formatter = DateFormatter()
        formatter.dateFormat = "MMM d"
        return formatter
    }()
}

private struct ReportRow: View {
    let report: FishingReport

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            HStack {
                Text(report.date)
                    .font(.caption.weight(.bold))
                    .foregroundStyle(Color.highHookOrange)
                Spacer()
                Text(report.condition)
                    .font(.caption)
                    .foregroundStyle(Color.highHookDeckText)
            }
            Text(report.title)
                .font(.headline)
                .foregroundStyle(Color.highHookSunwash)
            Text(report.note)
                .font(.subheadline)
                .foregroundStyle(Color.highHookDeckText)
            Text("Published \(Self.publishedFormatter.string(from: report.publishedAt))")
                .font(.caption2.weight(.semibold))
                .foregroundStyle(Color.highHookDeckText)
        }
        .padding(.vertical, 8)
    }

    private static let publishedFormatter: DateFormatter = {
        let formatter = DateFormatter()
        formatter.dateStyle = .medium
        formatter.timeStyle = .short
        return formatter
    }()
}

private struct ReportTextField: View {
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

private struct GalleryTile: View {
    let symbol: String
    let label: String

    var body: some View {
        VStack(spacing: 10) {
            Image(systemName: symbol)
                .font(.title)
                .foregroundStyle(Color.highHookTeal)
            Text(label)
                .font(.caption.weight(.semibold))
                .foregroundStyle(Color.highHookSunwash)
        }
        .frame(maxWidth: .infinity, minHeight: 110)
        .background(Color.highHookMist, in: RoundedRectangle(cornerRadius: 12, style: .continuous))
    }
}
