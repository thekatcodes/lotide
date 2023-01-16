const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('#findKey', () => {
    const bestTVShowsByGenre = {
        sci_fi: "The Expanse",
        comedy: "Brooklyn Nine-Nine",
        drama: "The Wire"
    };
    it('should return "drama" for (bestTVShowsByGenre, "The Wire")', () => {
        assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
    });
    it('should return undefined for (bestTVShowsByGenre, "That 70s Show")', () => {
        assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
    });
});

  
//   assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
//   assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);