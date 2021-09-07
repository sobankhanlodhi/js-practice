// Mutate an Array Declared with const

/* 
you cannot reassign a variable that is declared with const same goes for the const array but
you can still
mutate an const array by updating the array content with the bracket notation
*/

const S_ARR = [5, 7, 2];
function editInPlace(){
    "use strict";
    
    //S_ARR = [2, 2, 2];  //here we'll get an error because we're trying to re-assign const array
    console.log("Before: " , S_ARR);
    S_ARR[0] = 11;
    S_ARR[1] = 22;
    S_ARR[2] = 33;

    console.log("After: " , S_ARR);
}
editInPlace();