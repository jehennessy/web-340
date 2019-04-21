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
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var csrf = require('csurf');


// setup csrf protection
var csrfProtection = csrf({cookie: true});

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
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(csrfProtection);
app.use(function(req, res, next) {
  var token = req.csrfToken();
  res.cookie('XSRF-TOKEN', token);
  res.locals.csrfToken = token;
  next();
});



// http calls
app.get('/', function(req, res) {
  Employee.find({}, function(error, employees) {
    if (error) {
      console.log(error);
      throw error;
    } else {
      console.log(employees);
     res.render("index", {
        title: "Employee List",
        message: "Employee Records",
        employees: employees
      });
    }
  });
});

app.get('/new', function(req, res) {
  res.render('new', {
    title: 'New Entry',
    message: "New Employee Entry Page"
  });
})

app.get("/view/:queryName", function(req, res) {
  var queryName = req.params.queryName;
  Employee.find({'lastName': queryName}, function(error, employees) {
    if (error) throw error;
    console.log(employees);
    if(employees.length > 0) {
      res.render("view", {
        title: "Employee Record",
        employee: employees
      })
    }
    else {
      res.redirect("/");
    }
  });
});


app.post("/process", function(req,res) {
  if(!req.body.firstName || !req.body.lastName){
    res.status(400).send("Entries must have a name!");
    return;
  }

  // get the request's form data
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  console.log(firstName + " " + lastName);

  //create an employee model
  var employees = new Employee({
    firstName : firstName,
    lastName: lastName });

  // save
  employees.save(function(error) {
    if (error) {
      console.log(error);
      throw error
    } else {
      console.log(firstName + " " + lastName + "saved successfully!");
      res.redirect('/');
    };
  });
});

// create server
http.createServer(app).listen(8080, function(){
  console.log('Application has started and is listening on port 8080!')
});
