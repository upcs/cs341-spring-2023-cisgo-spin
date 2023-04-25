const { response } = require('express');
var express = require('express');
const { getAllLocs } = require('../models/getAllLocs.model');
const { postLoc } = require('../models/postLoc.model');
const { getAllOppsByLocation } = require('../models/getAllOppsByLocation.model');
const { bulkGetLocs } = require('../models/bulkGetLocs.model');

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

router.post('/', function(req, res, next) {
	var promise = postLoc(req);

	promise.then(function(resp){
		res.status(200).send(resp);
	},
   	function(error) {
	   res.status(503).send(error);
	});
});

router.get('/:id', function(req, res){
	return;
});

router.get('/:id/opps', function(req, res, next) {
	var promise = getAllOppsByLocation(req.params.id);

	promise.then(function(resp){
		res.status(200).send(resp);
	}, function(error){
		res.status(503).send(error);
	})
});

router.post('/bulk', function(req, res, next){
	var promise = bulkGetLocs(req.body);

	promise.then(function(resp){
		res.status(200).send(resp);
	}, function(error){
		res.status(503).send(error);
	})
});

module.exports = router;