function sessionCheck() {
	$.getJSON("/session", function(ret){
		if(ret.loggedin)
		{
			$("#btn-login").hide();
			$("#login-text").show();
			$("#login-text").css("position", "relative");
			$("#login-text").text("Logged in with user: " + ret.username);
		}
	});
}
