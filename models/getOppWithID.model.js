const connection = require('../util/connection');

exports.getOppWithID = async function getOppWithID(req, res) {
    const sql = `SELECT * FROM opportunity WHERE opportunity_id=${req}`;
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