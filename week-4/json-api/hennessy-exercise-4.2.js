/*
============================================
; Title:  hennessy-exercise-4.2.js
; Author: Professor Krasso
; Date:   11 March 2019
; Modified By: Jordan Hennessy
; Description: JSON APIs
;===========================================
*/

// require statements
var express = require('express');
var http = require('http');


// use express
var app = express();



app.get("/customer/:id", function(req, res){
  var id = parseInt(req.params.id, 10);

  res.json({

    dateOfBirth: "March 10th, 2001",
    homeTown: "Bellevue, NE",
    petsName: "Fred",
    customerId: id

  });
});

http.createServer(app).listen(8080, function() {
  console.log('The Application has started and is listening on port 8080.');
});
