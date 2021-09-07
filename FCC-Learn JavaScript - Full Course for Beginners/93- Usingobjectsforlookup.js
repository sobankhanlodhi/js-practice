//Using objects for lookup

//object is a key/value storage like a dictionary
function lookUpObjectFunc(val){
    var res = "";
    var lookup = {
        "a": "Apple",
        "b":  "Ball",
        "c": "Cat",
        "d" : "dog"
    };
    res = lookup[val];
    return res;
}
    
console.log(lookUpObjectFunc('a'));
console.log(lookUpObjectFunc('d'));