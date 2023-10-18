"use strict";
// multiple generic type
// this function takes two generic values and then return an object
function one(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
// extends in generic
// extends is used to restrict the type of generic parameter
// here the U will only take number values
function two(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
two('abc', 4);
// here the U will take only Student type variables
function three(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
three('abc', { name: 'myname', age: 15 });
// this class is generic class and can be used by both the upper interfaces
class soldItems {
    constructor() {
        // array of all the sold products
        this.soldProduct = [];
    }
    // sell a single product and add to array
    sellProduct(product) {
        this.soldProduct.push(product);
    }
}
