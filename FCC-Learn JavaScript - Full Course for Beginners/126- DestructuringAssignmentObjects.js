//Destructing assignment : Objects

/*
Use destructing assignment to assign variables from objects

its a special syntax to neatly assign value taken directly from an object to a variable    
*/

//older way
var voxel = {x: 3.6, y: 7.4, z: 6.54};

var x = voxel.x;    //assigning objects elements/properties/values to individual variables older way
var y = voxel.x;
var z = voxel.x;

//new way with destructing quicker way
const {x: a, y: b, z: c} = voxel; //a=3.6, b=7.4, c=6.54



//*** ANOTHER EXAMPLE //***
const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};
function getTempOfTomorrow (avgTemperatures){
    "use strict";
    const {tomorrow: tempOfTomorrow} = avgTemperatures; //here we're getting the tomorrow field of our object and assigning it to const tempOfTomorrow
    return tempOfTomorrow;
}
console.log(getTempOfTomorrow(AVG_TEMPERATURES));