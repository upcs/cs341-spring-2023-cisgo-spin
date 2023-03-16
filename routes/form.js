var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
	res.sendFile('/public/form.html', {root: '.'});
});

module.exports = router;