//Comparison with logical AND Operator (&&)

//to check two things true at the same time we use AND (&&) operator with if statments
function funcAndOperator(val){
    if(val <= 10 && val>0){
        return "Its satisfied";
    }
    return "No its not satisfying our condition";
}

console.log(funcAndOperator(12));
console.log(funcAndOperator(5));
console.log(funcAndOperator(-1));