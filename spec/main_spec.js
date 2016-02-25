"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var fizzbuzz = require("../lib/main.js");

describe("FizzBuzz", function() {

    var fb = fizzbuzz(3, 5, 7);

    it(".say should return Fizz when input is multple of a only", function() {
      expect(fb.say(3)).to.equal("Fizz");
      expect(fb.say(6)).to.equal("Fizz");
      expect(fb.say(9)).to.equal("Fizz");
    });

    it(".say should return Buzz when input is multple of b only", function() {
      expect(fb.say(5)).to.equal("Buzz");
      expect(fb.say(10)).to.equal("Buzz");
      expect(fb.say(20)).to.equal("Buzz");
    });

    it(".say should return Whizz when input is multple of c only", function() {
      expect(fb.say(7)).to.equal("Whizz");
      expect(fb.say(14)).to.equal("Whizz");
      expect(fb.say(28)).to.equal("Whizz");
    });

});
