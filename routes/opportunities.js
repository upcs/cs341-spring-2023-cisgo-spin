/* 
	File written entirely by Nate H - don't be scared to ask questions, this wasn't autogenerated!

	As of Mar 2, 2023, though we plan to change up the behavior a little bit, 
	the file currently defines the endpoint for /opportunities,
	specifically the get & post request behavior.
*/

const { response } = require('express');
var express = require('express');
const { getAllLocs } = require('../models/getAllLocs.model');
const { getAllOpps } = require('../models/getAllOpps.model');
const { postOpp } = require('../models/postOpp.model');

var router = express.Router();

router.get('/', function(req, res, next) {
	var promise = getAllOpps();
	promise.then(function(opps) {	
			res.json(opps);
		},
		function(error) {
			res.status(503).send(error);
		}
	);
});

router.post("/", function(req, res, next){
	var promise = postOpp();
	promise.then(function(opps){
		console.log("This is actually sending")
		res.json(opps);
	},
   	function(error) {
	   res.status(503).send(error);
	});
});

module.exports = router;