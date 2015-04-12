var map, ren, ser;
var data = {};
var data2 = {};
var marker;
var infowindow;
var doMark = true ;
var directionsDisplay;

var wayA;
var wayB;

//Fun??o de Inicio

function goma()
{
	
    console.log("are we here??");
	var mapDiv = document.getElementById('map-canvas');

	var mapOptions = {
        zoom: 15, 
        center: new google.maps.LatLng(24.522807,54.435447),
        mapTypeId : google.maps.MapTypeId.ROADMAP
	}

	//Cria o mapa do google, coloca as defini??es do mapa, como tipo de visualiza??o, pode ser ROADMAP, SATELLITE, HYBRID, TERRAIN
	map = new google.maps.Map( mapDiv, mapOptions );

	var myLatlng = new google.maps.LatLng(24.522807,54.435447);
	
	wayA = new google.maps.Marker({
          position: myLatlng,
          map: map
        });

	
	var control = document.createElement('DIV');
    control.style.padding = '1px';
    control.style.border = '1px solid #000';
    control.style.backgroundColor = 'white';
    control.style.cursor = 'pointer';
    control.index = 1;
  
  
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(control);
	
 google.maps.event.addListener(map, "click", function(event) {
        if (!wayA) {
        wayA = new google.maps.Marker({
			
          position: event.latLng,
          map: map
		  icon: 'http://wcdn3.dataknet.com/static/resources/icons/set28/58aac1c.png'
		  
        });
        } else {
        wayB = new google.maps.Marker({
			
          position: event.latLng,
          map: map
		  
        });
          
	//Renderiza a rota, o draggable ? diz se o waypoint ? arrastavel ou n?o
	ren = new google.maps.DirectionsRenderer( {'draggable':true} );
	ren.setMap(map);
	//ren.setPanel(document.getElementById("directionsPanel"));
	ser = new google.maps.DirectionsService();

	//Cria a rota, o DirectionTravelMode pode ser: DRIVING, WALKING, BICYCLING ou TRANSIT
	ser.route({ 'origin': wayA.getPosition(), 'destination':  wayB.getPosition(), 'travelMode': google.maps.DirectionsTravelMode.DRIVING},function(res,sts) {
		if(sts=='OK')ren.setDirections(res);	
	})		
	
        }
 });
}  
	//TESTE
	
		
	

	
	//markers
	

      /*
      var html = "<table>" +
                 "<tr><td>Nome:</td> <td><input type='text' id='name'/> </td> </tr>" +
                 "<tr><td>Endereco:</td> <td><input type='text' id='address'/></td> </tr>" +
                 "<tr><td>Tipo:</td> <td><select id='type'>" +
                 "<option value='oficina' SELECTED>oficina</option>" +
                 "<option value='restaurante'>restaurante</option>" +
                 "</select> </td></tr>" +
                 "<tr><td></td><td><input type='button' value='Salvar' onclick='saveData()'/></td></tr>";
    infowindow = new google.maps.InfoWindow({
     content: html
    });
    */


  
	
//eventos


//Salva os Waypoints no banco de dados

		
function saveData()
{
	
	  
	  var name = escape(document.getElementById("name").value);
      var address = escape(document.getElementById("address").value);
      var type = document.getElementById("type").value;
      var latlng = marker.getPosition();
 
       var url = "phpsqlinfo_addrow.php?name=" + name + "&address=" + address +
                "&type=" + type + "&lat=" + latlng.lat() + "&lng=" + latlng.lng();
      downloadUrl(url, function(data2, responseCode) {
        if (responseText == 200 && data2.length <= 1) {
          infowindow.close();
          document.getElementById("message").innerHTML = "Salvo";
		}
		});		
}
var string = JSON.stringify(data2)
	  function downloadUrl(url, callback) {
	  var request = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
	request.open('POST',url);
	request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	request.send('command=save&marker='+string)
	request.onreadystatechange = function(){ if(request.readyState==4) {
		if(request.responseText.indexOf('bien')+1)alert('Mapa Atualizado !');
		else alert(request.responseText)		
	}}
}
	
		
    
/*
function save_waypoints()
{
	var w=[],wp;
	var rleg = ren.directions.routes[0].legs[0];
	var myLatlng = new google.maps.LatLng(24.4667,54.3667);
	//get the user location and make it as a start
	//alert("Start Latitude: " + rleg.start_location.lat() + "Start long: " + rleg.start_location.lng());
	var marker = new google.maps.Marker({position: myLatlng,map: map,title: 'Afwan'});
	
	data.start = {'lat': 24.4667, 'lng':54.3667}
	data.end = {'lat': rleg.end_location.lat(), 'lng':rleg.end_location.lng()}
	var wp = rleg.via_waypoints	
	for(var i=0;i<wp.length;i++)w[i] = [wp[i].lat(),wp[i].lng()]	
	data.waypoints = w;

	var str = JSON.stringify(data)
	

	var jax = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
	jax.open('POST','process.php');
	jax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	jax.send('command=save&inventoresdegara='+str)
	jax.onreadystatechange = function(){ if(jax.readyState==4) {
		if(jax.responseText.indexOf('bien')+1)alert('Mapa Atualizado !');
		else alert(jax.responseText)
		
		
	}}

	
}
*/

//Geocoding (pesquisar)
    /*
	function marcar(){
  				var endereco = document.getElementById("endereco").value ;
  				//alert(endereco)
  				geocoder = new google.maps.Geocoder();		
  				geocoder.geocode({'address':endereco}, function(results, status){ 
  					if( status = google.maps.GeocoderStatus.OK){
						latlng = results[0].geometry.location;
						markerInicio = new google.maps.Marker({position: latlng,map: map});		
						map.setCenter(latlng); 
					}			
				});
	}
    */
