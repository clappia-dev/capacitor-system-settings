package com.clappia.plugins.system;

import android.provider.Settings;
import android.util.Log;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "SystemSettings")
public class SystemSettingsPlugin extends Plugin {

    private static final String TAG = "SystemSettings";
    private SystemSettings implementation = new SystemSettings();

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }

    @PluginMethod
    public void getDeveloperOptions(PluginCall call) {
        try {
            String developerOptionsEnabled = Settings.Global.getString(
                getContext().getContentResolver(),
                Settings.Global.DEVELOPMENT_SETTINGS_ENABLED
            );

            JSObject responsePayload = new JSObject();
            responsePayload.put("developerOptionsEnabled", "1".equals(developerOptionsEnabled));
            call.resolve(responsePayload);
        } catch (Exception e) {
            Log.e(TAG, "Dev options Error while fetching developer options" + e.getMessage());
            call.reject("INTERNAL_ERROR");
        }
    }
}
