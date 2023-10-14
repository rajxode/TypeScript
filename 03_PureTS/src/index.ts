
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

    // private variable  cannot be accessed outside of the class
    private count : number = 1;

    // protected variable only accessable inside this class and subclass
    protected num : number = 5;

    readonly city:string = 'Delhi'
    // constructor to assign values
    constructor(
        public name:string,
        public email:string
    ){
    }

    // private function 
    private reduceCount():void{
        console.log('count reduce');
    }


    // a getter function to get the count value outside the class
    get getCount() : number {
        return this.count;
    }

    // a setter function to set the value of count variable
    set setCount(num : number){
        if(num < 1 ){
            throw new Error("Value cannot be less than 1");
            
        }
        this.count += num;
    }
}


class Children extends Person{
    public age:number = 5;

    // change the protected variable of parent class
    changeNum(){
        this.num = 15;
    }
}


// creating new user from class 
const newUser = new User ('myname','abc@xyz.com');
const newPerson = new Person('personName','person@xyz.com');