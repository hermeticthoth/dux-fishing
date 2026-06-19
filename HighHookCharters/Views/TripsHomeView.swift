import SwiftUI

struct TripsHomeView: View {
    @Binding var selectedTrip: CharterTrip
    let onOpenTrip: (CharterTrip) -> Void
    let onBook: () -> Void
    @State private var selectedGoal = TripGoal.firstTimer

    var body: some View {
        ScrollView {
            LazyVStack(spacing: 18) {
                HeroPanel(onBook: onBook)

                MarineCard {
                    TripMatchPanel(
                        selectedGoal: $selectedGoal,
                        selectedTrip: $selectedTrip
                    )
                }

                MarineCard {
                    VStack(alignment: .leading, spacing: 16) {
                        SectionHeader(
                            title: "Find the right trip",
                            subtitle: "Pick a target species, compare 2026 rates and send the captain a clean inquiry."
                        )

                        ScrollView(.horizontal, showsIndicators: false) {
                            HStack(spacing: 12) {
                                ForEach(CharterData.trips) { trip in
                                    TripChip(
                                        trip: trip,
                                        selected: selectedTrip.id == trip.id,
                                        action: { selectedTrip = trip }
                                    )
                                }
                            }
                            .padding(.vertical, 2)
                        }

                        TripSummaryCard(trip: selectedTrip, onOpen: { onOpenTrip(selectedTrip) }, onBook: onBook)
                    }
                }

                MarineCard {
                    VStack(alignment: .leading, spacing: 14) {
                        SectionHeader(
                            title: "2026 Trips & Rates",
                            subtitle: "Transparent options for prospects before they reach out."
                        )

                        ForEach(CharterData.trips) { trip in
                            Button {
                                selectedTrip = trip
                                onOpenTrip(trip)
                            } label: {
                                TripRateRow(trip: trip)
                            }
                            .buttonStyle(.plain)

                            if trip.id != CharterData.trips.last?.id {
                                Divider()
                            }
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
        .toolbar {
            ToolbarItem(placement: .topBarTrailing) {
                Button(action: onBook) {
                    Label("Book", systemImage: "calendar.badge.plus")
                }
            }
        }
    }
}

private enum TripGoal: String, CaseIterable, Identifiable {
    case firstTimer = "First timer"
    case family = "Family"
    case trophy = "Trophy fish"
    case offshore = "Offshore"
    case social = "Social night"
    case kids = "Kids camp"

    var id: String { rawValue }

    var symbol: String {
        switch self {
        case .firstTimer: "sparkles"
        case .family: "person.3"
        case .trophy: "star.circle"
        case .offshore: "dot.radiowaves.left.and.right"
        case .social: "moon.stars"
        case .kids: "figure.and.child.holdinghands"
        }
    }

    var tripId: String {
        switch self {
        case .firstTimer, .family: "bass-local"
        case .trophy: "race-point"
        case .offshore: "bluefin"
        case .social: "ladies-night"
        case .kids: "kids-camp"
        }
    }

    var reason: String {
        switch self {
        case .firstTimer: "Local striped bass is the easiest, most reliable way to get a new crew hooked."
        case .family: "Half-day local trips keep the day manageable while still feeling like a real charter."
        case .trophy: "Race Point is the better fit when the group wants a shot at heavier striped bass."
        case .offshore: "Bluefin tuna is the serious all-day offshore choice with the biggest upside."
        case .social: "Ladies Night is a lower-pressure evening session for friend groups and first timers."
        case .kids: "Kids Camp turns fishing, boating safety and marine life into four hands-on mornings."
        }
    }
}

private struct TripMatchPanel: View {
    @Binding var selectedGoal: TripGoal
    @Binding var selectedTrip: CharterTrip

    private var matchedTrip: CharterTrip {
        CharterData.trips.first { $0.id == selectedGoal.tripId } ?? CharterData.trips[0]
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 16) {
            SectionHeader(
                title: "Plan your trip in 30 seconds",
                subtitle: "Start with the crew and the app will point you to the best High Hook option."
            )

            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: 10) {
                    ForEach(TripGoal.allCases) { goal in
                        Button {
                            selectedGoal = goal
                            if let trip = CharterData.trips.first(where: { $0.id == goal.tripId }) {
                                selectedTrip = trip
                            }
                        } label: {
                            HStack(spacing: 8) {
                                Image(systemName: goal.symbol)
                                    .font(.subheadline.weight(.bold))
                                Text(goal.rawValue)
                                    .font(.caption.weight(.black))
                                    .lineLimit(1)
                            }
                            .frame(height: 38)
                            .padding(.horizontal, 12)
                            .foregroundStyle(selectedGoal == goal ? Color.highHookSunwash : Color.highHookDeckText)
                            .background(
                                selectedGoal == goal ? Color.highHookHarbor.opacity(0.96) : Color.highHookBlue.opacity(0.74),
                                in: RoundedRectangle(cornerRadius: 10, style: .continuous)
                            )
                            .overlay {
                                RoundedRectangle(cornerRadius: 10, style: .continuous)
                                    .stroke(Color.highHookLine.opacity(selectedGoal == goal ? 0.85 : 0.28), lineWidth: 1)
                            }
                        }
                        .buttonStyle(.plain)
                    }
                }
                .padding(.vertical, 2)
            }

            HStack(alignment: .top, spacing: 12) {
                Image(systemName: matchedTrip.symbol)
                    .font(.title3)
                    .foregroundStyle(Color.highHookOrange)
                    .frame(width: 34, height: 34)
                    .background(Color.highHookNavy.opacity(0.78), in: RoundedRectangle(cornerRadius: 8, style: .continuous))
                VStack(alignment: .leading, spacing: 5) {
                    Text("Recommended: \(matchedTrip.name)")
                        .font(.headline.weight(.black))
                        .foregroundStyle(Color.highHookSunwash)
                    Text(selectedGoal.reason)
                        .font(.subheadline)
                        .foregroundStyle(Color.highHookDeckText)
                    Text(matchedTrip.price)
                        .font(.caption.weight(.bold))
                        .foregroundStyle(Color.highHookOrange)
                }
                Spacer(minLength: 0)
            }
            .padding(14)
            .background(Color.highHookNavy.opacity(0.62), in: RoundedRectangle(cornerRadius: 12, style: .continuous))
            .overlay {
                RoundedRectangle(cornerRadius: 12, style: .continuous)
                    .stroke(Color.highHookLine.opacity(0.36), lineWidth: 1)
            }
        }
    }
}

private struct HeroPanel: View {
    let onBook: () -> Void

    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            Image("HighHookHeader")
                .resizable()
                .scaledToFit()
                .frame(maxWidth: .infinity)
                .background(Color.highHookNavy)
                .accessibilityLabel("High Hook Charter Fishing header artwork")

            VStack(alignment: .leading, spacing: 14) {
                Text("Duxbury charter log")
                    .font(.caption.weight(.black))
                    .textCase(.uppercase)
                    .foregroundStyle(Color.highHookDeckText)

                Text("Book a Duxbury charter")
                    .font(.system(size: 28, weight: .black, design: .serif))
                    .foregroundStyle(Color.highHookSunwash)
                    .lineLimit(2)
                    .minimumScaleFactor(0.82)

                Text("Bass, tuna, haddock, shark trips and kids sessions from Mattakeesett Court.")
                    .font(.subheadline.weight(.semibold))
                    .foregroundStyle(Color.highHookDeckText)
                    .lineLimit(2)
                    .fixedSize(horizontal: false, vertical: true)

                ViewThatFits(in: .horizontal) {
                    HStack(spacing: 10) {
                        bookingButton
                        askCaptainLink
                    }
                    VStack(alignment: .leading, spacing: 10) {
                        bookingButton
                        askCaptainLink
                    }
                }

                Label("25 Mattakeesett Ct, Duxbury, MA", systemImage: "mappin.and.ellipse")
                    .font(.footnote.weight(.medium))
                    .foregroundStyle(Color.highHookSunwash.opacity(0.9))
                    .lineLimit(2)
                    .fixedSize(horizontal: false, vertical: true)

                ViewThatFits(in: .horizontal) {
                    HStack(spacing: 8) {
                        LogbookBand(title: "Wind", value: "8 kt SW", symbol: "wind")
                        LogbookBand(title: "Tide", value: "Outgoing", symbol: "arrow.down.to.line.compact")
                    }
                    VStack(alignment: .leading, spacing: 8) {
                        LogbookBand(title: "Wind", value: "8 kt SW", symbol: "wind")
                        LogbookBand(title: "Tide", value: "Outgoing", symbol: "arrow.down.to.line.compact")
                    }
                }
            }
            .padding(16)
        }
        .background(
            LinearGradient(
                colors: [Color.highHookMidnight.opacity(0.98), Color.highHookBlue.opacity(0.92)],
                startPoint: .topLeading,
                endPoint: .bottomTrailing
            ),
            in: RoundedRectangle(cornerRadius: 14, style: .continuous)
        )
        .overlay(alignment: .topLeading) {
            Rectangle()
                .fill(Color.highHookOrange)
                .frame(width: 54, height: 4)
                .offset(x: 16, y: 0)
        }
        .overlay {
            RoundedRectangle(cornerRadius: 14, style: .continuous)
                .stroke(Color.highHookLine.opacity(0.42), lineWidth: 1)
        }
        .clipShape(RoundedRectangle(cornerRadius: 14, style: .continuous))
        .shadow(color: Color.highHookNavy.opacity(0.32), radius: 16, x: 0, y: 8)
        .accessibilityElement(children: .combine)
    }

    private var bookingButton: some View {
        Button(action: onBook) {
            Label("Book a charter", systemImage: "arrow.right")
        }
        .buttonStyle(BrandActionButtonStyle(tone: .primary))
    }

    private var askCaptainLink: some View {
        Link(destination: URL(string: "mailto:Charters@FishHighHook.com")!) {
            Label("Ask Captain", systemImage: "envelope")
        }
        .buttonStyle(BrandActionButtonStyle(tone: .secondary))
    }
}

private struct TripChip: View {
    let trip: CharterTrip
    let selected: Bool
    let action: () -> Void

    var body: some View {
        Button(action: action) {
            VStack(alignment: .leading, spacing: 10) {
                Image(systemName: trip.symbol)
                    .font(.title3)
                Text(trip.name)
                    .font(.subheadline.weight(.semibold))
                    .lineLimit(2)
                    .fixedSize(horizontal: false, vertical: true)
                Text(trip.duration)
                    .font(.caption)
                    .foregroundStyle(selected ? Color.highHookDeckText : Color.highHookDeckText)
            }
            .frame(width: 150, alignment: .leading)
            .padding(14)
            .foregroundStyle(selected ? Color.highHookSunwash : Color.highHookInk)
            .background(
                selected ? Color.highHookNavy : Color.highHookBlue.opacity(0.78),
                in: RoundedRectangle(cornerRadius: 10, style: .continuous)
            )
            .overlay {
                RoundedRectangle(cornerRadius: 10, style: .continuous)
                    .stroke(selected ? Color.highHookOrange.opacity(0.65) : Color.highHookLine.opacity(0.28), lineWidth: 1)
            }
            .overlay(alignment: .topLeading) {
                if selected {
                    Rectangle()
                        .fill(Color.highHookOrange)
                        .frame(width: 34, height: 3)
                        .offset(x: 12, y: 0)
                }
            }
        }
        .buttonStyle(.plain)
    }
}

private struct TripSummaryCard: View {
    let trip: CharterTrip
    let onOpen: () -> Void
    let onBook: () -> Void

    var body: some View {
        VStack(alignment: .leading, spacing: 16) {
            HStack(alignment: .top, spacing: 14) {
                Image(systemName: trip.symbol)
                    .font(.title2)
                    .foregroundStyle(Color.highHookTeal)
                    .frame(width: 44, height: 44)
                    .background(Color.highHookSeaGlass.opacity(0.7), in: RoundedRectangle(cornerRadius: 9, style: .continuous))

                VStack(alignment: .leading, spacing: 6) {
                    Text(trip.name)
                        .font(.title3.bold())
                        .foregroundStyle(Color.highHookSunwash)
                    Text(trip.details)
                        .font(.subheadline)
                        .foregroundStyle(Color.highHookDeckText)
                }
            }

            LazyVGrid(columns: [GridItem(.adaptive(minimum: 150), spacing: 12)], spacing: 12) {
                MetricPill(symbol: "clock", title: "Duration", value: trip.duration)
                MetricPill(symbol: "person.3", title: "Capacity", value: trip.capacity)
                MetricPill(symbol: "dollarsign.circle", title: "Rate", value: trip.price)
                MetricPill(symbol: "calendar", title: "Season", value: trip.season)
            }

            HStack {
                Button("Trip details", action: onOpen)
                    .buttonStyle(BrandActionButtonStyle(tone: .secondary))
                Button("Request this trip", action: onBook)
                    .buttonStyle(BrandActionButtonStyle(tone: .primary))
            }
        }
        .padding(16)
        .background(Color.highHookMidnight.opacity(0.82), in: RoundedRectangle(cornerRadius: 12, style: .continuous))
        .overlay {
            RoundedRectangle(cornerRadius: 12, style: .continuous)
                .stroke(Color.highHookLine.opacity(0.65), lineWidth: 1)
        }
        .foregroundStyle(Color.highHookSunwash)
    }
}

private struct TripRateRow: View {
    let trip: CharterTrip

    var body: some View {
        HStack(spacing: 14) {
            Image(systemName: trip.symbol)
                .foregroundStyle(Color.highHookTeal)
                .frame(width: 34, height: 34)
                .background(Color.highHookSeaGlass.opacity(0.7), in: RoundedRectangle(cornerRadius: 7, style: .continuous))
            VStack(alignment: .leading, spacing: 4) {
                Text(trip.name)
                    .font(.headline)
                    .foregroundStyle(Color.highHookSunwash)
                Text("\(trip.duration) · \(trip.capacity)")
                    .font(.caption)
                    .foregroundStyle(Color.highHookDeckText)
            }
            Spacer()
            VStack(alignment: .trailing, spacing: 4) {
                Text(trip.price)
                    .font(.subheadline.weight(.semibold))
                    .foregroundStyle(Color.highHookInk)
                    .multilineTextAlignment(.trailing)
                Text(trip.deposit)
                    .font(.caption)
                    .foregroundStyle(Color.highHookDeckText)
            }
        }
        .contentShape(Rectangle())
        .padding(.vertical, 4)
    }
}
