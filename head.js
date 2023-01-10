const assertEqual = function(actual, expected) {
	let a = actual;
	let e = expected;
	if (actual === expected) {
		console.log(`😊 Assertion Passed: ${a} === ${e}`);
	} else if (actual !== expected) {
		console.log(`☹️ Assertion Failed: ${a} !== ${e}`);
	}
	const head = function(array) {
        return array[0];
      };
    
};

//TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");