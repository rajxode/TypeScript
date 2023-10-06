"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// declare a variables in typescript with its type
var greetings = 'Hello World';
// declare variable with type number
var num1 = 12345;
// here also declaring variable without definiing the type
//  by default TS makes it type number, 
var num2 = 123456;
// variable with type boolean
var bool = true;
console.log(greetings);
console.log(num1);
console.log(bool);
// this variable has it's type as = 'Any'
// TS don't check variable type for 'Any '
var myHero;
// this variable has type String
var hero;
// a dummy function that returns a string value
function getHero() {
    return 'IronMan';
}
// as the variables is of type 'Any' it will work
// but it's not the right way
myHero = getHero();
// this is the right way
// here the type of variable is defined as string
hero = getHero();
