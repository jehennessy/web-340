/*
============================================
; Title:  hennessy-assignment-1.5.js
; Author: Professor Krasso
; Date:   23 February 2019
; Modified By: Jordan Hennessy
; Description: Hello World
;===========================================
*/

// header
const header = require('../hennessy-header.js');

console.log(header.display("Jordan", "Hennessy", "Assignment 1.5"));
// end header

// start code

// setting protocol
var http = require("http");

// creating the request
function processRequest(req, res) {

  // writing the body
  var body = "Hello World, I'm Jordan Hennessy!";

    // setting the body length
    var contentLength = body.length;

    // I think this is writing metadata in the head tag
    res.writeHead(200, {
      'Content-Length' : contentLength,
      'Content-Type' : 'text/plain'
    });

    res.end(body);
}

// creating server to process request
var s = http.createServer(processRequest);

// setting the localhost
s.listen(8080);

// end code
