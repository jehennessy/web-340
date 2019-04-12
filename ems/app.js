/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   24 March 2019
; Modified By: Jordan Hennessy
; Description: Application
;===========================================
*/

// require statements
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
var mongoose = require('mongoose');
var Employee = require('./models/employee');
var helmet = require('helmet');


// mLab connection
var mongoDB = "mongodb+srv://Jordan:zasdoj-rohca5-curbyB@ems-rzluo.mongodb.net/test";

mongoose.connect(mongoDB, {
  useMongoClient: true
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function() {
  console.log("Application connected to mLab MongoDB instance");
});

// application
var app = express();

// set statements
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// use statements
app.use(logger('short'));
app.use(helmet.xssFilter());


// model
var employee = new Employee({
  firstName: "Jill",
  lastName: "Smith"
});


// http calls
app.get('/', function(req, res) {
  res.render('index', {
    title: 'Home page',
    message: "XSS Prevention Example"
  });
});



// create server
http.createServer(app).listen(8080, function(){
  console.log('Application has started and is listening on port 8080!')
});
