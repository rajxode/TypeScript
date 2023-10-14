
// classes in TS
class User {
    // define type of variables in class
    // public modifier , can be accessed outside of the class
    public name:string;
    // private can't be accessed outside of the class , JS equivalent '#email'
    private email:string;
    readonly city: string = 'Delhi';

    // initialize the variables using constructor
    constructor(name:string,email:string){
        this.name = name;
        this.email = email;
    }
}


// another way of declaring class in TS
class Person {
    readonly city:string = 'Delhi'
    constructor(
        public name:string,
        public email:string
    ){
    }
}


// creating new user from class 
const newUser = new User ('myname','abc@xyz.com');
const newPerson = new Person('personName','person@xyz.com');