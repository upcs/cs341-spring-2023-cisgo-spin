const getOpps = require("../models/getOppWithID.model");
const pool = require('../util/connection');
const promise = getOpps.getOppWithID(13);

test('checks to see if database is queried properly', () => {
	return promise.then((data) => {
		expect(Object.values(data[0])[0]).toBe(13);
	});
	
});