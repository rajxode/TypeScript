"use strict";
// classes in TS
class User {
    // initialize the variables using constructor
    constructor(name, email) {
        this.city = 'Delhi';
        this.name = name;
        this.email = email;
    }
}
// another way of declaring class in TS
class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.city = 'Delhi';
    }
}
// creating new user from class 
const newUser = new User('myname', 'abc@xyz.com');
const newPerson = new Person('personName', 'person@xyz.com');
