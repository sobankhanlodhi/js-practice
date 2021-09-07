// Arrow Functions with Parameters

var myConcatNormal = function(arr1,  arr2){
    return arr1.concat(arr2);   //here it concatenate the two arrays
};
console.log(myConcatNormal([1, 2], [11, 22]));

//Just like normal functins we can pass arguments/parameters to arrow functions
//when we just want to return we dont need return keyword in arrow functions
var myConcatArrow = (arr1,  arr2) => arr1.concat(arr2);
console.log(myConcatArrow([1, 2], [10, 20]));