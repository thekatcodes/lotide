const assertEqual = function(actual, expected) {
	let a = actual;
	let e = expected;
	if (actual === expected) {
		console.log(`😊 Assertion Passed: ${actual} === ${expected}`);
	} else if (actual !== expected) {
		console.log();
	}
	console.log(`☹️ Assertion Failed: ${actual} !== ${expected}`);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
