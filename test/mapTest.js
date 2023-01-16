const assert = require('chai').assert;
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];
const newJeansLyrics = ['you', 'got', 'me', 'looking', 'for', 'attention'];


const results1 = map(words, word => word[0]);
const results2 = map(words, function(word) {
  return word[0];
});

const returnFirstLetter = function(word) {
  return word[0];
};
const results3 = map(words, returnFirstLetter);

const expectedResults = [ 'g', 'c', 't', 'm', 't' ];

describe('#map', () => {

    it("should return [ 'g', 'c', 't', 'm', 't' ] for results1", () => {
      assert.deepEqual(results1, expectedResults);
    });
  
    it("should return [ 'g', 'c', 't', 'm', 't' ] for results2", () => {
      assert.deepEqual(results2, expectedResults);
    });  
  
    it("should return [ 'g', 'c', 't', 'm', 't' ] for results3", () => {
      assert.deepEqual(results3, expectedResults);
    });
  
    it("should return ['y', 'g', 'm', 'l', 'f', 'a'] for (newJeansLyrics, returnFirstLetter)", () => {
      assert.deepEqual(map(newJeansLyrics, returnFirstLetter), ['y', 'g', 'm', 'l', 'f', 'a']);
    });
  });