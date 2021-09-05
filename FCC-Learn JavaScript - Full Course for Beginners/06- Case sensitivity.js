
// Case Sensitivity in Variables.


/* 
    Variable names and functions name are case sensitive in JS.
    
    var abc;
    ABC = "I am string";        //here we're assigning a text to different variable ABC
                                //not the actual declared abc
    
    abc is not same as or equal to ABC or Abc or aBC or ABc or abC;

*/

//declaration
var stuDY;
var properCamelCase;
var TitleCase;

//Assignments 
studY = 10;                         //will throw error
propercamelcase = "a string";       //will throw error
titleCase = 111;                    //will throw error


// Its a good practice to use camelCase styling