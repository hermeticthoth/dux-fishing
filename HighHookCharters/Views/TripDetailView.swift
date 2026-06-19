import SwiftUI

struct TripDetailView: View {
    let trip: CharterTrip
    let onBook: () -> Void
    @Environment(\.dismiss) private var dismiss

    var body: some View {
        List {
            Section {
                VStack(alignment: .leading, spacing: 14) {
                    Image(systemName: trip.symbol)
                        .font(.largeTitle)
                        .foregroundStyle(Color.highHookOrange)
                    Text(trip.name)
                        .font(.largeTitle.bold())
                    Text(trip.details)
                        .foregroundStyle(Color.highHookDeckText)
                    Button("Request this trip", action: onBook)
                        .buttonStyle(BrandActionButtonStyle(tone: .primary))
                }
                .padding(.vertical, 8)
                .foregroundStyle(Color.highHookSunwash)
                .listRowBackground(Color.highHookMidnight.opacity(0.9))
            }

            Section("Trip facts") {
                LabeledContent("Duration", value: trip.duration)
                LabeledContent("Season", value: trip.season)
                LabeledContent("Target", value: trip.target)
                LabeledContent("Capacity", value: trip.capacity)
                LabeledContent("Rate", value: trip.price)
                LabeledContent("Deposit", value: trip.deposit)
            }

            Section("Bring this") {
                ForEach(trip.prep, id: \.self) { item in
                    Label(item, systemImage: "checkmark.circle")
                }
            }
        }
        .scrollContentBackground(.hidden)
        .background(ChartPaperBackground().ignoresSafeArea())
        .foregroundStyle(Color.highHookSunwash)
        .toolbarBackground(Color.highHookNavy, for: .navigationBar)
        .toolbarColorScheme(.dark, for: .navigationBar)
        .navigationTitle("Trip Details")
        .navigationBarTitleDisplayMode(.inline)
        .toolbar {
            ToolbarItem(placement: .cancellationAction) {
                Button("Done") { dismiss() }
            }
        }
    }
}
