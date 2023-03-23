function submitForm(){
    const form = document.getElementById('formInfo');
    const formDataObj = {};

    for (let i = 0; i < form.elements.length; i++) {
        const field = form.elements[i];
        if (field.type !== 'submit') {
            formDataObj[field.name] = field.value;
        }
    }

    const jsonData = JSON.stringify(formDataObj)

    $.post("/opportunities", jsonData, function(data){
        alert("success");
    });
}


