/*
============================================
; Title:  hennessy-exercise-3.3.js
; Author: Professor Krasso
; Date:   9 March 2019
; Modified By: Jordan Hennessy
; Description: Advanced Routing
;===========================================
*/
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

var app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('short'));

app.get('/:employeeId', function(req, res){ // get the employee id
  var employeeId = parseInt(req.params.employeeId, 10);
  res.render('index', {
    employeeId: employeeId // return the employee id
  });
});

http.createServer(app).listen(8080, function(){ // create server
  console.log('Application started on port 8080');
});
