
// objects in typescript

// declare an object
const User = {
    name:'myname',
    age:22,
    email:'abc@xyz.com'
}


// passing object inside a function
// defining type of keys in object
function createUser({name,age}:{name:string,age:number}){
    // function body
}


// can't do this after defining parameter type
// createUser()                             // parameters are required
// createUser({name:'myname'})              // requires all the parameters
// createUser({name:'myname',age:22,email:'abc@xyz.com})              // cannot pass more parameters than 

let newUser = { name:'newuser',age:15,email:'abc@xyz.com'};

// this will not give us any error
// although the object has more variables
createUser(newUser);


// a function which returns an object
function getObject():{}{
    return {}
}

// predefine the keys return inside the function
function getObjectTwo():{name:string,age:number}{
    return {name:'Abc',age:22}
}


// type aliases
// if we need to user this variable repeatedly, create it a 'type' (custom data type)
type User = {
    name:string;
    age:number;
    email:string;
}


// this function take parameters of type 'User'
// this function return value of type 'User'
function addUser(user:User) : User{
    return { name:'',age:12,email:'' }
}

addUser({name:'',age:11,email:''});

export {};