// Iterate Through an Array with a For Loop

/*
iterate through the contents of the array and count the total
*/

var myArr = [10, 10, 10, 10];
var arrTotal = 0;
for(var i = 0; i < myArr.length; i++){
    arrTotal += myArr[i];
}

console.log(arrTotal);      //40