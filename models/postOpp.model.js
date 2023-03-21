const connection = require('../util/connection');

// This model uses 'connection' which is our db connection script -
// This specific model calls the query "insert opportunity into opportunity"
exports.postOpp = async function postOpp(req, res) {
	const sql = `INSERT INTO opportunity (name, type, location_id) VALUES(${req.name}, ${req.type}, ${req.location_id})`;
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