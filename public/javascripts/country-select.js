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
	states.sort();
	$(states).each(function() {
		if(this == 'undefined') return;
		var option = $('<option />');
    	option.attr('value', this).text(this);

		$('#ddl_state').append(option);
	});

	// if there are no 'states' associated with the country, there might still be cities. 
	// So fill out the cities in the same way that state-select.js does.
	if(states[0] == 'undefined')
	{	
		var cities = _.keys(_.countBy(found, function(data) { return data.city; }));
		cities.sort();
		$(cities).each(function() {
			if(this == 'undefined') return;
			var option1 = $('<option />');
			option1.attr('value', this).text(this);

			$('#ddl_city').append(option1);
		});
	}

}

$(function() {
    $("#ddl_country").change(countrySelectEvent);
});