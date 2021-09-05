// Global Scope vs Local Scope

var cloth = "T-Shirt";  //global scope

function func1(){
    var cloth = "Coat"; //local scope variable with the same name of global scope
    return cloth;       //here it return the local initalized cloth value because it give presedence to the local scope
}

function func2(){     
    return cloth;   //here it return the global declared cloth value
}

console.log(cloth);     //T-Shirt
console.log(func1());   //Coat
console.log(func2());   //T-Shirt