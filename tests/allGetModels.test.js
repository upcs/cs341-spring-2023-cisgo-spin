/**
 * allGetModels.test.js
 * A jest file that checks all models and compares with a hardcoded data set to ensure
 * the values retrieved on the SQL matches what is expected to be retrieved
 * Created By: Kevin Nguyen
 * Version: 1.0.0
 */

const pool = require('../util/connection');
//Behold, the test data. The motherlode of information. The judge of the test's court
const hCDataLoc = [{"city": "Seattle", 
                    "coords": {"x": -122.33028, "y": 47.60323}, 
                    "country": "United States", 
                    "countrycode": "US", 
                    "location_id": 1, 
                    "state": "Washington"}];
const hCData = [];
const getAllLocs = require('../models/getAllLocs.model');
const promise = getAllLocs.getAllLocs();
const getAllLocsByCC = require('../models/getAllLocsByCountryCode.model');
const promise2 = getAllLocsByCC.getAllLocsByCountryCode(hCDataLoc[0]);
const getAllOpps = require('../models/getAllOpps.model');
const promise3 = getAllOpps.getAllOpps();
const getAllOppsByLoc = require('../models/getAllOppsByLocation.model');
const promise4 = getAllOppsByLoc.getAllOppsByLocation(0);
const getAllOppsByType = require('../models/getAllOppsByType.model');
const promise5 = getAllOppsByType.getAllOppsByType(0);

test('Checking "getAllLocs" for correct data', () => {
    return promise.then((data) => {
        for(var i = 0; i < hCDataLoc.length; i++){
            expect(data[i]).toMatchObject(hCDataLoc[i]);
        }
    })
});

test('Checking if all locations are correct using Country code in "getAllLocsByCC"', () => {
    return promise2.then((data) => {
        for(var i = 0; i < hCDataLoc.length; i++){
            expect(data[i]).toMatchObject(hCDataLoc[i]);
        }
    })
});

test('Checking "getAllOpps" for correct data', () => {
    return promise3.then((data) => {
        for(var i = 0; i < hCData.length; i++){
            expect(data[i]).toMatchObject(hCData[i]);
        }
    })
});

test('Checking if all opportunities are correct using location in "getOppsByLoc"', () => {
    return promise4.then((data) => {
        for(var i = 0; i < hCData.length; i++){
            expect(data[i]).toMatchObject(hCData[i]);
        }
    })
});

test('Checking if all opportunities are correct using opportunity type in "getOppsByType"', () => {
    return promise5.then((data) => {
        for(var i = 0; i < hCData.length; i++){
            expect(data[i]).toMatchObject(hCData[i]);
        }
    })
});
