/*
============================================
; Title:  hennessy-exercise-5.3.js
; Author: Professor Krasso
; Date:   24 March 2019
; Modified By: Jordan Hennessy
; Description: Pug template
;===========================================
*/

// require statements
var express = require('express');
var http = require('http');
var pug = require('pug');
var path = require('path');

// use express
var app = express();

// tell express where to find files
app.set('views', path.resolve(__dirname, 'views'));

//tell express to use pug
app.set('view engine', 'pug');


// tell express to get the index page and send back message
app.get("/", function(req, res) {
  res.render('index', {
    message: "Hello, I'm Jordan! Welcome to my Pug template page!"
  });
});

//create server and output message when listening
http.createServer(app).listen(8080,  function(){
  console.log("Application has started and is listening on port 8080!");
});
