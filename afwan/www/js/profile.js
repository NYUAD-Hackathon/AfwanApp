$(document).ready(function() {
	smarttabs('user');
	$(".profile button").bind("click", function(e) {
		smarttabs($(e)[0].currentTarget.name);
	});
});

function smarttabs(name) {
	if (name == "user") {
		urlstr = "http://ec2-54-149-21-125.us-west-2.compute.amazonaws.com/user/1";
		$.get(urlstr, function(data) {
			$.each(data.result, function(idx, obj) {
				console.log(idx)
				$("#" + idx).val(obj);
			});
		});
	} else if (name == "time") {
		window.location.href = 'history.html';
	} else {
		window.location.href = 'map-question.html';
	}
}