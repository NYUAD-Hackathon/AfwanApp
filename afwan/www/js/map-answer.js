$(document).ready(function() {
    var queries = {};
    $.each(document.location.search.substr(1).split('&'), function(c, q) {
        var i = q.split('=');
        queries[i[0].toString()] = i[1].toString();
    });
    $.ajax({
        url: 'http://127.0.0.1:8000/req/ans/' + queries['reqid'],
        type: "GET",
        // data:'{"latitude": 30.0,"userID": 1,"longitude": 123.0,"payoff": 2.0,"minimumRating":2,"content": "'+question+'" }',
        success: function(data) {
            if (data.length == 0)
                return;
            else
                console.log(data['list'][0].content)
        },
    });
    var map = new GMaps({
        div: '#map-canvas',
        lat: 24.522807,
        lng: 54.435447,
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

function CheckRes(x) {
    $.ajax({
        url: 'http://ec2-54-149-21-125.us-west-2.compute.amazonaws.com/res/check/',
        type: "POST",

        data: '{"respondID":4, "approved":' + x + '}',
        success: function() {
            location.href = "map.html";
        },
    });
}
