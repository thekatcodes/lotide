const assert = require('chai').assert;
const findKey = require('../findKey');

// const result1 = findKey({
//     "Blue Hill":  { stars: 1 },
//     "Akaleri":    { stars: 3 },
//     "noma":       { stars: 2 },
//     "elBulli":    { stars: 3 },
//     "Ora":        { stars: 2 },
//     "Akelarre":   { stars: 3 }
//   }, x => x.stars === 2);
  
  const faveCities = {
    "Seoul": {rank: 10},
    "Lausanne": {rank: 9},
    "Vancouver": {rank: 8}
  };
  const highRanking = num => num.rank === 10;
  
  const result1 = findKey(faveCities, highRanking);
  const result2 = findKey(faveCities, num => num.rank === 9);
  const result3 = findKey(faveCities, num => num.rank < 5);
  
  describe('#findKey', () => {
    it('should return "Seoul" for result1', () => {
      assert.strictEqual(result1, "Seoul");
    });
  
    it('should return "Lausanne" for result2', () => {
      assert.strictEqual(result2, "Lausanne");
    });
  
    it('should return undefined for result3', () => {
      assert.strictEqual(result3, undefined);
    });
  });

