var express = require('express');

var router = express.Router();

router.get('/', function(req, res, next) {
	if(req.session.loggedin)
	{
		let obj = {
			loggedin: true,
			username: req.session.username
		}
		res.json(obj);
	}
	else
	{
		let obj = {
			loggedin: false
		}
		res.json(obj);
	}
});

module.exports = router;