// Function to change status of selected opp
function postStatus(id, status){
	var returnValue = [];
	if(status == "Deleted")
	{
		if(!(confirm("Are you sure you want to delete this opportunity?")))
		{
			return;
		}
	}
	$.post(`/opportunities/${id}/status?status=${status}`, function(ret, callback){
		returnValue = ret;

		window.location.href = "/admin";
		
	});

	return returnValue;
};