"use strict";
//  Union type in TS
// used to assign more than one type to a variable
Object.defineProperty(exports, "__esModule", { value: true });
// this variable can store values of both string and number type 
var id;
id = 3;
id = '1';
// this variable can store value of both employee and admin
var newEmployee;
newEmployee = { name: 'employeename', id: 12 };
newEmployee = { username: 'adminname', id: 12 };
// for function to accept parameter of different type
function getId(id) {
    return id;
}
// Arrays in Union
// a simple string array
var arr = ['abc', 'def'];
// a simple number array 
var arr2 = [1, 2, 3];
// in this case, the array can either store all number values or all string values
var arr3 = ['abc', 'def'];
// this array can store both string and number values
var arr4 = [1, 'abc', 2, 'def'];
// assign some predefined values to a variable
// the user variable can store only values between 'employee,admin,manager'
var user;
