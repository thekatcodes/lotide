const assertEqual = require('./assertEqual');

const countOnly = function (allItems, itemsToCount) {
	// console.log(allItems); -> all items of ARRAY firstNames
	// console.log(itemsToCount); -> logs OBJECT result1
	const results = {};

	for (let item of allItems) {
		// console.log(item); -> logs individually each item of the firstNames ARRAY
		if (itemsToCount[item]){
			if (results[item]) {
				results[item] += 1;
			} else {
				results[item] = 1;
			}
		}
	}
	// return how many time each string from the array allItems appear
	return results;
};

module.exports = countOnly;