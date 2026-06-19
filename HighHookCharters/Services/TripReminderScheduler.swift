import Foundation
import UserNotifications

enum TripReminderScheduler {
    static func sync(
        kind: TripReminderPreference.Kind,
        isEnabled: Bool,
        trip: CharterTrip,
        inquiry: InquiryRecord?
    ) async {
        let identifier = notificationIdentifier(tripId: trip.id, kind: kind)
        let center = UNUserNotificationCenter.current()

        if !isEnabled {
            center.removePendingNotificationRequests(withIdentifiers: [identifier])
            return
        }

        guard let inquiry else {
            return
        }

        do {
            let granted = try await center.requestAuthorization(options: [.alert, .sound, .badge])
            guard granted else { return }

            center.removePendingNotificationRequests(withIdentifiers: [identifier])
            let request = UNNotificationRequest(
                identifier: identifier,
                content: notificationContent(kind: kind, trip: trip),
                trigger: notificationTrigger(kind: kind, preferredDate: inquiry.preferredDate)
            )
            try await center.add(request)
        } catch {
            return
        }
    }

    static func notificationIdentifier(tripId: String, kind: TripReminderPreference.Kind) -> String {
        "highHook.reminder.\(tripId).\(kind.rawValue)"
    }

    static func cancel(reminders: [TripReminderPreference]) {
        let identifiers = reminders.map {
            notificationIdentifier(tripId: $0.tripId, kind: $0.kind)
        }
        UNUserNotificationCenter.current().removePendingNotificationRequests(withIdentifiers: identifiers)
    }

    private static func notificationContent(
        kind: TripReminderPreference.Kind,
        trip: CharterTrip
    ) -> UNMutableNotificationContent {
        let content = UNMutableNotificationContent()
        content.title = kind.notificationTitle
        content.body = "\(trip.name): \(kind.notificationBody)"
        content.sound = .default
        content.categoryIdentifier = "HIGH_HOOK_TRIP_REMINDER"
        return content
    }

    private static func notificationTrigger(
        kind: TripReminderPreference.Kind,
        preferredDate: Date
    ) -> UNNotificationTrigger {
        let date = triggerDate(kind: kind, preferredDate: preferredDate)
        let components = Calendar.current.dateComponents([.year, .month, .day, .hour, .minute], from: date)
        return UNCalendarNotificationTrigger(dateMatching: components, repeats: false)
    }

    private static func triggerDate(
        kind: TripReminderPreference.Kind,
        preferredDate: Date
    ) -> Date {
        let calendar = Calendar.current
        var components = calendar.dateComponents([.year, .month, .day], from: preferredDate)

        switch kind {
        case .nightBefore:
            components.day = (components.day ?? 1) - 1
            components.hour = 19
        case .dockArrival:
            components.hour = 6
        case .prepChecklist:
            components.day = (components.day ?? 1) - 1
            components.hour = 10
        case .postTripPhotos:
            components.hour = 16
        }

        components.minute = 0
        let scheduled = calendar.date(from: components) ?? preferredDate
        if scheduled <= Date() {
            return Date().addingTimeInterval(5 * 60)
        }
        return scheduled
    }
}
