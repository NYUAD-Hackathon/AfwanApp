var respondID;

$(document).ready(function() {

    var requsetID=window.localStorage.getItem("questionID")
    $.ajax({
        url: 'http://ec2-54-149-21-125.us-west-2.compute.amazonaws.com/req/ans/' + requsetID,
        type: "GET",
        // data:'{"latitude": 30.0,"userID": 1,"longitude": 123.0,"payoff": 2.0,"minimumRating":2,"content": "'+question+'" }',
        success: function(data) {
            if (data.length == 0)
                return;
            else if (data['list'][0]) {
                var ans = data['list'][0];
                console.log(ans);
                var template = $('#hidden-template').html();
                // console.log($(template).find('#pro_name').html());

                $('#answer-container').append(template);
                $('#answer-container').find('#pro_name').html(ans['username'])
                $('#answer-container').find('#answer-h4').html(ans['content'])
                respondID= ans['id'];
                $('.loader').hide();
                $('.answer').show();
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
                if (ans['latitude'] & ans['longitude']) {
                    map.drawRoute({
                        origin: [24.522807, 54.435447],
                        destination: [ans['longitude'], ans['latitude']],
                        travelMode: 'driving',
                        strokeColor: '#131540',
                        strokeOpacity: 0.6,
                        strokeWeight: 6
                    });
                }
            }
        },
    });

});

function CheckRes(x){
      $.ajax({url:'http://ec2-54-149-21-125.us-west-2.compute.amazonaws.com/res/check/',
      type:"POST",
      data:'{"respondID":'+respondID+', "approved":'+x+'}',
      success: function(){
        if(x == 'false')
          {
          location.href="map-answer.html";}
        else{
            $('.btn-group').hide();
            $('.meet').show();}
        }
      });

}
