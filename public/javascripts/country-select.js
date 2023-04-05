// file by Nate Hopper, 3/23

countrySelectEvent = function( event ) {
	var selectedText = $(this).find("option:selected").text();

	if(selectedText == "")
	{
		return;
	}

	$('#ddl_state').empty();
	$('#ddl_city').empty();
	
	$('#ddl_state').append('<option value="Placeholder">Select a State</option>');
	$('#ddl_city').append('<option value="Placeholder">Select a City</option>');
	var found = allLocations.filter(function(item) { return item.country === selectedText; });
	
	$(found).each(function() {
		var option = $('<option />');
    	option.attr('value', this.state).text(this.state);

		$('#ddl_state').append(option);
	});

}

$(function() {
    $("#ddl_country").change(countrySelectEvent);
});