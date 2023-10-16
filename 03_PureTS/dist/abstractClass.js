"use strict";
// abstract class can only be access by child classes
class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // normal function with function body
    getAge() {
        return this.age;
    }
}
// this will be give error because the above class is an abstract class
// const newEmployee = new Employee('abc',12);
// a child class of employee
class Admin extends Employee {
    constructor(
    // variables for parent class
    name, age, 
    // variable of child class
    role) {
        // super constructor (parent class)
        super(name, age);
        this.name = name;
        this.age = age;
        this.role = role;
    }
    // abstract function
    getName() {
        return this.name;
    }
}
// create an object of admin class
const admin = new Admin('name', 15, 'admin');
// normal function accessible outside the abstract class
admin.getAge();
