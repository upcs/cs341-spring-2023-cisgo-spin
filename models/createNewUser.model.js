const connection = require('../util/connection');

// This model uses 'connection' which is our db connection script -
// This specific model calls the query "insert user into user"
exports.createNewUser = async function createNewUser(req) {
	const sql = `INSERT INTO user (firstname, lastname, permissions, email, password, password_salt) VALUES(
		${req.firstname}, 
		${req.lastname}, 
		${req.email},
		${req.password},
		${req.password_salt})`;
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