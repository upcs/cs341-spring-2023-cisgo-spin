/**
 * admin-data.js
 * This file will use getAllOpps.model.js
 * and turn them into a json object to populate the admin page
 * Created By: Kevin Nguyen
 * Version 1.0.0
 */
var express = require('express');
var router = express.Router();
const {getAllOpps} = require('../models/getAllOpps.model');

router.get('/', function(req, res, next){
    var promise = getAllOpps();
    var promise2 = getOppID();
    promise.then(function(opps){
        res.json(opps);
    }, 
    function(err){
        res.status(404).send(err);
    });
});