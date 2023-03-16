var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
	res.sendFile('/public/adminPage.html', {root: '.'});
});

module.exports = router;