"use strict";
// duples to define the order of data store inside the array
Object.defineProperty(exports, "__esModule", { value: true });
// this array can only store value in the defined order 
var arr;
arr = ['abc', 123, true];
var newUser = ['name', 123];
// the tuple also follows function related to arrays
// this is wrong
newUser[0] = 'abc';
newUser.push(22);
