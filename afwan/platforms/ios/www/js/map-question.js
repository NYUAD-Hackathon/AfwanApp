var Latitude = 0;
var Longitude = 0;

function onSuccess(position) {
    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;
    console.log('successfully retrieved position with lat:' + Latitude + 'and long' + Longitude);
    $("#submitQST").removeAttr('disabled');
    $("#latitutefld").attr('value',Latitude);
    $("#longitudefld").attr('value',Longitude);

    /*
    var element = document.getElementById('geolocation');
    element.innerHTML = 'Latitude: '           + position.coords.latitude + '<br />' + 'Longitude: ' + position.coords.longitude;
    */
                        
    var myLatlng = new google.maps.LatLng(Latitude,Longitude);
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
    navigator.geolocation.getCurrentPosition(onSuccess, onError,{timeout:10000, maximumAge: 3000, enableHighAccuracy: true});
}

google.maps.event.addDomListener(window, 'load', initialize);

$( document ).ready(function() {
		$("#submitQST").attr('disabled','disabled');
		
		$( "#questionmainform" ).submit(function( event ) {
            console.log('main form was submitted!');
		    urlstr = "http://ec2-54-149-21-125.us-west-2.compute.amazonaws.com/req/";
			var jsonData = '{"latitude":'+Latitude+', "longitude" :'+Longitude+', "payoff" : 1.5, "userID" :1 , "minimumRating" : 2, "content" : "' + $("#questiontxt").val() + '"}';
			/*
			var datatosend = [];
			datatosend['latitude'] = Latitude;
			datatosend['longitude'] = Longitude;
			datatosend['payoff'] = 1.5;
			datatosend['userid'] = 1;
			datatosend['minimumRating'] = 2;
			datatosend['content'] = $("#questiontxt").val();
			*/
			//var frm = $(this);
			//var postdata = JSON.stringify(frm.serializeArray());
			var postdata = $.parseJSON(jsonData);
			var mypost = $.post(urlstr, jsonData).done( function(){
                 console.log('post was successful!');
			});
			mypost.fail(function() {
                 console.log('post failed!');
			  });
		    event.preventDefault();
		});
		
		$("#slider").slider({
				  animate: true,
				  value:1,
				  min: 0,
				  max: 20,
				  step: 1,
				  slide: function(event, ui) {
					  update(1,ui.value); //changed
				  }
		});

		//Added, set initial value.
		$("#amount").val(0);
		$("#amount-label").text(0);
		update();

			  

		//changed. now with parameter
		function update(slider,val) {
			//changed. Now, directly take value from ui.value. if not set (initial, will use current value.)
			var $amount = slider == 1?val:0;

			 $( "#amount" ).val($amount);
			 $( "#amount-label" ).text($amount);
			
			 $('#slider a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+$amount+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
		}

});
