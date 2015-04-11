/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

var Latitude = 0;
var Longitude = 0;

function onDeviceReady() {
	// onSuccess Callback
	// This method accepts a Position object, which contains the
	// current GPS coordinates
	//
	
	var onSuccess = function(position) {
		Latitude = position.coords.latitude;
		Longitude = position.coords.longitude;
		$("#submitQST").removeAttr('disabled');
		$("#latitutefld").attr('value',Latitude);
		$("#longitudefld").attr('value',Longitude);
		/*
		alert('Latitude: '          + position.coords.latitude          + '\n' +
			  'Longitude: '         + position.coords.longitude         + '\n' +
			  'Altitude: '          + position.coords.altitude          + '\n' +
			  'Accuracy: '          + position.coords.accuracy          + '\n' +
			  'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
			  'Heading: '           + position.coords.heading           + '\n' +
			  'Speed: '             + position.coords.speed             + '\n' +
			  'Timestamp: '         + position.timestamp                + '\n');
		*/
	};
	

	// onError Callback receives a PositionError object
	//
	function onError(error) {
		alert("Please enable location services and wifi to use Afwan. Otherwise, if the problem persists reboot the phone please.");
		navigator.app.exitApp();
	}
	navigator.geolocation.getCurrentPosition(onSuccess, onError,{timeout:5000, maximumAge: 3000, enableHighAccuracy: true});
}

document.addEventListener("deviceready", onDeviceReady, false);

$( document ).ready(function() {
		$("#submitQST").attr('disabled','disabled');
		
		$( "#questionmainform" ).submit(function( event ) {
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
				 BootstrapDialog.alert('Good job');
			});
			mypost.fail(function() {
				BootstrapDialog.alert('I want banana!');
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



