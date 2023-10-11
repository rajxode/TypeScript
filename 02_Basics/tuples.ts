
// duples to define the order of data store inside the array

// this array can only store value in the defined order 
let arr : [string,number,boolean];

arr = ['abc',123,true];

// it will give error if we do this . because value entered and order of type is not similar
// arr = [123,'abc',true]


// custom type using tuples
type User = [string,number];

const newUser : User = ['name',123];

// the tuple also follows function related to arrays

// this is wrong
newUser[0]='abc';
newUser.push(22);


export {}