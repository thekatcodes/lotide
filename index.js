// index.js
const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");
const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");
const assertArraysEqual = require("../assertArraysEqual");
const eqObjects = require('../eqObjects');


module.exports = {
	head: head,
	tail: tail,
	middle: middle,
	eqArrays: eqArrays,
	assertEqual: assertEqual,
    assertArraysEqual: assertArraysEqual,
    eqObjects: eqObjects
};
