var QRScanner = {
    scan: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'QRScanner', // mapped to our native Java class
            'scan', // with this action name
            []
        );
    },
    show: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'QRScanner', // mapped to our native Java class
            'show', // with this action name
            []
        );
    },
    cancelScan: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'QRScanner', // mapped to our native Java class
            'cancelScan', // with this action name
            []
        );
    },
    openSettings: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'QRScanner', // mapped to our native Java class
            'openSettings', // with this action name
            []
        );
    },
    pausePreview: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'QRScanner', // mapped to our native Java class
            'pausePreview', // with this action name
            []
        );
    },
    enableLight: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'QRScanner', // mapped to our native Java class
            'enableLight', // with this action name
            []
        );
    },
    disableLight: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'QRScanner', // mapped to our native Java class
            'disableLight', // with this action name
            []
        );
    },
    prepare: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'QRScanner', // mapped to our native Java class
            'prepare', // with this action name
            []
        );
    },
    destroy: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'QRScanner', // mapped to our native Java class
            'destroy', // with this action name
            []
        );
    },
    getStatus: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'QRScanner', // mapped to our native Java class
            'getStatus', // with this action name
            []
        );
    },
    hide: function(successCallback, errorCallback) {
            cordova.exec(
                successCallback, // success callback function
                errorCallback, // error callback function
                'QRScanner', // mapped to our native Java class
                'hide', // with this action name
                []
            );
        },
    destroy: function(successCallback, errorCallback) {
                    cordova.exec(
                        successCallback, // success callback function
                        errorCallback, // error callback function
                        'QRScanner', // mapped to our native Java class
                        'destroy', // with this action name
                        []
                    );
            }

}
module.exports = QRScanner