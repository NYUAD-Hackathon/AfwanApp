function tokenHandler(result){
    // I just used this function to find out the token
    // then i put that token in the sendpush2.php file
}
function successHandler(result) {
    // todo for android
    // alert('android result = ' + result);
}
function errorHandler(){
    // do nothing
}
function onNotificationAPN (e) {
    // when the iphone receives a push notification
    // send him to the answer page
    location.href = "map-answer.html";
}

function onNotification(e) {
    // todo for android
    //alert("notification received"+e.event);
    //if (e.event == 'message') {
    //    if (!e.foreground) {
    //        // we were launched because the user touched a notification in the notification tray.
    //        alert(e.payload.message);
    //    }
    //}
}

document.addEventListener("deviceready", function(){
    pushNotification = window.plugins.pushNotification;

    if ( device.platform == 'android' || device.platform == 'Android' ){
        pushNotification.register(
            successHandler,
            errorHandler,
            {
            "senderID":"replace_with_sender_id",
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
