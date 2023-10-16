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
    // constructor to assign values
    constructor(name, email) {
        this.name = name;
        this.email = email;
        // private variable  cannot be accessed outside of the class
        this.count = 1;
        // protected variable only accessable inside this class and subclass
        this.num = 5;
        this.city = 'Delhi';
    }
    // private function 
    reduceCount() {
        console.log('count reduce');
    }
    // a getter function to get the count value outside the class
    get getCount() {
        return this.count;
    }
    // a setter function to set the value of count variable
    set setCount(num) {
        if (num < 1) {
            throw new Error("Value cannot be less than 1");
        }
        this.count += num;
    }
}
class Children extends Person {
    constructor() {
        super(...arguments);
        this.age = 5;
    }
    // change the protected variable of parent class
    changeNum() {
        this.num = 15;
    }
}
// creating new user from class 
const newUser = new User('myname', 'abc@xyz.com');
const newPerson = new Person('personName', 'person@xyz.com');
