//Comparison with Strict Equality Operator (===)

//Strict Equality operator works same as equality operator but it does not (type convert) convert the 
//values before checking

function funcStrictEqualOperator(val){
    if(val === '12'){
        return "It is Equal";
    }
    return "Not Equal";
}

console.log(funcStrictEqualOperator(12));
console.log(funcStrictEqualOperator('12'));
console.log(funcStrictEqualOperator(10));