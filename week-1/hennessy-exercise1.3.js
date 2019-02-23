/*
============================================
; Title:  hennessy-exercise1.3.js
; Author: Professor Krasso
; Date:   23 February 2019
; Modified By: Jordan Hennessy
; Description: Modules
;===========================================
*/

// header
const header = require('../hennessy-header.js');

console.log(header.display("Jordan", "Hennessy", "Exercise 1.3"));
// end header

console.log("\n")

// start code

// set required statement for library
var url = require("url");

// string to separate url
var parsedURL =
url.parse("https://www.test.com/profile?name=hennessy");

// output protocol of url
console.log(parsedURL.protocol);
// output host of url
console.log(parsedURL.host);
// output query of url
console.log(parsedURL.query);
