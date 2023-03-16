const { response } = require('express');
var express = require('express');
const { getAllLocs } = require('../models/getAllLocs.model');
const { getAllOpps } = require('../models/getAllOpps.model');

var router = express.Router();

router.get('/', function(req, res, next) {
	var promise = getAllLocs();
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