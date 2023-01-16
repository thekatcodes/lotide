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

module.exports = takeUntil;
