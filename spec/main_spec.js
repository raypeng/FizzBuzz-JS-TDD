"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var fizzbuzz = require("../lib/main.js");

describe("FizzBuzz", function() {

    it(".say should return Fizz when input is multple of a only", function() {
      var fb = fizzbuzz(3, 5, 7);
      expect(fb.say(3)).to.equal("Fizz");
      expect(fb.say(6)).to.equal("Fizz");
      expect(fb.say(9)).to.equal("Fizz");
    });

    it(".say should return Buzz when input is multple of b only", function() {
      var fb = fizzbuzz(3, 5, 7);
      expect(fb.say(5)).to.equal("Buzz");
      expect(fb.say(10)).to.equal("Buzz");
      expect(fb.say(20)).to.equal("Buzz");
    });

});
