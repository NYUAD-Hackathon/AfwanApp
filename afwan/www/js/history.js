$(document).ready(function() {
	smarttabs('time');
	$(".profile button").bind("click", function(e) {
		smarttabs($(e)[0].currentTarget.name);
	});
});

function smarttabs(name) {
	if (name == "user") {
		window.location.href = 'settings.html';
	} else if (name == "time") {
		urlstr = "http://ec2-54-149-21-125.us-west-2.compute.amazonaws.com/user/req/1/";
		Slicedresp = {};
		$.get(urlstr, function(data) {
			i = 0;
			$.each(data.list, function(key, val) {
				var temparray = {};
				$.each(val, function(name, value) {file:///C:/Users/TOSH/Documents/GitHub/AfwanApp/afwan/www/history.html#question2
					if (name == "payoff" || name == "username" || name == "created_at" || name == "content") {
						temparray[name] = value;
					}
				});
				// output = '<li><a href="#question' + i + '" data-transition="slide"> Asked on' + temparray['created_at'] + ': </br>' + temparray['content'] + '<span class="ui-li-count">' + temparray['payoff'] + '</span></a></li>';
				var output = '<div id="user">\
	        	<div id="pro_details">\
	                <div id="pro_name">' + temparray['content'] + '</div>\
	                <div id="pro_time">' + temparray['created_at'] + '</div>\
	                <div id="pro_usd">' + temparray['payoff'] + '</div>\
	            </div>\
	        </div>\
	        <div class="clear"></div>\
	        <br>'
				$('#listview').append(output);
				i++;
			});
		});
	} else {
		window.location.href = 'map-question.html';
	}
}