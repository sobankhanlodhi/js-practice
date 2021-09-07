//Delete properties from objects

//with delete keyword we can delete the object properties

var dogObj = {
    "name": "Camper",
    "legs":  4,
    "tails": 1,
    "friends" : ["everyone"]
};

console.log(dogObj);
delete dogObj.friends;      //now dogObj no longer have the friends property
console.log(dogObj);