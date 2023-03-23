/**
 * admin-data.js
 * This file will use getAllOpps.model.js
 * and turn them into a json object to populate the admin page
 * Created By: Kevin Nguyen
 * Version 1.0.1
 */
var express = require('express');
var router = express.Router();
const {getAllOpps} = require('../models/getAllOpps.model');
const {getOppsbyID} = require('../models/getOppWithID.model')

//Router to get all opportunities
router.get('/', function(req, res, next){
    var promise = getAllOpps();
    promise.then(function(opps){
        res.json(opps);
    }, 
    function(err){
        res.status(404).send(err);
    });
});

//router to get an opportunity using an ID
router.get('/id',function(req, res, next){
    var promise = getOppsbyID(req.query.id);
    promise.then(function(opportunity){
        res.json(opportunity);
    },function(err){
        res.status(404).send(err);
    })
});

module.exports = router;