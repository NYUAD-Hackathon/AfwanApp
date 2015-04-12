
$(document).ready(function(){
	
	$( "#profiletabs li a" ).bind( "click", function() {
		Smarttabs();
	});
	urlstr = "http://ec2-54-149-21-125.us-west-2.compute.amazonaws.com/user/1";
			Slicedresp = {};
			$.get(urlstr, function(data) {
				$.each(data.result, function(idx, obj) {
					$("#"+idx).val(obj);
				});
	});	
});

function Smarttabs(){
	if ($("#profiletabs li.active a").attr("href") == "#profile"){
			urlstr = "http://ec2-54-149-21-125.us-west-2.compute.amazonaws.com/user/1";
			Slicedresp = {};
			$.get(urlstr, function(data) {
				$.each(data.result, function(idx, obj) {
					$("#"+idx).val(obj);
				});
			});
	}else if($("#profiletabs li.active a").attr("href") == "#home"){
			urlstr = "http://ec2-54-149-21-125.us-west-2.compute.amazonaws.com/user/req/1/";
			Slicedresp = {};
			$.get(urlstr, function(data) {
				i = 0;
                $.each(data.list, function(key, val) {
					var temparray = {};
					$.each(val, function(name, value){
						if (name == "payoff" || name=="username" || name=="created_at" || name=="content"){
							temparray[name] = value;
						}
					});
					output = '<li><a href="#question'+i+'" data-transition="slide"> Asked on'+ temparray['created_at']+': </br>'+temparray['content']+'<span class="ui-li-count">'+temparray['payoff']+'</span></a></li>';
					$('#listview').append(output).listview('refresh');
					i++;
                });
			});
	}
}
