var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
	res.sendFile('/private/amchartTest.html', {root: '.'});
});

module.exports = router;