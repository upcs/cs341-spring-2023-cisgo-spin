const connection = require('../util/connection');

// This model uses 'connection' which is our db connection script -
// This specific model calls the query "insert location into location"
exports.postLoc = async function postLoc(req) {
	const sql = `INSERT INTO location (coords, city, state, country, countrycode) VALUES(
		${req.coords}, 
		${req.city}, 
		${req.state}, 
		${req.country}, 
		${req.countrycode})`;

	return new Promise((resolve, reject) =>{
		connection.query(sql, (err, data) => {
			if(err){
				reject(err);
			}
			else {
				resolve(data);
			}
		});
	});
}