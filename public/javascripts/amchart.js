// Function to get coordinate points of cities on load
function getAllOpportunityPoints(){
	$.get("/opportunities", {function(ret){
		const returnValue = ret;
	}});

	return returnValue;
}