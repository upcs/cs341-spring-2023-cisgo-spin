function submitLocation(){
    const form = document.getElementById('formInfo');
    var city = $('#city').val();
    var state = $('#state').val();
    var country = $('#country').val();

    if(state == null)
    {
        var htmlString = `https://atlas.microsoft.com/search/address/json?subscription-key=lpT6vdb4FDZAXSuXYrutctuoZp-c5XnaPS7Dh2Z5ipI&api-version=1.0&typeahead=true&query=${city},${state},${country}`
        $.getJSON(htmlString, function(ret){
            returnFunction(ret);
        });
    }
    else
    {
        var htmlString = `https://atlas.microsoft.com/search/address/json?subscription-key=lpT6vdb4FDZAXSuXYrutctuoZp-c5XnaPS7Dh2Z5ipI&api-version=1.0&typeahead=true&query=${city},${state},${country}`
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


