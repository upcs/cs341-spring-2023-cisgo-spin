# cs341-spring-2023-cisgo-spin
The process behind creating a full (working) access or send of data:

1. Create a model at [./models](./models/)
	* Name this model something indictive of what you plan to do with the database. For this example, we'll try to access all of our available types in our 'types' table.
	* Thus, we'll name it [getAllTypes.model.js](./models/getAllTypes.model.js).
	* Make sure, when making this file, you add the line: const connection = require('../util/connection'); This allows you to use our file [connection.js](./util/connection.js) to make a query to the db.
	* You can look at the structure of how this file is set up in order to structure yours.
2. Create a route at ./routes
	* Name this route {something}.js. For this example, we'll make a route that's gonna access all of our types. Thus, we'll name it [all-types.js](./routes/all-types.js)
	* Because this is a route, we need to require both express and set a router up.
		* var express = require('express');
		* var router = express.Router();
	* If we're loading a basic webpage, we'll always be defining this behavior as GET. So we'll do:
		* router.get('/', function(req, res, next) {}
	* This is also the case of us grabbing data from the db, so this is the line we'll add too. 

