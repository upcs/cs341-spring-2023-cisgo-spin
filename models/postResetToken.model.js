const connection = require('../util/connection');

// This model uses 'connection' which is our db connection script -
// This specific model writes a new password reset token so that we can retrieve it properly
exports.postResetToken = async function postResetToken(req) {
	// query sent to db: returns all objects from location
    const sql = `INSERT INTO  WHERE countrycode='${req.countrycode}'`;
	return new Promise((resolve, reject) =>{
		connection.query(sql, (err, data) => {
			if(err){
				reject(err);
			}
			else resolve(data);
		});
	});
}