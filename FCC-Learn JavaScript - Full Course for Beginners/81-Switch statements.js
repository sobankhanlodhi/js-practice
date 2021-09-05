//Switch Statements

//we can use switch statements instead of chained if else statements
//switch statements use the strict equality operator when checking or evaluating cases means it does not do the type conversion
function switchFunc(val){
    switch(val){
        case '1':
            return "Alpha";
            break;
        case 2:
            return "Beta";
            break;
        case 3:
            return "Gemma";
            break;
        case 4:
            return "Delta";
            break;
    }
}

console.log(switchFunc(1));
console.log(switchFunc(2));
console.log(switchFunc(3));
console.log(switchFunc(4));
console.log(switchFunc(5));
