"use strict";
// defining functions in TS
Object.defineProperty(exports, "__esModule", { value: true });
// if we don't define the type of parameter 
// it will get type as 'Any'
function increment(num) {
    return num + 1;
}
// function that accept only string values
function changeToUpper(str) {
    return str.toUpperCase();
}
// function with multiple parameters
function createUser(name, age, isStudent) {
    // function body 
}
// function with default value of parameter 
// incase all parameters are not passed
function createAdmin(name, age, isAdmin) {
    if (isAdmin === void 0) { isAdmin = true; }
    // function body
}
// define arrow function
var arrowFunction = function (name, age, isAdmin) {
    if (isAdmin === void 0) { isAdmin = true; }
    // function body
};
var ans1 = increment(5);
// as the parameter type is defined as number , we cannot run this command
// const ans = increment("5");
var ans2 = changeToUpper('rajxode');
// can't do this
// const ans = changeToUpper(43);
// pass the values as defined in parameter
// the default value of boolean variable will be set
createUser('rajxode', 15, true);
// here not passing all the parameter 
createAdmin('rajxode', 21);
