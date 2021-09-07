// Generate random whole numbers

//to generate whole number rather than decimal we use math.floor with math.random
//math.floor rounds down to the nearest whole number 

function randomWholeNo(){
    //here we're generating random number between 0 and 19 remeber 20 is not included
    return Math.floor(Math.random() * 20); 
}

console.log(randomWholeNo());