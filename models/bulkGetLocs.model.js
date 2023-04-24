const connection = require('../util/connection');

// This model uses 'connection' which is our db connection script -
// This specific model calls the query "Select * from location"
exports.bulkGetLocs = async function bulkGetLocs(req) {
	// query sent to db: returns all objects from location
	let locIds = req.body.locIds;
    const sql = "SELECT * FROM location WHERE location_id IN (?)";
	return new Promise((resolve, reject) =>{
		connection.query(sql, [locIds], (err, data) => {
			if(err){
				reject(err);
			}
			else resolve(data);
		});
	});
}