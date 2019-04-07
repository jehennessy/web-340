/*
============================================
; Title:  employee.js
; Author: Professor Krasso
; Date:   4 April 2019
; Modified By: Jordan Hennessy
; Description: Employees
;===========================================
*/

// require statements
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// employee Schema
var EmployeeSchema = new Schema({
  firstName: {type: String, require: true},
  lastName: {type: String, require: true}
});


// define the employee model
var Employee = mongoose.model("Employee", EmployeeSchema);

//expose the employee to calling files
module.exports = Employee;
