//Testing objects for properties

//we can check if object has having the property or not with
//hasOwnProperty() method

var myObj = {
    "a": "Apple",
    "b":  "Ball",
    "c": "Cat",
    "d" : "dog"
};

function checkObj(givenProp){    
    if(myObj.hasOwnProperty(givenProp)){
        return myObj[givenProp];
    }else{
        return "Not Found"
    }
}
    
console.log(checkObj('a'));
console.log(checkObj('e'));