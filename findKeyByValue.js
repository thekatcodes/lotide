const assertEqual = function (actual, expected) {
	if (actual === expected) {
		console.log(`😊 Assertion Passed: ${actual} === ${expected}`);
	} else if (actual !== expected) {
		console.log(`☹️ Assertion Failed: ${actual} !== ${expected}`);
	}
};

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

const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);