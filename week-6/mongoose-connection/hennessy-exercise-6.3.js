/*
============================================
; Title:  hennessy-exercise-6.3.js
; Author: Professor Krasso
; Date:   27 March 2019
; Modified By: Jordan Hennessy
; Description: Mongoose
;===========================================
*/

// require statements
var express = require('express');
var http = require('http');
var logger = require('morgan');
var mongoose = require('mongoose');

// connect to mongoose database
var mongoDB = 'mongodb+srv://Jordan:zasdoj-rohca5-curbyB@ems-rzluo.mongodb.net/test';
mongoose.connect(mongoDB, {
  useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, "MongoDB connection error: "));
db.once('open', function() {
  console.log('Application connected to nLab');
});

//use express and morgan
var app = express();
app.use(logger('dev'));


//connect to server
http.createServer(app).listen(5000, function(){
  console.log('Application started and listening on port 5000!')
});
