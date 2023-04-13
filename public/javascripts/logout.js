function Logout()
{
	$.ajax({
		url: '/logout',
		type: 'DELETE',
		success: function(result) {
			// Do something with the result
		}
	});
	
}