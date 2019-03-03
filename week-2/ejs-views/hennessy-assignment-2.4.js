/*
============================================
; Title:  hennessy-assignment-2.4.js
; Author: Professor Krasso
; Date:   2 March 2019
; Modified By: Jordan Hennessy
; Description: EJS View
;===========================================
*/

// require statements
var http = require('http');
var express = require('express');
var path = require('path');

// set the app
var app = express();

app.set('views', path.resolve(__dirname, 'views')); // tell Express the views are in the 'views' directory

app.set('view engine', 'ejs'); // tell Express to use the EJS view engine

// returns index.ejs page
app.get('/', function(request, response){
  response.render('index', {
    firstName: "Jordan",
    lastName: "Hennessy",
    address: "111 Apple St."
  });
});

// create a new server
http.createServer(app).listen(8080, function(){
  console.log("EJS-Views app started on port 8080.");
});

