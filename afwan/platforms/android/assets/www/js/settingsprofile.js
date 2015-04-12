
$(document).ready(function(){
	
	if ($("#profiletabs li.active a").attr("href") == "#home"){
			urlstr = "http://ec2-54-149-21-125.us-west-2.compute.amazonaws.com/user/1";
			Slicedresp = {};
			$.get(urlstr, function(data) {
				$.each(data.result, function(idx, obj) {
					$("#"+idx).val(obj);
				});
			});
	}

	
});
