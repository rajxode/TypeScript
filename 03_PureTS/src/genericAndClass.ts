

// multiple generic type
// this function takes two generic values and then return an object
function one<T , U> (valOne:T,valTwo:U) : object{
    return{
        valOne,
        valTwo
    }
}

// extends in generic
// extends is used to restrict the type of generic parameter
// here the U will only take number values
function two<T , U extends number> (valOne:T , valTwo : U) : object {
    return {
        valOne,
        valTwo
    }
}
two('abc',4);
// two('abc','def')      // this will give us error becasue the U is of number type


// we can also use interface
interface Student{
    name:string,
    age:number
}

// here the U will take only Student type variables
function three<T , U extends Student > (valOne:T , valTwo : U) : object {
    return {
        valOne,
        valTwo
    }
}
three('abc',{name:'myname',age:15});



// ============================================== generic classes =======================================================

// interface for Pen
interface Pen{
    brand:string,
    color:string,
    price:number
}

// interface for pencil
interface Pencil{
    brand:string,
    price:number
}


// this class is generic class and can be used by both the upper interfaces
class soldItems<T>{
    // array of all the sold products
    public soldProduct : T[] = [];

    // sell a single product and add to array
    sellProduct( product : T){
        this.soldProduct.push(product);
    }
}