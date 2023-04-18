function parseLocationOpps(location_id)
{
	getLocationOpps(location_id, function(obj){
		if(obj.length == 1)
		{
			$("#opportunity").text(obj[0].name);
			$("#description").text(obj[0].longdesc);
			$("#contact-phone").text(obj[0].contact_phone);
			$("#contact-email").text(obj[0].contact_email);
			$("#contact-website").text(obj[0].contact_website);
			$("#content").show();
		}
		else
		{
			// open menu to select between them before showing. can use something similar to the delete menu in admin page
		}
	});
}
