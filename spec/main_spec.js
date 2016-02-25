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

    it(".say should return FizzBuzz when input is multple of a, b", function() {
      expect(fb.say(15)).to.equal("FizzBuzz");
      expect(fb.say(45)).to.equal("FizzBuzz");
    });

    it(".say should return FizzWhizz when input is multple of a, c", function() {
      expect(fb.say(21)).to.equal("FizzWhizz");
      expect(fb.say(42)).to.equal("FizzWhizz");
    });

    it(".say should return BuzzWhizz when input is multple of b, c", function() {
      expect(fb.say(70)).to.equal("BuzzWhizz");
      expect(fb.say(140)).to.equal("BuzzWhizz");
    });

    it(".say should return FizzBuzzWhizz when input is multple of a, b, c", function() {
      expect(fb.say(105)).to.equal("FizzBuzzWhizz");
    });
  });
