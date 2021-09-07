// var vs let scope comparisons

/* 
when a variable is declared with var it is declared globally or locally if declared inside a function
however, the scope of let is limited to the block statement or expression where it was declared in
*/

function checkScope(){
    "use strict";
    var i = "function scope";
    let j = "function scope";
    if(true){
        i = "block scope";
        let j = "block scope";
       
        console.log("block scope i is : ", i);
        console.log("block scope j is : ", j);
    }
    
    console.log("function scope i is : ", i);
    console.log("function scope j is : ", j);
    
    return [i,j];
}
checkScope();