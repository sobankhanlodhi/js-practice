//Destructing assignment : Arrays

/*
we can use destructing assignment to assign variables from arrays
    
the difference b/w destructuring object and array is that you cannot specify which element
    from array to go into a variable it just goes in order
    However to skip the element of array we have to put commas in place of skipped elements
*/

const [x, y, , z, , a] = [1, 2, 3, 4, 5, 6];
console.log(x, y, z, a);  //x=1, y=2, z=4, a=6

//we can use destructuring of array to switch the places of variables
let a = 8, b = 6;
console.log("Before destructuring--> a: ", a);
console.log("Before destructuring--> b: ", b);

(()=>{
    "use strict";
    [a, b] = [b, a]
})();
console.log("After destructuring--> a: ", a);
console.log("After destructuring--> b: ", b);