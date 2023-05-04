function submitForm(){
    const form = document.getElementById('formInfo');

    var city = $("#ddl_city").val();

    if(city == "") city = 'undefined';

    var state = $("#ddl_state").val();

    if(state == "") state = 'undefined';

    var country = $("#ddl_country").val();

    // select the id of the location matching these things
    var loc = allLocations.filter(function(item) { 
        return item.city === city && 
            item.state === state && 
            item.country === country;
    });

    /* 
    * TODO: This is a placeholder. We might want to add a version of every
    * country with no city + state so that we don't crash when someone decides
    * not to select a Country with no city+state
    */
    if(loc.length == 0)
    {
        loc = allLocations.filter(function(item) { 
            return item.state === state && 
                item.country === country;
            });
    }

    // if description is less than 30 characters, the short description is the long description
    var desc = form.elements['description'].value;
    var shortDesc;
    if(desc.length <= 30)
        shortDesc = desc;
    else
        shortDesc = desc.substring(0,30) + "...";

    const descriptObj = {
        shortdesc: shortDesc,
        longdesc: desc,
        contact_phone: form.elements['phoneEvent'].value,
        contact_email: form.elements['emailEvent'].value,
        contact_website: form.elements['websiteEvent'].value,
        contact_name: form.elements['contactEvent'].value
    };


    var descId;
    $.post("/descriptions", descriptObj, function(data){
        descId = data.insertId;

        if(descId == null)
        {
            return;
        }


        var locId = loc[0].location_id;
        const formDataObj = {
            name: form.elements['titleEvent'].value,
            type: form.elements['ddl_type'].value,
            startdate: startDate,
            enddate: endDate,
            status: form.elements['ddl_status'].value,
            description_id: descId,
            location_id: locId
        };

        $.post("/opportunities", formDataObj, function(data){
            alert("Success! Opportunity with name " + formDataObj.name + " was successfully inserted!");

            window.location.href = "/admin";
        });
    });

    
}


