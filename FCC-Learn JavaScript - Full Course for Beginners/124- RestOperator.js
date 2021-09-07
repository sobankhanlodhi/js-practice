//Rest operator

/*
Use rest operator with function parameters

rest allow you to create a function that takes a variable number of arguments
rest operator is 3 dots(...)
*/

const normalSum = (function() {
    return function sum(x, y, z){
        const args = [x, y, z];
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(normalSum(1,2,3));


//with the rest operator when calling the function we can pass any no of arguments not only just three like in above
const sumWithRestOperator = (function() {
    return function sum(...args){        
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sumWithRestOperator(1,2,3));
console.log(sumWithRestOperator(1,2,3,4));  