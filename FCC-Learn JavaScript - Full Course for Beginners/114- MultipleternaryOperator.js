// Multiple ternary operator

/* 
you can nest them more conditions with ternary operator
*/

function checkSign(num){    
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

console.log(checkSign(5));
console.log(checkSign(0));
console.log(checkSign(-1));