//Multiple Identical Options in Switch Statements

//when multiple input's answer is same then we have a shortcut in switch statment to 
//handle their cases

function switchWithSameOutputs(val){
    switch(val){
        case 1:
        case 2:
        case 3:
            return "Low";
            break;
        case 4:
        case 5:
        case 6:
            return "Mid";
            break;
        case 7:
        case 8:
        case 9:
            return "High";
            break;
        default:
            return "Out of range";
            break;
    }
}

console.log(switchWithSameOutputs(1));
console.log(switchWithSameOutputs(2));
console.log(switchWithSameOutputs(4));
console.log(switchWithSameOutputs(6));
console.log(switchWithSameOutputs(8));
console.log(switchWithSameOutputs(9));
console.log(switchWithSameOutputs("c"));
