"use strict";
// define the return type for a function 
Object.defineProperty(exports, "__esModule", { value: true });
// we can define the type of return value by giving type after the parameter
// this function will return only string values 
function getString(str) {
    return str;
}
// for arrow function 
// this function will return only number values
var returnNum = function (num) {
    return num;
};
// array of string 
var strArr = ['abc', 'def', 'gef'];
// array of number
var numArr = [1, 2, 3];
// in case of map we don't need to specify the parameter type
// map function will automatically know the type of parameter
// but we should define the return type
strArr.map(function (str) {
    return str;
});
numArr.map(function (num) {
    return num;
});
// incase the function didn't return anything
// define return type as 'void'
function printMessage(message) {
    console.log(message);
}
// for handling errors 
// define function return type as 'never'
function printError(error) {
    throw new Error(error);
}
