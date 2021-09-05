//Logical Order in If Else Statements

//Order is very important in if else statements
function wrongOrderLogic(val){
    if(val < 10){
        return "Less then 10";
    }else if (val < 5){
        return "Less then 5";
    }else{
        return "Greator then or Equal"
    }
}
console.log(wrongOrderLogic(3));


function correctOrderLogic(val){
    if(val < 5){
        return "Less then 5";
    }else if (val < 10){
        return "Less then 10";
    }else{
        return "Greator then or Equal to 10"
    }
}
console.log(testElseIf(3));
console.log(testElseIf(11));