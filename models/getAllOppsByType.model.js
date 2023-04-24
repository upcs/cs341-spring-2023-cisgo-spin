const connection = require('../util/connection');

// This model uses 'connection' which is our db connection script -
// This specific model calls the query "Select * from opportunity where type = {type}"
exports.getAllOppsByType = async function getAllOppsByType(req) {
	// query sent to db: returns all objects from opportunity that match type
    const sql = `SELECT * FROM opportunity WHERE type='${req}'`;
	return new Promise((resolve, reject) =>{
		connection.query(sql, (err, data) => {
			if(err){
				reject(err);
			}
			else resolve(data);
		});
	});
}