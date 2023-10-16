
// a dummy interface for accessing camera
interface Camera{
    // variables to use camera
    mode: string;
    filter:string;
    burst:number;
}


// a class using camera
// we need to define all the variables define inside the Camera interface
class Instagram implements Camera{
    constructor(
        // for accessing camera
        public mode:string,
        public filter:string,
        public burst:number,
    ){}
}


// an interface for status
interface Status{
    // a function that returns string
    createStatus() : string
}


// let another class need to use both Camera and create Status
// class also has it's own property
class WhatsApp implements Camera , Status{
    constructor(
        // accessing camera
        public mode:string,
        public filter:string,
        public burst:number,
        // property of class
        public chat:string
    ){}   

    // create status
    createStatus(): string {
        // return string
        return 'status updated'
    }
}