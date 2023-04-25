const connection = require('../util/connection');

// This model uses 'connection' which is our db connection script -
// This specific model calls the query "insert opportunity into opportunity"
exports.postOpp = async function postOpp(req, res) {
	const sql = `INSERT INTO opportunity (name, type, location_id, status, startdate, enddate, description_id) VALUES(?, ?, ?, ?, ?, ?, ?)`;
	return new Promise((resolve, reject) =>{
		connection.query(sql, [
								req.body.name, 
								req.body.type, 
								req.body.location_id, 
								req.body.status, 
								req.body.startdate, 
								req.body.enddate, 
								req.body.description_id
							], (err, data) => {
			if(err){
				reject(err);
			}
			else {
				resolve(data);
			}
		});
	});
}