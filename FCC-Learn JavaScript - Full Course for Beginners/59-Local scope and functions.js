// Local Scope and functions

/* 
Scope: it refers to the visibility of variables
        Variables which are defined inside the function are known as local scope        
*/

function func1(){
    var localVarOfFunc1 = 5;
    console.log(localVarOfFunc1);
}

func1();
console.log(localVarOfFunc1);   //Here it will throw an error because we're trying to access the local scoped variable