var lat;
var lon;

function onSuccess(position) {
    console.log('successfully retrieved position');
    console.log('got coords, lat:' + position.coords.latitude + 'long' + position.coords.longitude);
    /*
    var element = document.getElementById('geolocation');
    element.innerHTML = 'Latitude: '           + position.coords.latitude + '<br />' + 'Longitude: ' + position.coords.longitude;
    */
                        
    var myLatlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
    var mapOptions = {zoom: 4,center: myLatlng}
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var marker = new google.maps.Marker({position: myLatlng,map: map,title: 'Afwan'});
}
// onError Callback receives a PositionError object
//
function onError(error) {
    alert('Could not get your location. Please enable location and try again later.');
}

function initialize() {
    console.log('reached initialize function');
    navigator.geolocation.getCurrentPosition(onSuccess, onError,{timeout:5000, maximumAge: 3000, enableHighAccuracy: true});
}

google.maps.event.addDomListener(window, 'load', initialize);
