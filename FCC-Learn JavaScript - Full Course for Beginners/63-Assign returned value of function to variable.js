// Assign returned value of function to variable

var changed = 0;
function addFive(num){
    num += 5;
    return num;
}

changed = addFive(5);
console.log(changed);