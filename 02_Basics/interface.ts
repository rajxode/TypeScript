

// define interfaces in TS
interface User {
    // read only id, cannot be changed later
    readonly id : number,
    // name , email
    name:string,
    email:string,
    // optional account number
    accNum?:number,
    // function to return a string
    getString:() => string,
    // another way of function declaration 
    getNumber():number,
    // function with parameters
    getParams(name:string,amount:number):number
}


// reopening of an interface (add new values)
interface User{
    userId:number
}


// inheritance
// inherit properties from User interface
interface Admin extends User {
    role:"admin" | "employee" | "manager"
}


const user : Admin = {
    id:1,
    name:'myname',
    email:'abc@xyz.com',
    userId:123,
    role:'admin',
    getString : () =>  {
        return 'abc';
    },
    getNumber : () => {
        return 1;
    },
    getParams : (username:'myname',amount:100) => {
        return amount;
    }
}

export {}