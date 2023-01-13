const takeUntil = function (array, callback) {
	// console.log(array); -> data 1 array then data1 array
	// console.log(callback); -> x => x < 0 from results1 then x => x === ',' from results2
	for (item of array) {
		if (callback(item)) {
			array = array.slice(0, array.indexOf(item));
		}
	}
	return array;
};


// TEST

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
(x) => x < 0 /* is the same as function(x) {x < 0;} */

console.log(results1);

console.log("---");

const data2 = [
	"I've",
	"been",
	"to",
	"Hollywood",
	",",
	"I've",
	"been",
	"to",
	"Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);
