//Profile lookup - exercise

var contacts = [
    {
        "firstName": "Soban",
        "lastName": "Khan",
        "rollNo":   "0076",
        "likes" : ["sleeping", "farm house"]
    },
    {
        "firstName": "T",
        "lastName": "J",
        "rollNo":   "0009",
        "likes" : ["coding", "marriage"]
    }
];

function lookUpProfile(name, prop){
    for(var i=0; i < contacts.length; i++){
        if(contacts[i].firstName === name){
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact list"
}

var data = lookUpProfile("Soban", "likes");
console.log(data);