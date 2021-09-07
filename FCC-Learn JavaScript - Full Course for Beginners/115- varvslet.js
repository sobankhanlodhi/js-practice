// var vs let

/* 
let and const are different then var
    1: let and const are introduced in es6
    2: let does not let you declare a variable twice
*/

var catName = "Sushi";
var catName = "Nanny";
console.log(catName);

let dogName = "Jackson";
let dogName = "Jackky";   //Uncaught SyntaxError: Identifier 'dogName' has already been declared
console.log(dogName);

let fishName = "maggie";
fishName = "momii";   //here it will not throw error because we're just initalizing it
console.log(fishName);

// "use strict" are used at the top of the js file because it help us catching the error