// Count Backwards With a For Loop

/*
to count backward we can initalize it from the end and then going back to start
*/

var myArr = []

for(var i = 10; i > 0; i-=2){
    myArr.push(i);
}

console.log(myArr);