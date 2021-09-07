//Write concise declarative functions

/*
an object can contain a function
*/

//long way of putting a function within an object
const biCycle = {
    gear: 2,
    setGear: function(newGear){
        "use strict"
        this.gear = newGear;
    }    
};
biCycle.setGear(3);
console.log(biCycle.gear);
    

//short way of putting a function within an object without using the keyword function
const biCycle_v2 = {
    gear: 2,
    setGear(newGear){
        "use strict"
        this.gear = newGear;
    }    
};
biCycle_v2.setGear(4);
console.log(biCycle_v2.gear);