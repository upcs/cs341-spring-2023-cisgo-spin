const mysql = require('mysql');

const fs = require('fs');

var host = "cisgo-spin.mysql.database.azure.com";    //from GCloud instance (change to match your db)
var database = "spin";  //database name
var user = "spinadmin";         //username (change to match your db)
var password = "sp1nAr#undtheGl0be";  //password (change to match your db, yes this is very poor practice)
var ssl = "./util/DigiCertGlobalRootCA.crt";

/*
	This file, connection.js, allows us to make a connection pool to the database.

	We use this file through /models, which we host through endpoints using /routes. 
	We then make calls to those routes through /public/javascripts.
*/
const connection = mysql.createPool({
	host: host,
	database: database,
	user: user,
	password: password,
	ssl: {ca:fs.readFileSync(ssl)},
	connectionLimit: 100,
});

module.exports = connection;