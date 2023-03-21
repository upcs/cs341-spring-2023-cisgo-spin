const connection = require('../util/connection');

// This model uses 'connection' which is our db connection script -
// This specific model calls the query "Select * from opportunity"
exports.getAllOpps = async function getAllOpps(req) {
	// query sent to db: returns all objects from opportunity
    const sql = "SELECT * FROM opportunity";
	return new Promise((resolve, reject) =>{
		connection.query(sql, (err, data) => {
			if(err){
				reject(err);
			}
			else resolve(data);
		});
	});
}