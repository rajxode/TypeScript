"use strict";
// use generic when we don't know the type of data that is coming 
Object.defineProperty(exports, "__esModule", { value: true });
// we are creating a function that takes data of a specific type and then return the same type of data
// this is a function which will only take number value and will return number
function one(val) {
    return val;
}
// this function can take both number and bool and return accordingly
// but we have to user the 'OR operator
function two(val) {
    return val;
}
// here the input can be of any type and same of the return value
// but here it is not sure that both input and return are of same type
function three(val) {
    return val;
    // return 'string';
}
three(4);
// define generics 
// <Type> defines the type of data and it will remain same for all not like the 'any' keyword
function four(val) {
    return val;
}
// as we pass a number value in parameter , the value of <Type> is set to number
four(5);
four('abc'); // here type is string
four(true); // here type is boolean
// for using custom type with Generic
four({ name: 'abc', age: 15 });
// another way of generic 
function five(val) {
    return val;
}
// ==================================================================================================================
// array of generic type
// a function that takes an array and return a single value from array
function getVal(arr) {
    // we have to return the value of type T from array
    return arr[2];
}
// a function that takes an array of TYPE and return a number
function getNum(arr) {
    // here we can return any number value
    return 5;
}
// a function that takes an array and return the array
function getArr(arr) {
    // here we need to return the same type arr
    return arr;
}
// arrow function using Generic Array
const getArray = (arr) => {
    return arr;
};
