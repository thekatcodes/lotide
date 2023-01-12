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
		console.log("Arrays are the same");
	} else {
		console.log("Arrays are not the same...");
	}
}

const letterPositions = function (sentence) {
	/* 
 1) remove spaces from string
 2) loop through string
 3) for each letter create an array
 4) push number to the array 
 */

	const results = {};
	let noSpaceSentence = sentence.replace(/\s/g, "");

	for (let i = 0; i < noSpaceSentence; i++) {
        if (results[noSpaceSentence[i]]){
            results[noSpaceSentence[i]].push(i);//push(i) with() adds to the array
        } else {
            results[noSpaceSentence[i]]= [i];i] creates an array with the index
        }
	}
	return results;

};

// TEST
letterPositions("hello").e, [1];
