// file by Nate Hopper, 3/23

countrySelectEvent = function( event ) {
    var selectedText = $(this).find("option:selected").text();

	$('#ddl_state').empty();
	$('#ddl_city').empty();
	
	var found = allLocations.filter(function(item) { return item.country === selectedText; });
	
	$(found).each(function() {
		var option = $('<option />');
    	option.attr('value', this.state).text(this.state);

		$('#ddl_state').append(option);

		var option2 = $('<option />');
    	option2.attr('value', this.city).text(this.city);

		$('#ddl_city').append(option2);
	});

}

$(function() {
    $("#ddl_country").change(countrySelectEvent);
});