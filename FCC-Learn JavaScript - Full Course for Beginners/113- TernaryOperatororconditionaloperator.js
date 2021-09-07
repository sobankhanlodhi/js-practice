// ternary operator

/* 
its like a one line if else expression
syntax is like:
        condition ? statement-if-true : statement-if-false;
*/

function checkEqual(a, b){    
    return a===b ? "It is equal" : "Not equal"
}

console.log(checkEqual(5, 1));
console.log(checkEqual(5, 5));