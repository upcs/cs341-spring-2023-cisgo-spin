// Function to get coordinate points of cities on load
function getLocations(){
	var returnValue = {};
	$.getJSON("/locations", {function(ret){
		for(var i = 0; i < ret.length; i++)
		{
			obj = {
				geometry: {type: 'Point', coordinates: Object.values(ret[i].coords).reverse()},
				title:  Object.values(ret[i].city),
				id:  Object.values(ret[i].location_id)
			};
			returnValue[i] = obj;
		}
	}});

	return returnValue;
};