/*
============================================
; Title:  hennessy-exercise-5.2.js
; Author: Professor Krasso
; Date:   24 March 2019
; Modified By: Jordan Hennessy
; Description: EJS if else render template
;===========================================
*/

// require statements
var express = require('express');
var http = require('http');
var path = require('path');

// define the app
app = express();

// tell express where to find the files
app.set("views", path.resolve(__dirname, "views"));

// tell express to use ejs
app.set("view engine", "ejs");

// creating an local array of names
var n = [
  "Bob",
  "Taylor",
  "Beth",
  "Janet"
];

// telling express to get the array
app.get("/", function(req, res){
  res.render("index", {
    names: n
  });
});

// create a server and output message when connected
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
