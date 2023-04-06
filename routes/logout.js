var express = require('express');
var router = express.Router();
const {getUser} = require('../models/getUser.model');
const bcrypt = require('bcrypt');

// http://localhost:3000/logout
router.delete('/', function(request, response) {
	if(request.session)
	{
		request.session.destroy(err => {
			if(err) {
				response.status(400).send("Unable to logout! Err: " + err);
			} else {
				//request.method = "GET";
				//response.redirect(303, "/");
				response.status(200).send("Logout success");
			}
		});
	}
	else
	{
		response.status(400).send("You're not currently logged in!");
	}
});

module.exports = router;