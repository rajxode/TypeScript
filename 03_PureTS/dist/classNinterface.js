"use strict";
// a class using camera
// we need to define all the variables define inside the Camera interface
class Instagram {
    constructor(
    // for accessing camera
    mode, filter, burst) {
        this.mode = mode;
        this.filter = filter;
        this.burst = burst;
    }
}
// let another class need to use both Camera and create Status
// class also has it's own property
class WhatsApp {
    constructor(
    // accessing camera
    mode, filter, burst, 
    // property of class
    chat) {
        this.mode = mode;
        this.filter = filter;
        this.burst = burst;
        this.chat = chat;
    }
    // create status
    createStatus() {
        // return string
        return 'status updated';
    }
}
