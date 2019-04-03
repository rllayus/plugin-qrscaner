package com.mc4.qrscanner;

import android.util.Log;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.apache.cordova.PluginResult.Status;
import org.json.JSONArray;
import org.json.JSONException;

public class QRScanner extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args,
                           CallbackContext callbackContext) throws JSONException {
        boolean success = Boolean.FALSE;
        try {
            if ("doConnect".equals(action)) {
                //accion ejecutada
                PluginResult pluginResult = new PluginResult(
                        PluginResult.Status.OK, "B/FuHXl3ha99gGFM/XSyCTSzrWBGMVMofBx6FcvGcQhTZ4lAEvppCSwP7GVmv6kRiFa89REggMwsXbNoc7cZakIgODvEPpFCGrUreNcsxxvuq8vbO/B2rah45Gl2phvQIMDjJ114+LSxYIWw+QK4CLHOqLlvvVErg3MYCrfaUk2dqZ9ZXGZuwFJ5GZf5PIjH1QrnxQiFSzEeqDLDYanljhPJis1t5PFI8Z1Z8yGtjEL+xb6GHVyecv4dtiAeFsRKs2g2EZ/4zrRSS7i5WQoEafhW4gzAfYYpKlXkUX6jdyoepJMEefsjNN27YrGufq9anKpkeWK274sRfigoFINGvw==|cc44ff5fd40ea772");
                pluginResult.setKeepCallback(true);
                callbackContext.sendPluginResult(pluginResult);
                success = true;
            }
        } catch (Exception e) {
            Log.e("QRScanner", "Exception: " + e.getMessage());
            callbackContext.error(e.getMessage());
        }
        return success;
    }
}

