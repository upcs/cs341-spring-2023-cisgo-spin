const connection = require('../util/connection');

// This model uses 'connection' which is our db connection script -
// This specific model calls the query "Select * from location"
exports.getAllLocs = async function getAllLocs(req, res) {
	// query sent to db: returns all objects from location
    const sql = "SELECT * FROM location";
	return new Promise((resolve, reject) =>{
		connection.query(sql, (err, data) => {
			if(err){
				reject(err);
			}
			else resolve(data);
		});
	});
}