//Comparison with In-Equality Operator (!=)

//In-Equality operator also does the type conversion when comparing/checking

function funcInEqualOperator(val){
    if(val != '12'){
        return "It is not Equal";
    }
    return "Equal";
}

console.log(funcInEqualOperator(12));
console.log(funcInEqualOperator(10));