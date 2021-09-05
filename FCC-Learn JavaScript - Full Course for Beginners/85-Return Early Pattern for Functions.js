//Return Early Pattern for Functions

//You can return early from the function with the return statement

function earlyReturn(val1, val2){
    if(val1 <0 || val2<0){
        return undefined;
    }

    return val1 * val2;
 }
 
 console.log(earlyReturn(-5,12));
 console.log(earlyReturn(2,2));