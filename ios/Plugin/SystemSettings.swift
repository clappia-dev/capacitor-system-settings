import Foundation

@objc public class SystemSettings: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
    
    @objc public func getNumberFormatInfo() -> [String: String] {
        let formatter = NumberFormatter()
        return [
            "decimalSeparator": formatter.decimalSeparator ?? ".",
            "groupingSeparator": formatter.groupingSeparator ?? ","
        ]
    }
}
