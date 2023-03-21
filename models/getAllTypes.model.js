const connection = require('../util/connection');

// This model uses 'connection' which is our db connection script -
// This specific model calls the query "Select * from type"
exports.getAllTypes = async function getAllTypes(req) {
	// query sent to db: returns all objects from type
    const sql = "SELECT * FROM type";
	return new Promise((resolve, reject) =>{
		connection.query(sql, (err, data) => {
			if(err){
				reject(err);
			}
			else resolve(data);
		});
	});
}