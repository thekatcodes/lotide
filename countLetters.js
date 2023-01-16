const assertEqual = require("./assertEqual");

const countLetters = function(sentence) {
    let noSpaceSentence = sentence.replace(/\s/g, "");
    let letterCount = {};
    // loop through each letter of the string
    // for (let letter of noSpaceSentence) {
    // console.log(letter); -> logs each letter of the sentence individualy
    // if (!Object.hasOwn(letterCount, letter)){
    //     letterCount[letter] = 1;
    // } else {
    //     letterCount[letter]++;
    // } -> refactor for older node version (old version currently installed doesn't recognice hasOwn)
    for (const letter of noSpaceSentence) {
        if (letterCount[letter]) {
            letterCount[letter] += 1;
        } else {
            letterCount[letter] = 1;
        }
    }
    // console.log(letterCount);
    // return a count of each of the letters in the sentence
    return letterCount;
};

module.exports = countLetters;
