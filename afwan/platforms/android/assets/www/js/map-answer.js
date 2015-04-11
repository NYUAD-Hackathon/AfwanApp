$(document).ready(function () {
    var map = new GMaps({
        div: '#map-canvas',
        lat: 24.522807,
        lng: 54.435447,
        width: '500px',
        height: '500px',
        zoom: 12,
        zoomControl: true,
        zoomControlOpt: {
            style: 'SMALL',
            position: 'TOP_LEFT'
        },
        panControl: false
    });
	
	map.drawRoute({
	origin: [24.522807, 54.435447],
	destination: [24.540274, 54.421541],
	travelMode: 'driving',
	strokeColor: '#131540',
	strokeOpacity: 0.6,
	strokeWeight: 6
	});
});
