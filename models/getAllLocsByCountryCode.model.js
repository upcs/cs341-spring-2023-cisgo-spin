const connection = require('../util/connection');

// This model uses 'connection' which is our db connection script -
// This specific model calls the query "Select * from location where countrycode = '{code}'"
exports.getAllLocsByCountryCode = async function getAllLocsByCountryCode(req) {
	// query sent to db: returns all objects from location
    const sql = `SELECT * FROM location WHERE countrycode='${req.countrycode}'`;
	return new Promise((resolve, reject) =>{
		connection.query(sql, (err, data) => {
			if(err){
				reject(err);
			}
			else resolve(data);
		});
	});
}