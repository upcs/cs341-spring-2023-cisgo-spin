// file by Nate Hopper, 3/23

stateSelectEvent = function( event ) {
    var selectedText = $(this).find("option:selected").text();
	var selectedCountry = $("#ddl_country").find("option:selected").text();

	if(selectedText == "" || selectedCountry == "")
	{
		return;
	}

	$('#ddl_city').empty();
	$('#ddl_city').append('<option value="">Select a City</option>');

	var found = allLocations.filter(function(item) { return item.state === selectedText && item.country === selectedCountry; });
	var cities = _.keys(_.countBy(found, function(data) { return data.city; }));
	cities.sort();
	$(cities).each(function() {
		if(this == 'undefined') return;
		var option1 = $('<option />');
    	option1.attr('value', this).text(this);

		$('#ddl_city').append(option1);
	});

}

$(function() {
    $("#ddl_state").change(stateSelectEvent);
});