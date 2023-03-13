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
 */
function getOpp(id){
    var opportunity;
    $.get("/admin-data",{function(list){
        for(var listID in list){
            var oppID = list[listID].opportunity_id;
            if(oppID == id){
                opportunity = list[listID];
            }
        }
        return opportunity;
    }});
}