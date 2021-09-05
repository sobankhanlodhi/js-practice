// Global Scope and functions

/* 
Scope: it refers to the visibility of variables
        Variables which are defined outside the function are known as global scope
                global means it can be seen everywhere inside your JS code inside functions too
*/

var myGlobal = 10;

function func1(){
    var opsVar = 5;
    //or
    newGlobal = 12;     //we can also declare global scope variable without using the var keyword

}

function func2(){
    var output = " ";
    if(typeof myGlobal!= undefined){
        console.log("func2 is accessing the global variable");
        output += myGlobal;
        output += " | ";
        console.log(output);
    }
    if(typeof newGlobal!= undefined){
        console.log("func2 is accessing the func1 newGlobal variable");
        output += newGlobal;
        output += " | ";
        console.log(output);
    }
    if(typeof opsVar!=undefined){
        console.log("func2 is accessing the func1 opsVar variable");
        output += opsVar;
        output += " | ";
        console.log(output);
    }
    console.log("Finally output is set to: ", output);
}

func1();
func2();