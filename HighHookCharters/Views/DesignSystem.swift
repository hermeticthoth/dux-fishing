import SwiftUI

extension Color {
    static let highHookNavy = Color(red: 0.00, green: 0.08, blue: 0.18)
    static let highHookMidnight = Color(red: 0.01, green: 0.13, blue: 0.31)
    static let highHookBlue = Color(red: 0.02, green: 0.25, blue: 0.55)
    static let highHookHarbor = Color(red: 0.03, green: 0.36, blue: 0.68)
    static let highHookInk = Color(red: 1.00, green: 0.86, blue: 0.23)
    static let highHookDeckText = Color(red: 0.96, green: 0.77, blue: 0.25)
    static let highHookTeal = Color(red: 0.07, green: 0.47, blue: 0.78)
    static let highHookSeaGlass = Color(red: 0.07, green: 0.30, blue: 0.58)
    static let highHookOrange = Color(red: 1.00, green: 0.73, blue: 0.10)
    static let highHookChart = Color(red: 0.01, green: 0.10, blue: 0.24)
    static let highHookMist = Color(red: 0.03, green: 0.21, blue: 0.44)
    static let highHookLine = Color(red: 0.98, green: 0.76, blue: 0.20)
    static let highHookSunwash = Color(red: 1.00, green: 0.92, blue: 0.43)
}

struct MarineCard<Content: View>: View {
    let content: Content

    init(@ViewBuilder content: () -> Content) {
        self.content = content()
    }

    var body: some View {
        content
            .padding(18)
            .background(
                LinearGradient(
                    colors: [Color.highHookMidnight.opacity(0.98), Color.highHookBlue.opacity(0.92)],
                    startPoint: .topLeading,
                    endPoint: .bottomTrailing
                ),
                in: RoundedRectangle(cornerRadius: 12, style: .continuous)
            )
            .overlay(alignment: .topLeading) {
                Rectangle()
                    .fill(Color.highHookOrange)
                    .frame(width: 54, height: 4)
                    .offset(x: 18, y: 0)
            }
            .overlay {
                RoundedRectangle(cornerRadius: 12, style: .continuous)
                    .stroke(Color.highHookLine.opacity(0.42), lineWidth: 1)
            }
            .shadow(color: Color.highHookNavy.opacity(0.32), radius: 16, x: 0, y: 8)
    }
}

struct MetricPill: View {
    let symbol: String
    let title: String
    let value: String

    var body: some View {
        HStack(spacing: 10) {
            Image(systemName: symbol)
                .font(.headline)
                .foregroundStyle(Color.highHookOrange)
                .frame(width: 30, height: 30)
                .background(Color.highHookNavy.opacity(0.72), in: RoundedRectangle(cornerRadius: 7, style: .continuous))
            VStack(alignment: .leading, spacing: 2) {
                Text(title)
                    .font(.caption)
                    .foregroundStyle(Color.highHookDeckText)
                Text(value)
                    .font(.subheadline.weight(.semibold))
                    .foregroundStyle(Color.highHookSunwash)
            }
            Spacer(minLength: 0)
        }
    }
}

struct SectionHeader: View {
    let title: String
    let subtitle: String

    var body: some View {
        VStack(alignment: .leading, spacing: 5) {
            Text(title)
                .font(.title2.weight(.black))
                .foregroundStyle(Color.highHookSunwash)
            Text(subtitle)
                .font(.subheadline)
                .foregroundStyle(Color.highHookDeckText)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
    }
}

struct BrandScreenTitle: View {
    let title: String

    var body: some View {
        Text(title)
            .font(.system(.largeTitle, design: .serif).weight(.black))
            .foregroundStyle(Color.highHookSunwash)
            .frame(maxWidth: .infinity, alignment: .leading)
            .padding(.horizontal, 2)
            .shadow(color: Color.highHookNavy.opacity(0.55), radius: 10, x: 0, y: 3)
    }
}

struct HighHookLogoMark: View {
    var height: CGFloat = 64

    var body: some View {
        Image("HighHookLogo")
            .resizable()
            .scaledToFit()
            .frame(height: height)
            .accessibilityLabel("High Hook Fishing Charters logo")
    }
}

struct BrandLogoHeader: View {
    var body: some View {
        HStack(alignment: .center, spacing: 14) {
            HighHookLogoMark(height: 74)
                .shadow(color: Color.highHookNavy.opacity(0.45), radius: 8, x: 0, y: 4)

            VStack(alignment: .leading, spacing: 3) {
                Text("High Hook")
                    .font(.system(.title, design: .serif).weight(.black))
                    .foregroundStyle(Color.highHookSunwash)
                    .lineLimit(1)
                    .minimumScaleFactor(0.82)
                Text("Fishing Charters")
                    .font(.caption.weight(.black))
                    .textCase(.uppercase)
                    .foregroundStyle(Color.highHookDeckText)
                    .lineLimit(1)
            }

            Spacer(minLength: 0)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .accessibilityElement(children: .combine)
        .accessibilityLabel("High Hook Fishing Charters")
    }
}

struct BrandActionButtonStyle: ButtonStyle {
    enum Tone {
        case primary
        case secondary
    }

    var tone: Tone = .primary
    var expands = false

    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .font(.headline.weight(.bold))
            .foregroundStyle(tone == .primary ? Color.highHookSunwash : Color.highHookDeckText)
            .padding(.vertical, 10)
            .padding(.horizontal, 14)
            .frame(maxWidth: expands ? .infinity : nil)
            .background(background.opacity(configuration.isPressed ? 0.72 : 1), in: RoundedRectangle(cornerRadius: 10, style: .continuous))
            .overlay {
                RoundedRectangle(cornerRadius: 10, style: .continuous)
                    .stroke(border.opacity(tone == .primary ? 0.78 : 0.42), lineWidth: 1)
            }
    }

    private var background: Color {
        switch tone {
        case .primary: Color.highHookHarbor
        case .secondary: Color.highHookNavy.opacity(0.74)
        }
    }

    private var border: Color {
        switch tone {
        case .primary: Color.highHookOrange
        case .secondary: Color.highHookLine
        }
    }
}

struct CaptainModeNotice: View {
    let title: String
    let detail: String

    var body: some View {
        HStack(alignment: .top, spacing: 12) {
            Image(systemName: "lock.shield")
                .font(.headline)
                .foregroundStyle(Color.highHookOrange)
                .frame(width: 34, height: 34)
                .background(Color.highHookNavy.opacity(0.72), in: RoundedRectangle(cornerRadius: 8, style: .continuous))

            VStack(alignment: .leading, spacing: 5) {
                Text(title)
                    .font(.headline.weight(.black))
                    .foregroundStyle(Color.highHookSunwash)
                Text(detail)
                    .font(.subheadline)
                    .foregroundStyle(Color.highHookDeckText)
                    .fixedSize(horizontal: false, vertical: true)
            }

            Spacer(minLength: 0)
        }
        .padding(12)
        .background(Color.highHookNavy.opacity(0.52), in: RoundedRectangle(cornerRadius: 10, style: .continuous))
        .overlay {
            RoundedRectangle(cornerRadius: 10, style: .continuous)
                .stroke(Color.highHookLine.opacity(0.26), lineWidth: 1)
        }
    }
}

struct ChartPaperBackground: View {
    var body: some View {
        ZStack {
            LinearGradient(
                colors: [Color.highHookNavy, Color.highHookMidnight, Color.highHookBlue.opacity(0.95)],
                startPoint: .topLeading,
                endPoint: .bottomTrailing
            )

            GeometryReader { proxy in
                Path { path in
                    let spacing: CGFloat = 42
                    var x: CGFloat = -spacing
                    while x < proxy.size.width + spacing {
                        path.move(to: CGPoint(x: x, y: 0))
                        path.addLine(to: CGPoint(x: x + proxy.size.height * 0.22, y: proxy.size.height))
                        x += spacing
                    }

                    var y: CGFloat = 34
                    while y < proxy.size.height {
                        path.move(to: CGPoint(x: 0, y: y))
                        path.addLine(to: CGPoint(x: proxy.size.width, y: y - 20))
                        y += spacing
                    }
                }
                .stroke(Color.highHookLine.opacity(0.12), lineWidth: 0.7)

                Path { path in
                    let center = CGPoint(x: proxy.size.width * 0.82, y: proxy.size.height * 0.18)
                    for radius in stride(from: CGFloat(90), through: CGFloat(310), by: CGFloat(42)) {
                        path.addEllipse(in: CGRect(
                            x: center.x - radius,
                            y: center.y - radius * 0.58,
                            width: radius * 2,
                            height: radius * 1.16
                        ))
                    }
                }
                .stroke(Color.highHookLine.opacity(0.13), lineWidth: 1)
            }
        }
    }
}

struct LogbookBand: View {
    let title: String
    let value: String
    let symbol: String

    var body: some View {
        HStack(spacing: 10) {
            Image(systemName: symbol)
                .font(.callout.weight(.bold))
                .foregroundStyle(Color.highHookOrange)
            VStack(alignment: .leading, spacing: 2) {
                Text(title.uppercased())
                    .font(.caption2.weight(.black))
                    .foregroundStyle(Color.highHookDeckText)
                Text(value)
                    .font(.footnote.weight(.bold))
                    .foregroundStyle(Color.highHookSunwash)
            }
        }
        .padding(.vertical, 9)
        .padding(.horizontal, 12)
        .background(Color.highHookNavy.opacity(0.86), in: RoundedRectangle(cornerRadius: 8, style: .continuous))
        .overlay {
            RoundedRectangle(cornerRadius: 8, style: .continuous)
                .stroke(Color.highHookLine.opacity(0.34), lineWidth: 1)
        }
    }
}
