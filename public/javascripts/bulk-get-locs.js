function bulkGetLocs(obj, callback)
{
	$.post('/locations/bulk', obj, function(ret){
		callback(ret);
	});
}