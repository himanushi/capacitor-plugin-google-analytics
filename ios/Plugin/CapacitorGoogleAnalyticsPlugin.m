#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>
#import <GoogleAnalytics/GAI.h>
#import <GoogleAnalytics/GAIDictionaryBuilder.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(CapacitorGoogleAnalyticsPlugin, "CapacitorGoogleAnalytics",
           CAP_PLUGIN_METHOD(echo, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(create, CAPPluginReturnPromise);
)
