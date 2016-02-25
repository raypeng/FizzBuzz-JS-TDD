"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var fizzbuzz = require("../lib/main.js");

describe("FizzBuzz", function() {

    it(".say should return Fizz when input is multple of a", function() {
      var fb = fizzbuzz(3, 5, 7);
      expect(fb.say(3)).to.equal("Fizz");
      expect(fb.say(6)).to.equal("Fizz");
      expect(fb.say(9)).to.equal("Fizz");
    });

});
