const connection = require('../util/connection');

exports.getAllLocs = async function getAllLocs(req, res) {
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