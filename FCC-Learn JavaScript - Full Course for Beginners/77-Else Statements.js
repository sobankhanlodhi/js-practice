//Else statement

//when if condition is not evaluated then else part is executed
function testElse(val){
    if(val > 10){
        return "Bigger then 10";
    }else{
        return "Lesser then 10";
    }
}

console.log(testElse(12));
console.log(testElse(5));
console.log(testElse(-1));