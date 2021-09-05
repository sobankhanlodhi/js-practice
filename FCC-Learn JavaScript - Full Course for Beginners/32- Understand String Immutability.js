// Understand String Immutability

var myStr = "Boban Khan";

myStr[0] = "S"; //here it will throw an error because string are immutable we cannot change individual characters of strings

// To change the string we've to re assign it with the desired text
myStr = "Soban Khan";

console.log(myStr);
