// Stand in line - means we're simulating Queue DS (FIFO)

function nextInLine(arr, item){
    
    arr.push(item);          //we're addding the item to the array end with push();
    
    return arr.shift();     //we're removing the first item of array with shift();
}

var testArr = [1, 2, 3, 4, 5];


//JSON.stringify is used to change the array into string
console.log("Before : " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After : " + JSON.stringify(testArr));