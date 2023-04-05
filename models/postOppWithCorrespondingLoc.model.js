const connection = require('../util/connection');

exports.postOppWithCorrespondingLoc = async function postOppWithCorrespondingLoc(req, res) {
	// in this case, you'll pass in your fields in req, and it'll be stored in req.data (i think?) (or req.body if you just wanna pass over the original request values)
    //const sql = "INSERT INTO location_ID (req.data.country, )" 
	//const sql2 = "INSERT INTO Opportunity (location: LAST_INSERT_ID(), req.data.name, type )";


	var country =  req.data.countryEvent;
	var name = req.data.titleEvent;
	var description = req.data.descriptionEvent

	var sql = dbquery(
		INSERT in location.id,
		(country),
		values ("$(country)")
	);

	var sql2 = dbquery(
		INSERT in Opportunity,
		(LAST_INSERT_ID(), name, description),
		values ("LAST_INSERT_ID()", "$(name)", "$(description)")
	);
	
	// we don't even really need to return anything unless there's an error, so we don't need to resolve anything.
	return new Promise((resolve, reject) =>{
		// make first query
		connection.query(sql, (err, data) => {
			if(err){
				reject(err);
			}
			else 
			{
				// only make second query if first one (location) succeeds
				connection.query(sql2, (err, data2) => {
					if(err){
						reject(err);
					}
				});
			}
		});
	});
}