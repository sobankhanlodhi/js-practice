//Comparison with Strict In-Equality Operator (!==)

//Strict In-Equality is opposite of strict equality operator & it does not does the type conversion

function funcStrictInEqualOperator(val){
    if(val !== '12'){
        return "It is not Equal";
    }
    return "Equal";
}

console.log(funcStrictInEqualOperator(12));
console.log(funcStrictInEqualOperator('12'));
console.log(funcStrictInEqualOperator(10));