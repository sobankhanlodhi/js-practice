//Template literals

/*
Create strings using template literals
    TEMPLATE literals are special kind of string that makes creating complex strings easier
    we use ` ` backticks to create it
*/

const person = {
    name: "Soban",
    age: 24
};
//below is a template literal with multi-line and string interpolation
const greet = `Hello, my name is ${person.name}!
                and i am ${person.age} years old`;
console.log(greet);


/*
task: return the array like if called makeList(result.failure):
    [
        '<li class="text-warning">no-var</li>',
        '<li class="text-warning">var-on-top</li>',
        '<li class="text-warning">linebreak</li>'
    ]
*/
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-func"],
    failure: ["no-var", "var-on-top", "linebreak"],
    success: ["id-blacklist", "no-dup-keys"]   
};
function makeList(arr){
    const resultDisplayArray = [];
    for(let i=0; i<arr.length; i++){
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    return resultDisplayArray;
}
console.log(makeList(result.failure));