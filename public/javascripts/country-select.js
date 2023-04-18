// file by Nate Hopper, 3/23

countrySelectEvent = function( event ) {
	var selectedText = $(this).find("option:selected").text();

	if(selectedText == "")
	{
		return;
	}

	$('#ddl_state').empty();
	$('#ddl_city').empty();
	
	$('#ddl_state').append('<option value="">Select a State</option>');
	$('#ddl_city').append('<option value="">Select a City</option>');
	var found = allLocations.filter(function(item) { return item.country === selectedText; });
	
	// get only the keys of the states (so that we're not getting overlapping "oregon")
	var states = _.keys(_.countBy(found, function(data) { return data.state; }));
	$(states).each(function() {
		var option = $('<option />');
    	option.attr('value', this).text(this);

		$('#ddl_state').append(option);
	});

}

$(function() {
    $("#ddl_country").change(countrySelectEvent);
});