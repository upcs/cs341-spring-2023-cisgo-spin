function submitForm(){
    const form = document.getElementById('formInfo');
    const formDataObj = {};

    formDataObj.name = form.elements['titleEvent'].value;
    formDataObj.name = form.elements['type'].value;
    formDataObj.name = form.elements['loactionSelector'].value;
    //NOTE THAT THIS LAST OBJ. WILL BE IMPLEMENTED BY NATE H.

    const jsonData = JSON.stringify(formDataObj)

    $.post("/opportunities", jsonData, function(data){
        alert("success");
    });
}


