//Destructuring Assignment to Pass an Object

//we can use destructuring assignment to pass an object as a functions parameter

const stats = {
    max: 56.51,
    standard_deviation: 4.24,
    median: 34.41,
    mode: 23.22,
    min: -0.75,
    average: 32.32
};
const half = (function(){
    return function half(stats){
        return (stats.max + stats.min) / 2.0;   //here we're using just stats.max and stats.min with the help of entire object
    }
})();
console.log(stats);
console.log(half(stats));       //here we're passing the whole stats object

//instead of accessing the object property with the entire object we destruct our needed field of object
//this is commonly used in API calls or when getting information from an AJax request or API request
const half_v_two = (function(){
    return function half_v_two({max, min}){
        return (max + min) / 2.0;   //here we're using just using the max and min after get destructed from the arguments
    }
})();
console.log(stats);
console.log(half_v_two(stats));       //here we're passing the whole stats object