
// abstract class can only be access by child classes
abstract class Employee{
    constructor(
        public name:string,
        public age:number,
    ){}

    // an abstract function only accessible in child class
    // cannot define function body
    abstract getName() : string;

    // normal function with function body
    getAge():number{
        return this.age;
    }
}


// this will be give error because the above class is an abstract class
// const newEmployee = new Employee('abc',12);


// a child class of employee
class Admin extends Employee{
    constructor(
        // variables for parent class
        public name:string,
        public age:number,
        // variable of child class
        public role:string
    ){
        // super constructor (parent class)
        super(name,age);
    }

    // abstract function
    getName(): string {
        return this.name;
    }

}

// create an object of admin class
const admin = new Admin('name',15,'admin');

// normal function accessible outside the abstract class
admin.getAge();