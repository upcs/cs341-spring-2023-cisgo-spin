var express = require('express');
var router = express.Router();
var { postNewUser } = require("../models/postNewUser.model");

// http://localhost:3000/newuser
router.post('/', function(request, response) {
	// salt rounds denotes the cost factor of the salt function. 
	// More rounds = more secure, but also more processing power. 10 is usually the default.
	const saltRounds = 10;
	bcrypt.genSalt(saltRounds, function(err, salt) {
		if(err)
		{
			res.status(503).send(err);
			return;
		}
		// if salt was successful, generate hash with salt
		bcrypt.hash(request.body.password, salt, function(err, hash) {
			if(err)
			{
				res.status(503).send(err);
				return;
			}
			
			// if hash was successful, store hashed password in db along with salt
			const req = {
				firstname: request.body.firstname,
				lastname: request.body.lastname,
				email: request.body.email,
				password: hash,
				password_salt: salt
			};

			var promise = postNewUser(req);

			promise.then(function(success) {
				res.json(success);
			}, function(error) {
				res.status(503).send(error);
			});	
		});
	});
});

module.exports = router;