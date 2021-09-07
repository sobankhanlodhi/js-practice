//access Objects properties with bracket notation.

//other way to access object properties is using bracket notation
//it can be used when the property name contain or have space in it

var testObj = {
    "my hat": "Black",
    "my shirt":  "Blue",
    "my shoes": "service"    
};

var hatVal = testObj["my hat"];
var shoeVal = testObj["my shoes"];

console.log(hatVal, shoeVal);
