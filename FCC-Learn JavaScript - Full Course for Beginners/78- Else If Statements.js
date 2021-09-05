//else if statement

//for multiple conditions we use else if its a way of chaining if statements together
function testElseIf(val){
    if(val > 10){
        return "Bigger then 10";
    }else if (val > 15){
        return "Bigger then 15";
    }else{
        return "Greator then both"
    }
}

console.log(testElseIf(12));
console.log(testElseIf(15));
console.log(testElseIf(-1));