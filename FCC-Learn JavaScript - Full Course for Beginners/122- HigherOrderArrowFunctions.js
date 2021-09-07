// Higher Order Arrow Functions

/*
Arrow functions work really well with high order function such as map, reduce, filter.
means mentioned (map, reduce, filter) take function as arguments for processing collection of data.

whenever function takes another function as an argument always use the arrow function
*/

//task: we want only square of integers in the array
const realNoArray = [4, 1.1, 1.1, 1.1, 6, -1, -1];
const squareList = (arr) => {
    const squareIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squareIntegers;
}
const res = squareList(realNoArray);
console.log(res);