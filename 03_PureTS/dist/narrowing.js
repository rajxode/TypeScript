"use strict";
function getVal(val) {
    // return val.toLowerCase();        // we cannot do this since the type of val is not fixed
    if (typeof val === 'string') {
        // now we know that here that val is string , hence it will work
        return val.toLowerCase();
    }
    return val + 3;
}
function getId(id) {
    if (!id) {
        // here if user didn't provide an id , then return
        console.log('Please give the Id');
        return;
    }
    // else return the id
    return id.toLowerCase();
}
// in this function the parameter can be anything string , array or null
function printAll(strs) {
    // checking whether null or not
    if (strs) {
        // if not null
        // then check for array , (array type => object )
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
            // check for normal string
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
// we cannot direct access the property isAdmin from parameter , therefore using 'in' keyword
function checkIsAdmin(user) {
    if ("isAdmin" in user) {
        return user.isAdmin;
    }
    return false;
}
