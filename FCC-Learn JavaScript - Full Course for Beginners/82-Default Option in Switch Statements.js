//Default Option in Switch Statements

//we have a default case in switch statements if all cases failed then the default case get executed
//just like else statement in the if else statement
function switchFuncwithDefault(val){
    switch(val){
        case 1:
            return "Alpha";
            break;
        case 2:
            return "Beta";
            break;
        case 3:
            return "Gemma";
            break;
        case 4:
            return "Delta";
            break;
        default:
            return "Nothing Corrected passed";
            break;
    }
}

console.log(switchFuncwithDefault(1));
console.log(switchFuncwithDefault(2));
console.log(switchFuncwithDefault("c"));
console.log(switchFuncwithDefault("b"));
console.log(switchFuncwithDefault("a"));
