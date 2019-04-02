package com.mc4.qrscanner;

import android.util.Log;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.apache.cordova.PluginResult.Status;

public class QRScanner extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args,
                           CallbackContext callbackContext) throws JSONException {
        boolean success = Boolean.FALSE;
        try {
            if ("doConnect".equals(action)) {
                //accion ejecutada
                PluginResult pluginResult = new PluginResult(
                        PluginResult.Status.OK, "Plugin executed");
                pluginResult.setKeepCallback(true);
                callbackContext.sendPluginResult(pluginResult);
                success = true;
            }catch(Exception e){
                Log.e("QRScanner", "Exception: " + e.getMessage());
                callbackContext.error(e.getMessage());
            }
            return success;
        }
    }

}