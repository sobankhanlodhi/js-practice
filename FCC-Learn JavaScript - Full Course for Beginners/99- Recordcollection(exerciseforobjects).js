//Record collection

var collection  = {
    "0076" : {
        "Name": "Soban",
        "Session Start":  2017,
        "Session End":  2021,
        "FYP" : "ECARE"
    },  
    "0009" : {
        "Name": "TJ",
        "Session Start":  2017,
        "Session End":  2021,        
        "FYP" : []
    },
    "0012":{
        "Name" : "M"
    }
}

//here we're copying the original object before any changes
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value){
    if(value===""){
        delete collection[id][prop];
    }else if(prop === "FYP"){
        collection[id][prop] = collection[id][prop] || [];      //way of creating a property if its not exist already
        collection[id][prop].push(value);
    }else{
        collection[id][prop] = value;
    }
    return collection;
}

console.log(updateRecords("0012", "Name", "Moeen"));
console.log(updateRecords("0076", "Name", "Soban Khan"));
