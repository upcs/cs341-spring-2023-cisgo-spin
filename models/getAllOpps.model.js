const connection = require('../util/connection');

exports.getAllOpps = async function getAllOpps(req, res) {
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