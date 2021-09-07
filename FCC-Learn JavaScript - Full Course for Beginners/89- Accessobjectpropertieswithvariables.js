//access Objects properties with variables

//brakcet notation can also be used to lookup object properties using variables

var testObj = {
    12: "Black",
    15:  "Blue",
    19: "service"    
};

var givenNO = 15;
var propVal = testObj[givenNO];

console.log(givenNO, propVal);
