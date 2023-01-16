const assertObjectsEqual = require('../assertObjectsEqual');

// TEST 1
assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" }); // => true

// TEST 2
assertObjectsEqual({ a: "1", b: "4" }, { b: "2", a: "1" }); // => false
