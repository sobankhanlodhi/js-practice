//Add new properties to objects

//we can add new properties with dot notation or bracket notation to an object

var dogObj = {
    "name": "Camper",
    "legs":  4,
    "tails": 1,
    "friends" : ["everyone"]
};

console.log(dogObj);
dogObj.bark = true;   //here we add the new property/key named bark with value true with dot notation
console.log(dogObj);

dogObj["bark style"] = "Woof woof!";   //here we add the new property/key named "bark style" with value "woof woof!" with bracket notation
console.log(dogObj);
