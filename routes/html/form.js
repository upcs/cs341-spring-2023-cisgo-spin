var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
	if(req.session.perms === 0)
	{
		res.sendFile('/private/form.html', {root: '.'});
	}
	else
	{
		res.status(403).send("Please login at /login!");
	}
});


module.exports = router;