const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
	it("should return [4] for [1, 2, 3, 4, 5, 6, 7]", () => {
		const arr = [1, 2, 3, 4, 5, 6, 7];
		assert.deepEqual(middle(arr), [4]);
	});
	it("should return [] for [2]", () => {
		const arr = [2];
		assert.deepEqual(middle(arr), []);
	});
	it("should return [2, 3] for [1, 2, 3, 4]", () => {
		const arr = [1, 2, 3, 4];
		assert.deepEqual(middle(arr), [2, 3]);
	});
	it("should return [] for [2, 2]", () => {
		const arr = [2, 2];
		assert.deepEqual(middle(arr), []);
	});
});
