const connection = require('../util/connection');

// This model uses 'connection' which is our db connection script -
// This specific model calls the query "Select * from opportunity where opportunity id = {id}"
exports.getUser = async function getUser(req) {
	// query sent to db: selects specific 1 object from db from matching id
    const sql = `SELECT * FROM user WHERE email='${req.body.username}'`;
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