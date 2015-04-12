function tokenHandler(result){
    // I just used this function to find out the token
    // then i put that token in the sendpush2.php file
}
function successHandler(result) {
    // todo for android
    alert('android success = ' + result);
}
function errorHandler(error){
    // do nothing
    alert('android error = ' + error);
}
function onNotificationAPN (e) {
    // when the iphone receives a push notification
    // send him to the answer page
    location.href = "map-answer.html";
}

function onNotification(e) {
    // todo for android
    alert("notification received"+e.event);

    if (e.event == 'registered') {
        case 'registered':
        if ( e.regid.length > 0 ) {
            // Your GCM push server needs to know the regID before it can push to this device
            // here is where you might want to send it the regID for later use.
            console.log("regID = " + e.regid);
        }
    } else if (e.event == 'message') {
        alert("notification received"+e.payload.message);
        if (!e.foreground) {
            // we were launched because the user touched a notification in the notification tray.
            alert(e.payload.message);
        }
    }
}

document.addEventListener("deviceready", function(){
    pushNotification = window.plugins.pushNotification;

    if ( device.platform == 'android' || device.platform == 'Android' ){
        pushNotification.register(
            successHandler,
            errorHandler,
            {
            "senderID":"947272659748",
            "ecb":"onNotification"
            });
    } else {
        pushNotification.register(
            tokenHandler,
            errorHandler,
            {
                "badge":"true",
                "sound":"true",
                "alert":"true",
                "ecb":"onNotificationAPN"
            });

    }
}, true);
