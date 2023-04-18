const connection = require('../util/connection');

// This model uses 'connection' which is our db connection script -
// This specific model calls the query "insert location into location"
exports.postLoc = async function postLoc(req) {
	const sql = `INSERT INTO location (coords, city, state, country, countrycode) VALUES(Point(?, ?), "?", "?", "?", "?")`;

	return new Promise((resolve, reject) =>{
		connection.query(sql, 
			[req.body.ycoord,
			req.body.xcoord,
			req.body.city,
			req.body.state,
			req.body.country,
			req.body.countryCode],
			(err, data) => {
			if(err){
				reject(err);
			}
			else {
				resolve(data);
			}
		});
	});
}