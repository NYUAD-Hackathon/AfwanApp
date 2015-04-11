function CheckRes(x){
          $.ajax({url:'http://ec2-54-149-21-125.us-west-2.compute.amazonaws.com/res/check/',
          type:"POST",
          
          data:'{"respondID":4, "approved":'+x+'}',
          success: function(){location.href="map.html";},
          });
}    