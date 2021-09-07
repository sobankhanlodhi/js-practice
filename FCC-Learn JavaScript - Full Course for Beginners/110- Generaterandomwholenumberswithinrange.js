// Generate random whole numbers within a range

function ourRandomRange(minNo, maxNo){
    
    //here we're generating random number between the given range
    return Math.floor(Math.random() * (maxNo - minNo + 1)) + minNo; 
}

console.log(ourRandomRange(5,15));