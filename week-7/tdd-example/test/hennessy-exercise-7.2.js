/*
============================================
; Title:  hennessy-exercise-7.2.js
; Author: Professor Krasso
; Date:   3 April 2019
; Modified By: Jordan Hennessy
; Description: TDD
;===========================================
*/

// require statement
var assert = require("assert");

describe("String#split", function() {

  it("should return an array of fruits", function() { // outputs a message

    assert(Array.isArray('Apple,Orange,Mango'.split(','))); // tests the array

  });
});

