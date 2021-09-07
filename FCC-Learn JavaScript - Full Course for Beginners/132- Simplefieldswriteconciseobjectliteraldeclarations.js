//Write concise object literal declarations using Simple fields

/*
es6 added easily support to define object literal
*/

//the arrow function take in 3 variables and its returning an object with the values
//are those which we're passing in arguments
const createPerson = (name, age, gender) => {
    return {
        name: name,
        age: age,
        gender: gender
    };
};
console.log(createPerson("Soban",24, "Male"));
    

//we can simply achieve this in one line and avoid repetition
//if you know that the passed in variable are same as the object key and value
const createPerson_v2 = (name, age, gender) => ({name, age, gender});
console.log(createPerson_v2("Sobi",24, "Male"));