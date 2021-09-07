//default parameter

/*
To create flexible functions we can use default parameter
when argument is not specified or undefined the default paramter play its role
*/

const increment = (function(){
    return function increment(number, value=1){     //here we set the default = 1
        return number + value
    }
})();
console.log(increment(5, 2));
console.log(increment(5));