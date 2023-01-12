const assertEqual = function (actual, expected) {
	if (actual === expected) {
		console.log(`😊 Assertion Passed: ${actual} === ${expected}`);
	} else if (actual !== expected) {
		console.log(`☹️ Assertion Failed: ${actual} !== ${expected}`);
	}
};

const countLetters = function (sentence) {
    /* 
        1) remove spaces from string
        2) loop through every letter in the string but check first if letter exists in the letterCount object
        3) if it does, then do that letter++ 
    */

    let noSpaceSentence = sentence.replace(/\s/g, '');
	let letterCount = {};
	// loop through each letter of the string
	for (let letter of noSpaceSentence) {
		// console.log(letter); -> logs each letter of the sentence individualy
        if (!Object.hasOwn(letterCount, letter)){
            letterCount[letter] = 1;
        } else {
            letterCount[letter]++;
        }
	}
    console.log(letterCount);
	// return a count of each of the letters in the sentence
    return letterCount;
};

// TEST
countLetters("lighthouse in the house");
