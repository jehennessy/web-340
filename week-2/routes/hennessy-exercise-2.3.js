/*
============================================
; Title:  hennessy-exercise-2.3.js
; Author: Professor Krasso
; Date:   2 March 2019
; Modified By: Jordan Hennessy
; Description: Routes
;===========================================
*/

// require statements
var express = require('express');
var http = require('http');

var app = express();

// routes
app.get('/', function(req, res){
  res.end('Welcome to the homepage. \n'); // setting message for homepage

});

app.get('/about', function(req, res){
  res.end('Welcome to the about page. \n'); // setting message for about page
});

app.get('/contact', function(req, res){
  res.end('Welcome to the contact page. \n'); // setting message for contact page
});

app.use(function(req, res){
  res.statsCode = 404; // setting 404 message (none existent page)
  res.end('404!\n');
});

// create server
http.createServer(app).listen(3000,function(){
  console.log('Application started on port %s', 3000);
});
