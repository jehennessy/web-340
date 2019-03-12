/*
============================================
; Title:  hennessy-exercise-4.3.js
; Author: Professor Krasso
; Date:   11 March 2019
; Modified By: Jordan Hennessy
; Description: Status Codes
;===========================================
*/

//require statements
var express = require('express');
var http = require('http');


// use express
var app = express();


// get request for 404 error
app.get("/not-found", function(req, res) {

  res.status(404);

  res.json({
    error: "The page you are looking for was not found!"
  })
});


// get request for 200 error
app.get("/ok", function(req, res) {

  res.status(200);

  res.json({
    message: "Everything is ay-okay!"
  })
});

// get request for 501 error
app.get("/not-implemented", function(req, res) {

  res.status(501);

  res.json({
    error: "Service is unavailable, please try again later."
  })
});


// create server
http.createServer(app).listen(8080, function() {
  console.log("Application started and listening on port 8080.");
});
