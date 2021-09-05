//Comparison with logical OR Operator (||)

//to check either one thing is true we use the OR operator ||
function funcOrOperator(val){
    if(val < 10 || val>20){
        return "Outside";
    }
    return "Inside";
}

console.log(funcOrOperator(12));
console.log(funcOrOperator(5));
console.log(funcOrOperator(-1));