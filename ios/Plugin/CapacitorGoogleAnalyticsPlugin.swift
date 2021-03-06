import Foundation
import Capacitor
import GoogleAnalytics

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */

let resultKey = "result"

@objc(CapacitorGoogleAnalyticsPlugin)
public class CapacitorGoogleAnalyticsPlugin: CAPPlugin {
    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve(["value": value])
    }
}
