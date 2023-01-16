const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
    const array = ["Yo Yo", "Lighthouse", "Labs"];
	it("should return ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse, 'Labs']", () => {
		assert.deepEqual(tail(array), ['Lighthouse', 'Labs']);
	});
});
