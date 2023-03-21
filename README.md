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
		* router.get('/', function(req, res, next) {});
		* Req will contain OUR request (which for gets, you'll only really need to worry about single variables in the URL (req.query)), Res contains the response (So hence res.json() returns json to the user)
	* This is also the case of us grabbing data from the db, so this is the line we'll add too. 
	* If we're doing a post, we do router.post('/', function(req, res, next) {}); instead. A post has data passed in its body, which we can access doing req.body (google this for some more in-depth)
	* We can make a call to the db using "var promise = (our previously defined model name)();".
		* A promise is an asynchronous execution type that makes sure something is "promised" before it executes any further code. Think of a promise like a gift box. If you get a gift box, there's (at least I hope) something inside of it. We're essentially saying "wait until we receive our gift box before we start to get the gift inside" when we're using a promise. This is done using promise.then(function(data){}, function(error){}). As you might suspect, the first callback function is what's executed when the gift box actually has our intended data (our gift) inside of it. The error callback function is what's executed when the gift box has coal in it (we got an error or some unexpected output)
		* I could go into a whole tirade about callbacks in Javascript in general, but take this as a generality: a lot of code in javascript is executed by "calling back" - i.e., instead of returning functions directly to a variable, we instead call another function with our return parameters. In this instance, promise.then takes two callback functions as its parameters, one of which is executed when we successfully get data, one of which is executed when there's an error. Technically speaking, we could define these functions elsewhere and clean up our code a bit, but dynamic allocation of functions is typical Javascript syntax, as well as makes our code more readable and compact.
	* To return data to our route, we can call res.json (if we're returning data from the db, like this tutorial describes) or res.sendFile (if we're returning an html page)
3. Get this data by calling this route from a local (client side) javascript
	* To elaborate on this a bit: Our Node/Express is setup as such:
		* Most files on the project directory are what's known as 'Server-side' (i.e., never seen or accessible by our user, only by our server) but any file in the /public directory will be accessible by the user (whether it's visible or not). A good way to think about it is like this: the /public directory is a normal html webpage structure, like a folder on your desktop that you're running .html pages off of (like HW1 & HW2)
		* The rest of the directories are our server. I'll go into a bit more elaboration in a different file (since this is buried so far down) but in essence, the reason we're going through all these hoops is because we don't want our user to have access to every file on the server, so we need to specify (and 'send') our user every file/bit of data we want them to have. If we made these database calls client-side instead of server-side, our user could get anyone's password that they wanted to, for example.
	* You can look at /public/javascripts/mapGet.js (or line 115 in [/public/amchartTest.html](/public/amchartTest.html#L115)) for this structure. It's super simple.


