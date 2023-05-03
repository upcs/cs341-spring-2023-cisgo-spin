function parseLocationOpps(location_id)
{
	getLocationOpps(location_id, function(obj){
		if(obj.length == 1)
		{
			$("#opportunity").text(obj[0].name);
			$("#description").text(obj[0].longdesc);
			$("#contact-phone").text(obj[0].contact_phone);
			$("#contact-email").text(obj[0].contact_email);
			$("#contact-website").text(obj[0].contact_website);
			$("#content").show();
		}
		else
		{
			modal.getPrivate("content").innerHTML = "<h3>There are multiple opportunities here...</h3><p>Please select which you would like to view!</p>";
			let dropDown = document.createElement("select");
			dropDown.name="options";
			dropDown.id="options";
			dropDown.size="4";
			dropDown.class = "dropdown-content";
			
			dropDown.innerHTML = '';
			
			let okButton = document.createElement("input");
			okButton.type = "button";
			okButton.value = "OK";
			okButton.id = "okbutton-modal";
			okButton.addEventListener("click", function(){
				var ddobject = $('#options').find(":selected");
				var value = ddobject[0].value;
				if(value == null)
				{
					return;
				}
				else
				{
					var found = obj.filter(function(item) { return item.opportunity_id == value });
					$("#opportunity").text(found[0].name);
					$("#description").text(found[0].longdesc);
					$("#contact-phone").text(found[0].contact_phone);
					$("#contact-email").text(found[0].contact_email);
					$("#contact-website").text(found[0].contact_website);
					$("#content").show();
				}
				modal.close();
			});

			let cancelButton = document.createElement("input");
			cancelButton.type = "button";
			cancelButton.value = "Cancel";
			cancelButton.addEventListener("click", function() {
				var opt = document.getElementById("options");
				modal.cancel();
			});
			
			modal.getPrivate("content").appendChild(dropDown);
			modal.getPrivate("content").appendChild(okButton);
			modal.getPrivate("content").appendChild(cancelButton);


			var options = document.getElementById("options");
			options.innerHTML = '';
			for(var i=0; i < obj.length; i++)
			{
				let opt = document.createElement("option");
				opt.value = obj[i].opportunity_id;
				opt.text = obj[i].name;
				options.append(opt);
			}

			modal.open();
		}


	});
}