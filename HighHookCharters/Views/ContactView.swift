import SwiftUI

struct ContactView: View {
    let localClientDataSummary: String
    let localClientDataExport: String
    let captainModeUnlocked: Bool
    let onUnlockCaptainMode: () -> Void
    let onLockCaptainMode: () -> Void
    let onClearLocalBookingData: () -> Void
    @State private var showingClearConfirmation = false
    @State private var showingExportPreview = false
    @State private var showingCaptainModeSheet = false
    @State private var didClearLocalData = false

    var body: some View {
        ScrollView {
            LazyVStack(spacing: 18) {
                BrandScreenTitle(title: "Contact")
                MarineCard {
                    VStack(alignment: .leading, spacing: 16) {
                        SectionHeader(
                            title: "Captain & Contact",
                            subtitle: "Make it easy to ask a question, find the dock or reopen the store."
                        )

                        Link(destination: URL(string: "mailto:Charters@FishHighHook.com")!) {
                            ContactAction(symbol: "envelope", title: "Email", detail: "Charters@FishHighHook.com")
                        }
                        Link(destination: URL(string: "https://www.fishhighhook.com/")!) {
                            ContactAction(symbol: "safari", title: "Website", detail: "fishhighhook.com")
                        }
                        Link(destination: URL(string: "https://maps.apple.com/?q=25%20Mattakeesett%20Ct%20Duxbury%20MA%2002332")!) {
                            ContactAction(symbol: "mappin.and.ellipse", title: "Departure", detail: "25 Mattakeesett Ct, Duxbury, MA 02332")
                        }
                        Link(destination: URL(string: "https://www.fishhighhook.com/store")!) {
                            ContactAction(symbol: "bag", title: "Store", detail: "High Hook gear and gift ideas")
                        }
                    }
                }

                captainModeCard

                MarineCard {
                    VStack(alignment: .leading, spacing: 14) {
                        SectionHeader(
                            title: "Trust & safety",
                            subtitle: "Plain-language expectations for booking, privacy and on-water decisions."
                        )

                        SafetyDisclosureRow(
                            symbol: "lock.shield",
                            title: "Privacy",
                            detail: "Booking details are saved locally on this device for the prototype and sent through your Mail draft. Production needs a published privacy policy and secure backend storage."
                        )
                        SafetyDisclosureRow(
                            symbol: "creditcard",
                            title: "Payments",
                            detail: "No card is charged in the app. Deposits and balances are handled only after High Hook confirms the date."
                        )
                        SafetyDisclosureRow(
                            symbol: "cloud.sun",
                            title: "Captain authority",
                            detail: "Weather, tide, safety and fishery rules can change. The captain's latest call overrides any sample app data."
                        )
                        SafetyDisclosureRow(
                            symbol: "cross.case",
                            title: "Emergency",
                            detail: "For immediate on-water emergencies, call emergency services or hail the Coast Guard. This app is not an emergency channel."
                        )

                        Link(destination: URL(string: "tel:911")!) {
                            Label("Call 911", systemImage: "phone.fill")
                                .frame(maxWidth: .infinity)
                        }
                        .buttonStyle(BrandActionButtonStyle(tone: .secondary, expands: true))

                        VStack(alignment: .leading, spacing: 10) {
                            Text("Local client data")
                                .font(.headline.weight(.bold))
                                .foregroundStyle(Color.highHookSunwash)
                            Text(didClearLocalData ? "Local booking inquiries, trip reminders and prep checklist progress were cleared from this device." : localClientDataSummary)
                                .font(.subheadline)
                                .foregroundStyle(Color.highHookDeckText)
                                .fixedSize(horizontal: false, vertical: true)

                            Button {
                                showingExportPreview = true
                            } label: {
                                Label("Export local data", systemImage: "square.and.arrow.up")
                                    .frame(maxWidth: .infinity)
                            }
                            .buttonStyle(BrandActionButtonStyle(tone: .primary, expands: true))
                            .disabled(didClearLocalData)

                            Button {
                                showingClearConfirmation = true
                            } label: {
                                Label("Clear local booking data", systemImage: "trash")
                                    .frame(maxWidth: .infinity)
                            }
                            .buttonStyle(BrandActionButtonStyle(tone: .secondary, expands: true))
                        }
                        .padding(12)
                        .background(Color.highHookNavy.opacity(0.5), in: RoundedRectangle(cornerRadius: 10, style: .continuous))
                        .overlay {
                            RoundedRectangle(cornerRadius: 10, style: .continuous)
                                .stroke(Color.highHookLine.opacity(0.24), lineWidth: 1)
                        }
                    }
                }

                MarineCard {
                    VStack(alignment: .leading, spacing: 12) {
                        Label("Sessions", systemImage: "calendar")
                            .font(.title2.bold())
                            .foregroundStyle(Color.highHookInk)
                        SessionRow(
                            symbol: "figure.and.child.holdinghands",
                            title: "Kids Camp",
                            detail: "Ages 10-15 learn fishing, knot tying, lures, fish ID, boating safety and South Shore marine life.",
                            meta: "$600 · 4 days · 8am-12pm"
                        )
                        Divider().overlay(Color.highHookLine.opacity(0.22))
                        SessionRow(
                            symbol: "moon.stars",
                            title: "Ladies Night Fishing",
                            detail: "A relaxed evening fishing session for friend groups, first timers and after-work crews.",
                            meta: "Select summer evenings · ask captain"
                        )
                    }
                }

                MarineCard {
                    VStack(alignment: .leading, spacing: 12) {
                        SectionHeader(
                            title: "Regulations",
                            subtitle: "Rules move during the season. Use these official sources and defer to the captain before keeping fish."
                        )

                        ForEach(CharterData.regulations) { resource in
                            Link(destination: resource.url) {
                                RegulationSourceRow(resource: resource)
                            }
                            .buttonStyle(.plain)
                        }

                        Text("Verified source links: June 19, 2026. This app should still support captain/admin updates before release.")
                            .font(.caption.weight(.semibold))
                            .foregroundStyle(Color.highHookDeckText)
                            .padding(.top, 4)
                    }
                }
            }
            .padding()
            .padding(.bottom, 118)
        }
        .scrollContentBackground(.hidden)
        .background(ChartPaperBackground().ignoresSafeArea())
        .navigationTitle("")
        .sheet(isPresented: $showingExportPreview) {
            LocalDataExportSheet(exportText: localClientDataExport)
        }
        .sheet(isPresented: $showingCaptainModeSheet) {
            CaptainModeUnlockSheet(onUnlock: {
                onUnlockCaptainMode()
                showingCaptainModeSheet = false
            })
        }
        .confirmationDialog(
            "Clear local booking data?",
            isPresented: $showingClearConfirmation,
            titleVisibility: .visible
        ) {
            Button("Clear local booking data", role: .destructive) {
                onClearLocalBookingData()
                didClearLocalData = true
            }
            Button("Cancel", role: .cancel) {}
        } message: {
            Text("This removes saved booking inquiries, trip reminder preferences and prep checklist progress from this device. It does not affect emails already sent to High Hook.")
        }
    }

    private var captainModeCard: some View {
        MarineCard {
            VStack(alignment: .leading, spacing: 14) {
                SectionHeader(
                    title: "Captain Mode",
                    subtitle: captainModeUnlocked ? "Local review tools are visible for weather, reports and booking status." : "Keep the customer app clean. Unlock only when the captain is reviewing operations."
                )

                SafetyDisclosureRow(
                    symbol: captainModeUnlocked ? "lock.open" : "lock",
                    title: captainModeUnlocked ? "Unlocked on this device" : "Locked for client review",
                    detail: captainModeUnlocked ? "Weather update controls, report publishing and Trip Hub status editing are available locally. Production still needs real captain sign-in." : "Clients see reports, weather calls and trip status without editing controls."
                )

                Button {
                    if captainModeUnlocked {
                        onLockCaptainMode()
                    } else {
                        showingCaptainModeSheet = true
                    }
                } label: {
                    Label(captainModeUnlocked ? "Lock Captain Mode" : "Unlock Captain Mode", systemImage: captainModeUnlocked ? "lock" : "lock.open")
                        .frame(maxWidth: .infinity)
                }
                .buttonStyle(BrandActionButtonStyle(tone: captainModeUnlocked ? .secondary : .primary, expands: true))

                Text("Review unlock code: HIGHHOOK. This is a local prototype gate, not production authentication.")
                    .font(.caption)
                    .foregroundStyle(Color.highHookDeckText)
            }
        }
    }
}

private struct CaptainModeUnlockSheet: View {
    let onUnlock: () -> Void
    @Environment(\.dismiss) private var dismiss
    @State private var code = ""
    @State private var showingError = false

    var body: some View {
        NavigationStack {
            ZStack {
                ChartPaperBackground()
                    .ignoresSafeArea()

                VStack(alignment: .leading, spacing: 18) {
                    SectionHeader(
                        title: "Unlock Captain Mode",
                        subtitle: "Use this local review gate to reveal captain-only prototype controls."
                    )

                    VStack(alignment: .leading, spacing: 8) {
                        Label("Review code", systemImage: "key")
                            .font(.headline)
                            .foregroundStyle(Color.highHookSunwash)
                        SecureField("HIGHHOOK", text: $code)
                            .textFieldStyle(.plain)
                            .textInputAutocapitalization(.characters)
                            .autocorrectionDisabled()
                            .foregroundStyle(Color.highHookSunwash)
                            .tint(Color.highHookOrange)
                            .padding(12)
                            .background(Color.highHookNavy.opacity(0.72), in: RoundedRectangle(cornerRadius: 10, style: .continuous))
                            .overlay {
                                RoundedRectangle(cornerRadius: 10, style: .continuous)
                                    .stroke((showingError ? Color.red : Color.highHookLine).opacity(0.42), lineWidth: 1)
                            }
                    }

                    if showingError {
                        Text("That code did not match. Use HIGHHOOK for local review.")
                            .font(.caption.weight(.semibold))
                            .foregroundStyle(Color.highHookOrange)
                    }

                    Button {
                        if code.trimmingCharacters(in: .whitespacesAndNewlines).uppercased() == "HIGHHOOK" {
                            onUnlock()
                        } else {
                            showingError = true
                        }
                    } label: {
                        Label("Unlock", systemImage: "lock.open")
                            .frame(maxWidth: .infinity)
                    }
                    .buttonStyle(BrandActionButtonStyle(tone: .primary, expands: true))

                    Text("Production should replace this with authenticated captain/admin sign-in, audit history and server sync.")
                        .font(.caption)
                        .foregroundStyle(Color.highHookDeckText)

                    Spacer(minLength: 0)
                }
                .padding()
            }
            .preferredColorScheme(.dark)
            .toolbar {
                ToolbarItem(placement: .topBarTrailing) {
                    Button("Cancel") {
                        dismiss()
                    }
                    .foregroundStyle(Color.highHookSunwash)
                }
            }
        }
    }
}

private struct LocalDataExportSheet: View {
    let exportText: String
    @Environment(\.dismiss) private var dismiss

    var body: some View {
        NavigationStack {
            ZStack {
                ChartPaperBackground()
                    .ignoresSafeArea()

                ScrollView {
                    VStack(alignment: .leading, spacing: 16) {
                        SectionHeader(
                            title: "Local data export",
                            subtitle: "Review exactly what is saved on this device before sharing it."
                        )

                        Text(exportText)
                            .font(.system(.footnote, design: .monospaced))
                            .foregroundStyle(Color.highHookSunwash)
                            .textSelection(.enabled)
                            .frame(maxWidth: .infinity, alignment: .leading)
                            .padding(14)
                            .background(Color.highHookNavy.opacity(0.74), in: RoundedRectangle(cornerRadius: 10, style: .continuous))
                            .overlay {
                                RoundedRectangle(cornerRadius: 10, style: .continuous)
                                    .stroke(Color.highHookLine.opacity(0.28), lineWidth: 1)
                            }

                        ShareLink(
                            item: exportText,
                            subject: Text("High Hook local client data export"),
                            message: Text("Local High Hook booking, reminder and checklist data saved on this device.")
                        ) {
                            Label("Share export", systemImage: "square.and.arrow.up")
                                .frame(maxWidth: .infinity)
                        }
                        .buttonStyle(BrandActionButtonStyle(tone: .primary, expands: true))
                    }
                    .padding()
                }
            }
            .preferredColorScheme(.dark)
            .toolbar {
                ToolbarItem(placement: .topBarTrailing) {
                    Button("Done") {
                        dismiss()
                    }
                    .foregroundStyle(Color.highHookSunwash)
                }
            }
        }
    }
}

private struct SafetyDisclosureRow: View {
    let symbol: String
    let title: String
    let detail: String

    var body: some View {
        HStack(alignment: .top, spacing: 12) {
            Image(systemName: symbol)
                .font(.headline)
                .foregroundStyle(Color.highHookOrange)
                .frame(width: 32, height: 32)
                .background(Color.highHookNavy.opacity(0.72), in: RoundedRectangle(cornerRadius: 8, style: .continuous))
            VStack(alignment: .leading, spacing: 4) {
                Text(title)
                    .font(.headline.weight(.bold))
                    .foregroundStyle(Color.highHookSunwash)
                Text(detail)
                    .font(.subheadline)
                    .foregroundStyle(Color.highHookDeckText)
                    .fixedSize(horizontal: false, vertical: true)
            }
        }
        .padding(12)
        .background(Color.highHookNavy.opacity(0.5), in: RoundedRectangle(cornerRadius: 10, style: .continuous))
        .overlay {
            RoundedRectangle(cornerRadius: 10, style: .continuous)
                .stroke(Color.highHookLine.opacity(0.24), lineWidth: 1)
        }
    }
}

private struct RegulationSourceRow: View {
    let resource: RegulationResource

    var body: some View {
        HStack(alignment: .top, spacing: 12) {
            Image(systemName: resource.symbol)
                .font(.headline)
                .foregroundStyle(Color.highHookOrange)
                .frame(width: 34, height: 34)
                .background(Color.highHookNavy.opacity(0.72), in: RoundedRectangle(cornerRadius: 8, style: .continuous))

            VStack(alignment: .leading, spacing: 5) {
                Text(resource.title)
                    .font(.headline.weight(.bold))
                    .foregroundStyle(Color.highHookSunwash)
                Text(resource.detail)
                    .font(.subheadline)
                    .foregroundStyle(Color.highHookDeckText)
                    .fixedSize(horizontal: false, vertical: true)
                Text(resource.source)
                    .font(.caption.weight(.black))
                    .foregroundStyle(Color.highHookOrange)
            }

            Spacer(minLength: 0)

            Image(systemName: "arrow.up.right")
                .font(.caption.weight(.black))
                .foregroundStyle(Color.highHookLine.opacity(0.72))
        }
        .padding(12)
        .background(Color.highHookNavy.opacity(0.58), in: RoundedRectangle(cornerRadius: 12, style: .continuous))
        .overlay {
            RoundedRectangle(cornerRadius: 12, style: .continuous)
                .stroke(Color.highHookLine.opacity(0.26), lineWidth: 1)
        }
        .contentShape(Rectangle())
    }
}

private struct SessionRow: View {
    let symbol: String
    let title: String
    let detail: String
    let meta: String

    var body: some View {
        HStack(alignment: .top, spacing: 12) {
            Image(systemName: symbol)
                .foregroundStyle(Color.highHookOrange)
                .frame(width: 30, height: 30)
                .background(Color.highHookNavy.opacity(0.72), in: RoundedRectangle(cornerRadius: 8, style: .continuous))
            VStack(alignment: .leading, spacing: 4) {
                Text(title)
                    .font(.headline)
                    .foregroundStyle(Color.highHookSunwash)
                Text(detail)
                    .font(.subheadline)
                    .foregroundStyle(Color.highHookDeckText)
                Text(meta)
                    .font(.caption.weight(.bold))
                    .foregroundStyle(Color.highHookOrange)
            }
        }
    }
}

private struct ContactAction: View {
    let symbol: String
    let title: String
    let detail: String

    var body: some View {
        HStack(spacing: 12) {
            Image(systemName: symbol)
                .font(.headline)
                .foregroundStyle(Color.highHookSunwash)
                .frame(width: 38, height: 38)
                .background(Color.highHookTeal, in: RoundedRectangle(cornerRadius: 10, style: .continuous))
            VStack(alignment: .leading, spacing: 3) {
                Text(title)
                    .font(.headline)
                    .foregroundStyle(Color.highHookSunwash)
                Text(detail)
                    .font(.subheadline)
                    .foregroundStyle(Color.highHookDeckText)
                    .multilineTextAlignment(.leading)
            }
            Spacer()
            Image(systemName: "chevron.right")
                .font(.caption.weight(.bold))
                .foregroundStyle(Color.highHookLine.opacity(0.55))
        }
        .contentShape(Rectangle())
    }
}
