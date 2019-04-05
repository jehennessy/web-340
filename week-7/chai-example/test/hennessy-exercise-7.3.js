/*
============================================
; Title:  hennessy-exercise-7.3.js
; Author: Professor Krasso
; Date:   4 April 2019
; Modified By: Jordan Hennessy
; Description: Chai Test
;===========================================
*/

// require statements
var fruits = require("../hennessy-fruits");
var chai = require("chai");

var assert = chai.assert;


describe("fruits", function() {

  // outputs a message with what should happen
  it("should return an array of fruits", function() {

    // string
    var f = fruits('Apple,Orange,Mango');

    assert(Array.isArray(f));

  });
});
