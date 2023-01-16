const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe("#countOnly", function() {
	const firstNames = [
		"Karl",
		"Salima",
		"Agouhanna",
		"Fang",
		"Kavith",
		"Jason",
		"Salima",
		"Fang",
		"Joe",
	];
	const result1 = countOnly(firstNames, {
		Jason: true,
		Karima: true,
		Fang: true,
		Agouhanna: false,
	});
	it("should return 1 for Jason", function () {
		assert.equal(result1["Jason"], 1);
    });
    it("should return undefined for Karima", function () {
		assert.equal(result1["Karima"], undefined);
    });
    it("should return 2 for Fang", function () {
		assert.equal(result1["Fang"], 2);
    });
});

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);
