const connection = require('../util/connection');

// This model uses 'connection' which is our db connection script -
// This specific model calls the query "insert type into type"
exports.postOpp = async function postOpp(req, res) {
	const sql = `INSERT INTO type (type) VALUES(?)`;
	return new Promise((resolve, reject) =>{
		connection.query(sql, 
			[req.type],
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