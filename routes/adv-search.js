var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
	res.sendFile('/public/advSearch.html', {root: '.'});
});

module.exports = router;