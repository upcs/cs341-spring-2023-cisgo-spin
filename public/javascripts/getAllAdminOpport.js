$( document ).ready(function() {
    alert("Works");

    var returnData = {};

	$.get("/admin-data", {function(ret){
		for(var i = 0; i < ret.length; i++)
		{
			obj = {
                date: Object.values(ret[i].date),
                name: Object.values(ret[i].name)
			};
			returnData[i] = obj;
		}
	}});

	return returnData;

});