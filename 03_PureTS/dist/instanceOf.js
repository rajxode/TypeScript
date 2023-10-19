"use strict";
// instanceOf is used when variables is created by 'new' keyword
// instanceOf works similar as 'typeOf' but it works incase of 'new' keyword
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
// in this function we are type casting the return value from boolean to Fish
function isFish(pet) {
    // set pet as Fish and check whether the pet has function swim or not
    return pet.swim !== undefined;
}
function getFood(pet) {
    // here we will recieve value as Fish , not as 'true'
    if (isFish(pet)) {
        console.log('fish food', pet);
    }
    else {
        console.log('Bird food', pet);
    }
}
// return area of shape
function getArea(shape) {
    // for circle
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2;
    }
    // return shape.side ** 2;
}
function getAreaTwo(shape) {
    switch (shape.kind) {
        // for circle
        case "circle":
            return Math.PI * shape.radius ** 2;
        // for square
        case "square":
            return shape.side ** 2;
        case "rectangle":
            return shape.length * shape.width;
        // it will never work 
        // but this will be give error whenever the function is used with a value that is not present in case
        default:
            const _default = shape;
            return _default;
    }
}
