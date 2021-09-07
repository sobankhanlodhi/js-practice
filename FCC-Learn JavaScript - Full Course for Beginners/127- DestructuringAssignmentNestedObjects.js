//Destructing assignment : Nested Objects

/*
we can use destructing assignment to assign variables from nested objects
*/


const LOCAL_FORECAST = {
    today: {min: 77.5, max:83},
    tomorrow: {min: 79, max:85.6}
};

function getMaxOfTomorrow (forecast){
    "use strict";
    
    //here we destructered two times to get to the nested object
    const {tomorrow: {max :maxFcOfTomorrow}} = forecast; 
    return maxFcOfTomorrow;
}
console.log(getMaxOfTomorrow(LOCAL_FORECAST));  //85.6