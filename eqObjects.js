function eqArrays(arr1, arr2) {
	let isGood = true;
	//check if length of arrays are equal
	if (arr1.length !== arr2.length) {
		isGood = false;
	}
	//loop through the array content to compare if they're true
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			isGood = false;
		}
	}
	//what to return if isGood is true or false
	if (isGood) {
		return true;
	} else {
		return false;
	}
}
const assertEqual = function (actual, expected) {
	if (actual === expected) {
		console.log(`😊 Assertion Passed: ${actual} === ${expected}`);
	} else if (actual !== expected) {
		console.log(`☹️ Assertion Failed: ${actual} !== ${expected}`);
	}
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

//TEST 1
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = {
	size: "medium",
	colors: ["red", "blue"],
};
eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // => true

//TEST 2
const longSleeveMultiColorShirtObject = {
	size: "medium",
	colors: ["red", "blue"],
	sleeveLength: "long",
};
eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false
