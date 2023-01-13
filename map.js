const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
    const results = [];
    for (let item of array) {
      results.push(callback(item));
    }
    return results;
  }

// function assertArraysEqual(arr1, arr2) {
// 	let isGood = true;
// //check if length of arrays are equal
// 	if (arr1.length !== arr2.length) {
// 		isGood = false;
// 	}
// //loop through the array content to compare if they're true
// 	for (let i = 0; i < arr1.length; i++) {
// 		if (arr1[i] !== arr2[i]) {
// 			isGood = false;
// 		}
// 	}
// //what to return if isGood is true or false
// 	if (isGood) {
// 		console.log("Arrays are the same")
// 	} else {
// 		console.log("Arrays are not the same...")
// 	}
// }

// const results1 = map(words, (word) => word[0]);
// const results2 = map(words, (word) => word + word);
// const results3 = map(words, (word) => word[0] + word[word.length - 1]);

// assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
// assertArraysEqual(results2, [
//   "groundground",
//   "controlcontrol",
//   "toto",
//   "majormajor",
//   "tomtom",
// ]);
// assertArraysEqual(results3, ["gd", "cl", "to", "mr", "tm"]);