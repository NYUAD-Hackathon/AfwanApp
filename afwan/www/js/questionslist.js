$( document ).ready(function() {  
			urlstr = "http://ec2-54-149-21-125.us-west-2.compute.amazonaws.com/unsolved/list/";
			Slicedresp = {};
			$.get(urlstr, function(data) {
				i = 0;
                $.each(data.list, function(key, val) {
					var temparray = {};
					$.each(val, function(name, value){
						if (name == "minimumRate" || name=="username" || name=="created_at" || name=="content"){
							temparray[name] = value;
						}
					});
					output = '<li><a href="#question'+i+'" data-transition="slide">'+temparray['username']+' asked on'+ temparray['created_at']+': </br>'+temparray['content']+'<span class="ui-li-count">'+temparray['minimumRate']+'</span></a></li>';
					$('#listview').append(output).listview('refresh');
					i++;
                });
			});
});
