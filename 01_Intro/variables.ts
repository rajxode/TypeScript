
// declare a variables in typescript with its type
let greetings:string = 'Hello World';

// declare variable with type number
let num1 : number = 12345;

// here also declaring variable without definiing the type
//  by default TS makes it type number, 
let num2 = 123456;

// variable with type boolean
let bool: boolean = true;

console.log(greetings);
console.log(num1);
console.log(bool);


// this variable has it's type as = 'Any'
// TS don't check variable type for 'Any '
let myHero;

// this variable has type String
let hero : string;

// a dummy function that returns a string value
function getHero(){
    return 'IronMan';
}

// as the variables is of type 'Any' it will work
// but it's not the right way
myHero = getHero();

// this is the right way
// here the type of variable is defined as string
hero = getHero();

export {}