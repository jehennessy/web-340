/*
============================================
; Title:  hennessy-exercise-2.2.js
; Author: Professor Krasso
; Date:   28 February 2019
; Modified By: Jordan Hennessy
; Description: Hello World with Express
;===========================================
*/
var express = require('express'); // sets the library
var http = require('http'); // sets the library to start server

var app = express(); // placeholder for app

app.use(function(req, res){

  console.log('In comes a request to: %s', req.url); // outputs message for request

  res.end('Hello World\n');
});

http.createServer(app).listen(8080, function(){
  console.log('Application started on port %s', 8080); // outputs message when application starts
});
