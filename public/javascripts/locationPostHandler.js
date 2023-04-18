function submitLocation(){
    const form = document.getElementById('formInfo');
    var city = $('#city').val();
    var state = $('#state').val();
    var country = $('#country').val();

    // if it's not a 2-3 char country code, we don't want it.
    if (3 <= country.length >= 2)
    {
        return;
    }
    // allLocations exists on runtime of the page, is stored as a global var between scripts
    var found = allLocations.filter(function(item) { 
        return item.city === city && 
        item.state === state && 
        item.countryCode === country; 
    });

    // don't add new location if location already exists
    if(found.length != 0)
    {
        return;
    }




    /* 
    *   TODO: convert subscription key to be stored in Azure so that it's not visible in user scripts maybe?
    *   if something like that is possible.
    */
    if(state == null)
    {
        var htmlString = `https://atlas.microsoft.com/search/address/structured/json?subscription-key=lpT6vdb4FDZAXSuXYrutctuoZp-c5XnaPS7Dh2Z5ipI&api-version=1.0&typeahead=true&municipality=${city}&countrySubdivision=${state}&countryCode=${country}`
        $.getJSON(htmlString, function(ret){
            returnFunction(ret);
        });
    }
    else
    {
        var htmlString = `https://atlas.microsoft.com/search/address/structured/json?subscription-key=lpT6vdb4FDZAXSuXYrutctuoZp-c5XnaPS7Dh2Z5ipI&api-version=1.0&typeahead=true&municipality=${city}&countrySubdivision=${state}&countryCode=${country}`
        $.getJSON(htmlString, function(ret){
            returnFunction(ret);
        });
    }
    
}

function returnFunction(ret)
{
    var correctCityName = ret.results[0].address.municipality;
    var correctStateName = ret.results[0].address.countrySubdivisionName;
    var correctCountryCode = ret.results[0].address.countryCode;
    var correctCountryName = ret.results[0].address.country;

    var latitude = ret.results[0].position.lat;
    var longitude = ret.results[0].position.lon;

    obj = {
        city: correctCityName,
        state: correctStateName,
        country: correctCountryName,
        countryCode: correctCountryCode,
        xcoord: latitude,
        ycoord: longitude
    };

    $.post('/locations', obj, {function(ret){

    }});
}


