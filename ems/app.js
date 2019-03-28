/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   24 March 2019
; Modified By: Jordan Hennessy
; Description: EJS Layout
;===========================================
*/

// require statements
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

var app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('short'));

app.get('/', function(req, res) {
  res.render('index', {
    title: 'Home page'
  });
});

// create server
http.createServer(app).listen(8080, function(){
  console.log('Application has started and is listening on port 8080!')
});
