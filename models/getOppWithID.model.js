const connection = require('../util/connection');

// This model uses 'connection' which is our db connection script -
// This specific model calls the query "Select * from opportunity where opportunity id = {id}"
exports.getOppWithID = async function getOppWithID(req) {
	// query sent to db: selects specific 1 object from db from matching id
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