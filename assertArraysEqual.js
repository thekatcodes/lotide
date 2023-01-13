function assertArraysEqual(arr1, arr2) {
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
		console.log("Arrays are the same")
	} else {
		console.log("Arrays are not the same...")
	}
}

// TEST
eqArrays([1, 2, 3], [1, 2, 3]); // => should PASS
