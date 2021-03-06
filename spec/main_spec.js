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

  describe(".say", function() {

    it("should return Fizz when input is multple of a only", function() {
      expect(fb.say(3)).to.equal("Fizz");
      expect(fb.say(6)).to.equal("Fizz");
      expect(fb.say(9)).to.equal("Fizz");
    });

    it("should return Buzz when input is multple of b only", function() {
      expect(fb.say(5)).to.equal("Buzz");
      expect(fb.say(10)).to.equal("Buzz");
      expect(fb.say(20)).to.equal("Buzz");
    });

    it("should return Whizz when input is multple of c only", function() {
      expect(fb.say(7)).to.equal("Whizz");
      expect(fb.say(14)).to.equal("Whizz");
      expect(fb.say(28)).to.equal("Whizz");
    });

    it("should return FizzBuzz when input is multple of a, b", function() {
      expect(fb.say(15)).to.equal("FizzBuzz");
      expect(fb.say(45)).to.equal("FizzBuzz");
    });

    it("should return FizzWhizz when input is multple of a, c", function() {
      expect(fb.say(21)).to.equal("FizzWhizz");
      expect(fb.say(42)).to.equal("FizzWhizz");
    });

    it("should return BuzzWhizz when input is multple of b, c", function() {
      expect(fb.say(70)).to.equal("BuzzWhizz");
      expect(fb.say(140)).to.equal("BuzzWhizz");
    });

    it("should return FizzBuzzWhizz when input is multple of a, b, c", function() {
      expect(fb.say(105)).to.equal("FizzBuzzWhizz");
    });

    it("should return Fizz when input contains a", function() {
      expect(fb.say(3)).to.equal("Fizz");
      expect(fb.say(13)).to.equal("Fizz");
      expect(fb.say(23)).to.equal("Fizz");
      expect(fb.say(33)).to.equal("Fizz");
      expect(fb.say(43)).to.equal("Fizz");
      expect(fb.say(30)).to.equal("Fizz");
      expect(fb.say(31)).to.equal("Fizz");
      expect(fb.say(32)).to.equal("Fizz");
      expect(fb.say(34)).to.equal("Fizz");
      expect(fb.say(35)).to.equal("Fizz");
      expect(fb.say(36)).to.equal("Fizz");
      expect(fb.say(37)).to.equal("Fizz");
      expect(fb.say(38)).to.equal("Fizz");
      expect(fb.say(39)).to.equal("Fizz");
    });

    it("should return the original input if not matched with any rules", function() {
      expect(fb.say(1)).to.equal("1");
      expect(fb.say(2)).to.equal("2");
      expect(fb.say(4)).to.equal("4");
      expect(fb.say(8)).to.equal("8");
      expect(fb.say(11)).to.equal("11");
      expect(fb.say(16)).to.equal("16");
      expect(fb.say(17)).to.equal("17");
      expect(fb.say(19)).to.equal("19");
    });

  });

  describe(".sayUpTo", function() {

    it("should return the correct string up to 19", function() {
      var expected = "1\n2\nFizz\n4\nBuzz\nFizz\nWhizz\n8\nFizz\nBuzz\n11\nFizz\nFizz\nWhizz\nFizzBuzz\n16\n17\nFizz\n19\n";
      expect(fb.sayUpTo(19)).to.equal(expected);
    });

  });

  describe(".main", function() {

    it("should call .sayUpTo with 100 as argument and print to console", function() {
      var mainspy = sinon.spy(fb, "sayUpTo");
      var logspy = sinon.spy(console, "log");
      fb.main();
      expect(mainspy).to.have.been.calledWith(100);
      expect(logspy).to.have.been.calledOnce;
    });

  })

});
