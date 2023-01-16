const findKey = function (obj, callback) {
	// scan object
	for (let key in obj) {
		if (callback(obj[key])) {
			return key;
		}
	}
	//return first key for which callback returns a truthy value
	//else return undefined
	return undefined;
};
module.exports = findKey;
// findKey({
//     "Blue Hill": { stars: 1 },
//     "Akaleri":   { stars: 3 },
//     "noma":      { stars: 2 },
//     "elBulli":   { stars: 3 },
//     "Ora":       { stars: 2 },
//     "Akelarre":  { stars: 3 }
// }, x => x.stars === 2) // => "noma"
