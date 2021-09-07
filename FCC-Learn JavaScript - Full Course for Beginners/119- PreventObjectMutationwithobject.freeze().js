// Prevent Object Mutation with object.freeze()

/* 
previously we see we can mutate const array element with the bracket notation and we can 
mutate const object with dot notation too, TO AVOID any of the item of the object to change
we use the object.freeze()
*/

function freezeObj(){
    "use strict";
    
    const MATH_CONSTANT = {
        PI : 3.14
    };
    
    Object.freeze(MATH_CONSTANT);    //here we frozen the object now it cannot be changed even with dot or bracket notation

    try {
        MATH_CONSTANT.PI = 99;
    } catch (err){
        console.log(err);        
    }

    return MATH_CONSTANT.PI;
}

const PI = freezeObj();
console.log(PI);