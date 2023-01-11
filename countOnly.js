const assertEqual = function (actual, expected) {
	if (actual === expected) {
		console.log(`😊 Assertion Passed: ${actual} === ${expected}`);
	} else if (actual !== expected) {
		console.log(`☹️ Assertion Failed: ${actual} !== ${expected}`);
	}
};

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

// pieces of legos we have
const firstNames = [
	"Karl",
	"Salima",
	"Agouhanna",
	"Fang",
	"Kavith",
	"Jason",
	"Salima",
	"Fang",
	"Joe",
];

// what pieces to count for
const result1 = countOnly(firstNames, {
	Jason: true,
	Karima: true,
	Fang: true,
	Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
