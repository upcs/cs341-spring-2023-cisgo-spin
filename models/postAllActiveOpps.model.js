const connection = require('../util/connection');

// This model uses 'connection' which is our db connection script -
// This specific model calls the query "insert opportunity into opportunity"

exports.postAllActiveOpps = async function postAllActiveOpps(req) {
	const sql = `UPDATE opportunity SET status=(?) WHERE opportunity_id = (?)`;
	return new Promise((resolve, reject) =>{
		connection.query(sql, [
								req.status, 
								req.id
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