//Comparison with Equality Operator (==)

//Equality operator are used with if statements and it return the boolean value True or false

function funcEqualOperator(val){
    if(val == '12'){
        return "It is Equal";
    }
    return "Not Equal";
}

console.log(funcEqualOperator(12));
console.log(funcEqualOperator(10));