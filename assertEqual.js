const assertEqual = function(actual, expected) {
	let a = actual;
	let e = expected;
	if (actual === expected) {
		console.log(`đ Assertion Passed: ${a} === ${e}`);
	} else if (actual !== expected) {
		console.log(`âšī¸ Assertion Failed: ${a} !== ${e}`);
	}
    
};


module.exports = assertEqual;