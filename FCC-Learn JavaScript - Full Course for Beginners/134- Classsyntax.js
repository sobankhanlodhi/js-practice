//class syntax

/*
Use class syntax to define a constructor function
es6 provide a way to create objects using the class keyword
*/

//older way with a constructor function
var spaceShuttle = function(targetPlanet) {
    this.targetPlanet = targetPlanet;
};
var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet);
    

//class syntax replaces the constructor function creation
class spaceShuttle_v2 {
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet;
    }
}


//another example
function makeClass(){
    class Vegetable{
        constructor(name){
            this.name = name;
        }
    }
    return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);