const assertArraysEqual = require("../assertArraysEqual");
const assertArraysEqual = require("../middle");
//TEST CONDITIONS

assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
assertArraysEqual(middle([2]), []);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([2, 2]), []);
