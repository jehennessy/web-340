/*
============================================
; Title:  hennessy-assignment-3.4.js
; Author: Professor Krasso
; Date:   9 March 2019
; Modified By: Jordan Hennessy
; Description: Putting morgan logger and advanced routing together
;===========================================
*/

// require statements
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

// set app
var app = express();

app.set('views', path.resolve(__dirname, 'views')); // tells express where to find views file
app.set('view engine', 'ejs'); // tells express to use the view engine

app.get('/', function(req, res){
  res.render('index', {
    message: 'home page' // rendering a message for home
  });
});

app.get('/about', function(req, res){
  res.render('about', {
    message: 'about page' // rendering a message for about
  });
});

app.get('/contact', function(req, res){
  res.render('contact', {
    message: 'contact page' // rendering a message for contact
  });
});

app.get('/products', function(req, res){
  res.render('products', {
    message: 'products page' // rendering a message for products
  });
});

http.createServer(app).listen(8080, function(){ // creating server
  console.log('Application started on port 8080.');
});
