
// Function to get coordinate points of cities on load
function getOpportunities(){
	var returnValue = [];
	$.get("/opportunities", {function(ret){
		returnValue = ret;
	}});

	return returnValue;
};