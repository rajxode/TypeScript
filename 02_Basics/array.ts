
// array declaration in TS

// we cannot declare array like this in TS, it won't let us push values in it
// const arr = [];

// right way of declaring an array

// this is an array containing only string values 
const arr : string[] = [];

// array with number values 
const numArr : number[] = [];

// we can also define array like this
const arr2 : Array<number> = [];

arr.push('abc');
numArr.push(1);
arr2.push(2);


// creating a type for storing student
type student = {
    name:string;
    rollno:number;
}

// this array takes values of type student
const studentArray : student[] = [];



export {}