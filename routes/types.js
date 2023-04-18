const { response } = require('express');
var express = require('express');
const { getAllTypes } = require('../models/getAllTypes.model');

var router = express.Router();

router.get('/', function(req, res, next) {
	var promise = getAllTypes();
	// var promise2 = getAllLocs();
	promise.then(function(locs) {
			res.json(locs);
		},
		function(error) {
			res.status(503).send(error);
		}
	);
});

module.exports = router;