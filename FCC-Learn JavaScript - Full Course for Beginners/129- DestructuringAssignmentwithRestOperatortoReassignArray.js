//Destructuring Assignment with Rest Operator to Reassign Array

const source = [1,2,3,4,5,6,7,8,9,10];

//return the array with the first two elements removed
function removeFirstTwo(list){
    const [,, ...arr] = list;
    return arr;
}
const arr = removeFirstTwo(source);
console.log("arr:", arr);
console.log("source: ", source);