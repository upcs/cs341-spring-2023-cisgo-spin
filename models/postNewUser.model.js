const connection = require('../util/connection');

// This model uses 'connection' which is our db connection script -
// This specific model calls the query "insert user into user"
exports.postNewUser = async function postNewUser(req) {
	const sql = 'INSERT INTO user (firstname, lastname, permissions, email, password, password_salt) VALUES(?,?,?,?,?,?)';

	return new Promise((resolve, reject) =>{
		connection.query(sql, [req.firstname, req.lastname, req.permissions, req.email, req.password, req.password_salt], (err, data) => {
			if(err){
				reject(err);
			}
			else {
				resolve(data);
			}
		});
	});
}