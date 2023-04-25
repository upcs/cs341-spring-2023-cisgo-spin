const connection = require('../util/connection');

// This model uses 'connection' which is our db connection script -
// This specific model calls the query "Select * from status"
exports.getAllStatuses = async function getAllStatuses(req) {
	// query sent to db: returns all objects from status
    const sql = "SELECT * FROM status";
	return new Promise((resolve, reject) =>{
		connection.query(sql, (err, data) => {
			if(err){
				reject(err);
			}
			else resolve(data);
		});
	});
}