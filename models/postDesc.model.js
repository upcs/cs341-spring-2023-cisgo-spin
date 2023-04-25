const connection = require('../util/connection');

// This model uses 'connection' which is our db connection script -
// This specific model calls the query "insert description into description"
exports.postDesc = async function postDesc(req, res) {
	const sql = 'INSERT INTO description (shortdesc, longdesc, contact_phone, contact_email, contact_website) VALUES(?, ?, ?, ?, ?)';
	return new Promise((resolve, reject) =>{
		connection.query(sql, 
			[req.body.shortDesc, 
			req.body.longdesc, 
			req.body.contact_phone, 
			req.body.contact_email, 
			req.body.contact_website], 
			(err, data) => {
				if(err){
					reject(err);
				}
				else {
					resolve(data);
				}
			}
		);
	});
}