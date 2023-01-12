const eqObjects = function (object1, object2) {
	let array1 = Object.keys(object1).length;
	let array2 = Object.keys(object2).length;

	if (array1 !== array2) {
		return false;
	}
	for (key of Object.keys(object1)) {
		if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
			return eqArrays(object1[key], object2[key]);
		} else if (object1[key] !== object2[key]) {
			return false;
		}
	}
	return true;
};

const assertObjectsEqual = function (actual, expected) {
	const inspect = require("util").inspect;
	//compare actual and expected using eqObjects
	if (eqObjects(actual, expected)) {
		console.log(
			`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
		);
	} else {
		console.log(
			`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
		);
	}
};

// TEST 1
assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" }); // => true

// TEST 2
assertObjectsEqual({ a: "1", b: "4" }, { b: "2", a: "1" }); // => false
