// const keyword

/* 
declare a read only variable with the const keyword
    const is another way of declaring variable
    it has all the features of let but it is also read only
    you cannot reassign a const

if you're sure that you never want to Re-assign a variable always use const 
its a good practice and use variable name as capital letters
*/

function printManyTime(str){
    "use strict";
    
    var sentence = str + " is cool !";
    sentence = str + " is amazing ! ";

    const sentence_1 = str + " is cool !!! ";
    sentence_1 = str + " is cool !!! "; //here we'll get an error because sentence_1 is declared with const keyword so it become read only
    for(var i = 0; i < str.length; i++){
        console.log(sentence);
    }
}
printManyTime("Soban");