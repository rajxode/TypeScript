"use strict";
// objects in typescript
Object.defineProperty(exports, "__esModule", { value: true });
// declare an object
var User = {
    name: 'myname',
    age: 22,
    email: 'abc@xyz.com'
};
// passing object inside a function
// defining type of keys in object
function createUser(_a) {
    var string = _a.name, number = _a.age;
    // function body
}
// can't do this after defining parameter type
// createUser()                             // parameters are required
// createUser({name:'myname'})              // requires all the parameters
// createUser({name:'myname',age:22,email:'abc@xyz.com})              // cannot pass more parameters than 
var newUser = { name: 'newuser', age: 15, email: 'abc@xyz.com' };
// this will not give us any error
// although the object has more variables
createUser(newUser);
// a function which returns an object
function getObject() {
    return {};
}
// predefine the keys return inside the function
function getObjectTwo() {
    return { name: 'Abc', age: 22 };
}
// this function take parameters of type 'User'
// this function return value of type 'User'
function addUser(user) {
    return { name: '', age: 12, email: '' };
}
addUser({ name: '', age: 11, email: '' });
