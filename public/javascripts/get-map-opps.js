function getLocationOpps(location_id, callback)
{
	$.getJSON(`/locations/${location_id}/opps`, function(ret){
		callback(ret);
	});
}