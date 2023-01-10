const assertEqual = function(actual, expected) {
	let a = actual;
	let e = expected;
	if (actual === expected) {
		console.log(`😊 Assertion Passed: ${a} === ${e}`);
	} else if (actual !== expected) {
			console.log(`☹️ Assertion Failed: ${a} !== ${e}`);
	}

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
