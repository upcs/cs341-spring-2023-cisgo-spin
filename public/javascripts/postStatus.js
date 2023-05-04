// Function to change status of selected opp
function postStatus(id, status){
	var returnValue = [];
	$.post(`/opportunities/${id}/status?status=${status}`, function(ret, callback){
		returnValue = ret;
		
	});

	return returnValue;
};