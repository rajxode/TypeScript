

// a custom data type
type User = {
    
    // readonly
    // value which cannot be modified after creation
    readonly id : number;
    name : string;
    email : string;
    // ? => optional data
    accNumber ?: number;
}


// creating a new user form above type
// providing all the values
let user1 : User = {
    id:1,
    name:'myname',
    email:'email@email.com',
    accNumber:1234
}

// creating another user but not giving all values
let user2 : User = {
    id:2,
    name:'anothername',
    email:'email@email.com'
}


// modify data in user
// this is valid
user1.email = 'newemail@email.com'

// but we cannot do this , since it is readonly variable
// user1.id = 3

// =============================================================================================================


// type for storing employee name 
type EmployeeName = {
    name : string
}

// type for storing employee role
type EmployeeRole = {
    role : string
}


// type for storing employee info  ( combination of name and role , with it's own values )
// & -> for combine
type Employee = EmployeeName & EmployeeRole & {
    id:number
}

let employee : Employee = {
    id:124,
    name:'abc',
    role:'Admin'
}


export {}