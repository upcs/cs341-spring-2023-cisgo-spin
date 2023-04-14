var express = require('express');
var router = express.Router();
const {getUser} = require('../models/getUser.model');
const bcrypt = require('bcrypt');

// http://localhost:3000/auth
router.post('/', function(request, response) {
	// Capture the input fields
	let username = request.body.username;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (username && password) {
		let promise = getUser(request);
		
		promise.then(function(results){
			if (results.length > 0) {
				var hashPass = results[0].password;

				// Authenticate the user
				if(!bcrypt.compareSync(password, hashPass)){
					// incorrect password, end response
				} else {
					// correct password, continue
					request.session.loggedin = true;
					request.session.username = username;
				
					//response.status(200).send("Now logged in with user: " + username);
					response.redirect("/admin");
					// return success response
				}
			} else {
				// return "Incorrect username or password!" 
			}			
			response.end();
		}, function(error){
			response.status(503).send(error);
			response.end();
		});	
	}
});

module.exports = router;