//Spread operator

/*
Use the spread to evaluate arrays in place

spread operator looks exactly same as rest operator 3 dots (...)
    but it expands an already existing array or you can say spread out an array
    it takes an array and spread it out its individual parts

    we can use spread in an argument to a function or in an array literal
*/

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function(){
    arr2 = [...arr1];
    arr1[5] = 'JUNE';
})();
console.log(arr2);
console.log(arr1);