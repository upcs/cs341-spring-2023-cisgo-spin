/**
 * auth.js
 * This file will use getUser.model.js
 * and check to see if the user's password is correct
 * Created By: Nate H
 * Version 1.0.0
 */

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

					// set request perms to be the user's perms in the db. int 0 perms mean superuser
					request.session.perms = results[0].permissions;
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