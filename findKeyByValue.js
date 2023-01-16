const assertEqual = require("./assertEqual");

const findKeyByValue = function(obj, value){
    //loop through object
    for (key in obj) {
        //if key with that given value is found -> return key
        if(obj[key] === value){
            return key;
        } 
    }
    //else return undefined
    return undefined
}
module.exports = findKeyByValue;