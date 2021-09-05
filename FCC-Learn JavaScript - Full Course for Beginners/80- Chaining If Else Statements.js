//Chaining If Else Statements

function testSize(val){
    if(val < 5){
        return "Tiny";
    }else if(val < 10){
        return "Small";
    }else if(val < 15){
        return "Medium";
    }else if(val < 20){
        return "Large";
    }else{
        return "Huge"
    }
}
console.log(testSize(3));
console.log(testSize(23));
