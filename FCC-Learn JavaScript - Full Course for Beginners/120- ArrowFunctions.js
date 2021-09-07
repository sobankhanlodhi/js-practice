// Arrow functions

//Use arrow functions to write consice Anonymous functions

//Anonymous functions does not have a name
var magic = function(){
    return new Date();
}

//whenever we have a Anonymous functions we can shorten it with the help of arrow function
var magic = () => {
    return new Date();
}

//when we want to return only one value we can more shorten arrow function
var magic = () => new Date();
console.log(magic);