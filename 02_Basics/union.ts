
//  Union type in TS
// used to assign more than one type to a variable

// this variable can store values of both string and number type 
let id : string | number ;
id = 3;
id ='1';


type Employee = {
    name:string;
    id:number;
}

type Admin = {
    username:string;
    id:number;
}


// this variable can store value of both employee and admin
let newEmployee : Employee | Admin ;

newEmployee = { name:'employeename' , id: 12 };
newEmployee = { username:'adminname' , id: 12 };


// for function to accept parameter of different type
function getId(id: number | string){
    return id;
}


// Arrays in Union

// a simple string array
const arr : string[] = ['abc','def'];
// a simple number array 
const arr2 : number[] = [1,2,3];


// in this case, the array can either store all number values or all string values
const arr3 : number[] | string[] = ['abc','def'];

// this array can store both string and number values
const arr4 : (string | number)[] = [1,'abc',2,'def'];


// assign some predefined values to a variable

// the user variable can store only values between 'employee,admin,manager'
let user : "employee" | "admin" | "manager" ;

// this will give us error
// user = 'HR';

export {}