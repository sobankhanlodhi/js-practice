// Nested for loops

/*
iterate through the contents of the nested array and multiply all
*/

var myArr = [[2, 2], [2, 2], [2, 2, 2]];
var arrProduct = 1;

function multiplyAll(givenArr){
    for(var i = 0; i < givenArr.length; i++){
        for(var j=0; j < givenArr[i].length; j++){
            arrProduct *= givenArr[i][j];
        }
    }
    return arrProduct;
}

console.log(multiplyAll(myArr));      //128