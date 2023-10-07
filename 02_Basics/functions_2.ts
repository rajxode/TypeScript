
// define the return type for a function 

// we can define the type of return value by giving type after the parameter
// this function will return only string values 
function getString(str : string) : string{
    return str;
}


// for arrow function 
// this function will return only number values
const returnNum = (num : number) : number => {
    return num;
}

// array of string 
const strArr = ['abc','def','gef'];
// array of number
const numArr = [1,2,3];


// in case of map we don't need to specify the parameter type
// map function will automatically know the type of parameter
// but we should define the return type
strArr.map((str):string => {
    return str;
})

numArr.map((num):number => {
    return num;
})


// incase the function didn't return anything
// define return type as 'void'
function printMessage(message:string) : void{
    console.log(message);
}

// for handling errors 
// define function return type as 'never'
function printError(error:string) : never {
    throw new Error(error);
}

export {}