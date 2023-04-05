const connection = require('../util/connection');

// This model uses 'connection' which is our db connection script -
// This specific model calls the query "Select distinct values from state column"
exports.getAllStateNames = async function getAllStateNames(req) {
	// query sent to db: selects specific 1 object from db from matching id
    const sql = `SELECT DISTINCT state FROM location WHERE countrycode='${req}'`;
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