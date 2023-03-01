const { response } = require('express');
var express = require('express');
const { dbquery } = require('./dbms_promise');
var router = express.Router();

router.get('/', function(req, res, next) {
	var promise = dbquery("SELECT * FROM opportunity");
	var promise2 = dbquery("SELECT * FROM location");
	promise.then(function(opps) {
			promise2.then(function(locats){
					var returnObj;
					for(var item in opps)
					{
						locatItem = locats[opps[item].location_id];
						opps[item].geometry = { type: 'Point', coordinates: Object.values(locatItem.coords).reverse()};
						Object.defineProperty(opps[item], 'id', Object.getOwnPropertyDescriptor(opps[item], 'name'));
						delete opps[item].opportunity_id;
						Object.defineProperty(opps[item], 'title', Object.getOwnPropertyDescriptor(opps[item], 'name'));
						delete opps[item].name;
						Object.defineProperty(opps[item], 'ogType', Object.getOwnPropertyDescriptor(opps[item], 'type'));
						delete opps[item].type;
					}
					
					res.json(opps);
				},
				function(error2){
					res.status(404).send("Location could not be queried!");
				}
			);
			
		},
		function(error) {
			res.status(404).send("Database could not be queried!");
		}
	);
	 /*const obj = [
	 	{
	 		id: "london",
	 		title: "London",
	 		geometry: { type: "Point", coordinates: [-0.1262, 51.5002] },
	 	},
	 	{
	 		id: "brussels",
	 		title: "Brussels",
	 		geometry: { type: "Point", coordinates: [4.3676, 50.8371] }
	 	}, {
	 		id: "prague",
	 		title: "Prague",
	 		geometry: { type: "Point", coordinates: [14.4205, 50.0878] }
	 	}, {
	 		id: "athens",
	 		title: "Athens",
	 		geometry: { type: "Point", coordinates: [23.7166, 37.9792] }
	 	}, {
	 		id: "reykjavik",
	 		title: "Reykjavik",
	 		geometry: { type: "Point", coordinates: [-21.8952, 64.1353] }
	 	}, {
	 		id: "dublin",
	 		title: "Dublin",
	 		geometry: { type: "Point", coordinates: [-6.2675, 53.3441] }
	 	}, {
	 		id: "oslo",
	 		title: "Oslo",
	 		geometry: { type: "Point", coordinates: [10.7387, 59.9138] }
	 	}, {
	 		id: "lisbon",
	 		title: "Lisbon",
	 		geometry: { type: "Point", coordinates: [-9.1355, 38.7072] }
	 	}, {
	 		id: "moscow",
	 		title: "Moscow",
	 		geometry: { type: "Point", coordinates: [37.6176, 55.7558] }
	 	}, {
	 		id: "belgrade",
	 		title: "Belgrade",
	 		geometry: { type: "Point", coordinates: [20.4781, 44.8048] }
	 	}, {
	 		id: "bratislava",
	 		title: "Bratislava",
	 		geometry: { type: "Point", coordinates: [17.1547, 48.2116] }
	 	}, {
	 		id: "ljublana",
	 		title: "Ljubljana",
	 		geometry: { type: "Point", coordinates: [14.5060, 46.0514] }
	 	}, {
	 		id: "madrid",
	 		title: "Madrid",
	 		geometry: { type: "Point", coordinates: [-3.7033, 40.4167] }
	 	}, {
	 		id: "stockholm",
			title: "Stockholm",
	 		geometry: { type: "Point", coordinates: [18.0645, 59.3328] }
	 	}, {
	 		id: "bern",
	 		title: "Bern",
	 		geometry: { type: "Point", coordinates: [7.4481, 46.9480] }
	 	}, {
	 		id: "kiev",
	 		title: "Kiev",
			geometry: { type: "Point", coordinates: [30.5367, 50.4422] }
	 	}, {
	 		id: "paris",
	 		title: "Paris",
	 		geometry: { type: "Point", coordinates: [2.3510, 48.8567] }
	 	}, {
	 		id: "new york",
	 		title: "New York",
	 		geometry: { type: "Point", coordinates: [-74, 40.43] }
	 	}
	 ];

	 res.json(obj);*/
});

module.exports = router;