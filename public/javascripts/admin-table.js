/**
 * admin-table.js
 * This file contains all scripts and all functions for the table in the admin page
 * Created by: Kevin Nguyen
 * Version 1.1.0
 * Note: Currently issues with connecting adminPage.html. For the time being, a temporary
 * script will be placed into adminPage.html to check if data from admin-data.js is properly
 * getting
 */

/**
 * getList()
 * Will retrieve all the opportunities from the router and return an array
 * return var[]
 */
function getList(){
    var list = [];
    $.get("/admin-data", {function(ret){
        list = ret;
    }});
    return list;
}
/**
 * getOpp
 * Will retrieve the opportunity from the router that matches the id 
 * @param {int} id - The id of the opportunity to be searched
 * return var[]
 */
function getOpp(id){
    var opportunity = [];
    $.get("/admin-data/id?id=" + id,{function(oppData){
        opportunity = oppData;
    }});
    return opportunity;
}
$(document).ready(function(){
        var table = $("#admin-Table");
        var list = getList();

        /* External citation: https://www.encodedna.com/javascript/populate-json-data-to-html-table-using-javascript.htm
        Problem: Converting json object to a html table
        Solution: Separate the values of the object, then use for loops to populate the cells
        */
       var tr = table.insertRow(-1);
        var dataVal = [];
        for(var i = 0; i < list.length; i++){
            for(var data in list[i]){
                if(dataVal.indexOf(data) == -1){
                    dataVal.push(data);
                }
            }
        }
        for (var i = 0; i < dataVal.length; i++) {

            //tr = table.insertRow(-1);
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = dataVal[i];
        }
});



