const connection = require('../util/connection');

exports.postOppWithCorrespondingLoc = async function postOppWithCorrespondingLoc(req, res) {
	// in this case, you'll pass in your fields in req, and it'll be stored in req.data (i think?) (or req.body if you just wanna pass over the original request values)
    const sql = " ( new query here )";
	return new Promise((resolve, reject) =>{
		connection.query(sql, (err, data) => {
			if(err){
				reject(err);
			}
			else resolve(data);
		});
	});
}