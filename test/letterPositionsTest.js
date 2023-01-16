const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

describe("#letterPosition", () => {
    const sentence1 = letterPositions('hello');

	it("should return [1] for hello.e", () => {
		assert.deepEqual(sentence1['e'], [1]);
	});
});



// TEST
letterPositions("hello").e, [1];