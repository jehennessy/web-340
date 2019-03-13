/*
============================================
; Title:  hennessy-exercise-4.3.js
; Author: Professor Krasso
; Date:   11 March 2019
; Modified By: Jordan Hennessy
; Description: Demonstrates CRUD operations in a Node.js API
;===========================================
*/

// require statements
var express = require('express');
var http = require('http');


// use express
var app = express();


// get request
app.get("/", function(req, res) {
  res.send("GET request has been sent!");
});


// put request
app.put("/", function(req, res) {
  res.send("Your PUT request has updated the changes!");
});


// post request
app.post("/", function(req, res) {
  res.send("POST request has been submitted!");
});


// delete request
app.delete("/", function(req, res) {
  res.send("DELETE request has been confirmed!");
});


// create server
http.createServer(app).listen(8080, function() {
  console.log("Application started and listening on port 8080!")
});
