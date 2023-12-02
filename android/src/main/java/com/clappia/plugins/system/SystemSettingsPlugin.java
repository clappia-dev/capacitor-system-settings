package com.clappia.plugins.system;

import android.util.Log;

public class SystemSettingsPlugin {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
