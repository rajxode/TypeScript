
// defining functions in TS

// if we don't define the type of parameter 
// it will get type as 'Any'
function increment(num : number){
    return num + 1;
}


// function that accept only string values
function changeToUpper(str : string){
    return str.toUpperCase();
}


// function with multiple parameters
function createUser(name:string, age:number, isStudent:boolean){
    // function body 
}


// function with default value of parameter 
// incase all parameters are not passed
function createAdmin(name:string,age:number,isAdmin:boolean = true){
    // function body
}


// define arrow function
const arrowFunction = (name:string,age:number,isAdmin:boolean = true) => {
    // function body
}


const ans1 = increment(5);
// as the parameter type is defined as number , we cannot run this command
// const ans = increment("5");

const ans2 = changeToUpper('rajxode');
// can't do this
// const ans = changeToUpper(43);


// pass the values as defined in parameter
// the default value of boolean variable will be set
createUser('rajxode',15,true);

// here not passing all the parameter 
createAdmin('rajxode',21);



export {}