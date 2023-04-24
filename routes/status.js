const { response } = require('express');
var express = require('express');
const { getAllStatuses } = require('../models/getAllStatuses.model');

var router = express.Router();

router.get('/', function(req, res, next) {
	var promise = getAllStatuses();
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