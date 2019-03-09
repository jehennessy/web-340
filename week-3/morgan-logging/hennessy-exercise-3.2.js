/*
============================================
; Title:  hennessy-exercise-3.2.js
; Author: Professor Krasso
; Date:   9 March 2019
; Modified By: Jordan Hennessy
; Description: Demonstrates how to configure the
;              Morgan logger
;===========================================
*/

var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

var app = express();

app.set('views', path.resolve(__dirname, 'views')); // where to look for views file
app.set('view engine', 'ejs'); // use the ejs view engine

app.use(logger('dev')); // logger

app.get('/', function(req, res) { // get request
  res.render('index',{ // outputs message
    message: "Hello, you have now reached the Morgan Logger Example!"
  });
});

http.createServer(app).listen(3000, function(){ // creates server
  console.log('Application started and listening on port %s', 3000);
});
