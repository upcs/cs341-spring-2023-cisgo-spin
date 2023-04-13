function submitForm(){
    const form = document.getElementById('formInfo');

    var city = $("#ddl_city").val();
    var state = $("#ddl_state").val();
    var country = $("#ddl_country").val();

    // select the id of the location matching these things
    var loc = allLocations.filter(function(item) { 
        return item.city === city && 
            item.state === state && 
            item.country === country;
    });

    var locId = loc[0].location_id;
    const formDataObj = {
        name: form.elements['titleEvent'].value,
        type: form.elements['ddl_type'].value,
        location_id: locId
    };

    var oppId;
    $.post("/opportunities", formDataObj, function(data){
        oppId = data.insertId;
    });

    if(oppId == null)
    {
        return;
    }

    // if description is less than 30 characters, the short description is the long description
    var desc = form.elements['description'].value;
    var shortDesc
    if(desc.length <= 30)
        shortDesc = desc;
    else
        shortDesc = desc.substring(0,30) + "...";


    const descriptObj = {
        shortdesc: shortDesc,
        longdesc: desc,
        contact_phone: form.elements['phone'].value,
        contact_email: form.elements['email'].value,
        contact_website: form.elements['website'].value,
        opportunity_id: oppId
    };

    $.post("/descriptions", descriptObj, function(data){
        alert('Success! Opportunity successfully inserted');
    });

}


