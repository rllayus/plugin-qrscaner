var QRScanner = {
    scan: function(userid, otherparam, successCallback, errorCallback) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'QRScanner', // mapped to our native Java class
            'scan', // with this action name
            [{                  // and this array of custom arguments to create our entry
                "userid": userid,
                "otherparam": otherparam
            }]
        );
    },
    show: function(userid, otherparam, successCallback, errorCallback) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'QRScanner', // mapped to our native Java class
            'show', // with this action name
            [{                  // and this array of custom arguments to create our entry
                "userid": userid,
                "otherparam": otherparam
            }]
        );
    }
}
module.exports = QRScanner