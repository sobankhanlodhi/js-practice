//Getters and Setters

/*
Use getters and setters to control access to an object
with the class object you want to obtain a value from the object and set a value of property
within an object, this is often called getters and setters
*/

class Book {
    constructor(author){
        this.author = author;
    }

    //getter - it simply return the value of objects private variable to the user without directly accessing the variable
    get writer(){
        return this._author;    //whenever you use _ before a variable its mean it is private variable
                                //mean you cant access outside the scope or class 
    }    

    //setter
    set writer(updatedAuthor){
        this._author = updatedAuthor;
    }    
}

//another example
function makeClass() {
    class Thermostat{
        constructor(temp){
            this._temp = 5/9 * (temp - 32);
        }
        
        get temperature(){
            return this._temp;
        }
        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;     //whenever theres no parenthesis it means its a variable or a object property
console.log(temp);