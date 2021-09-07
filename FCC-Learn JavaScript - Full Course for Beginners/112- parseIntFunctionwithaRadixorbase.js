// parseInt Function with a Radix or base

// radix specifies the base of the number in the string such as base 2, 7 etc
// default base is 10 and other commonly used are base 2 (binary)

function convertToIntwithRadix(str){    
    return parseInt(str, 2);    //here we're converting binary to integer
}

console.log(convertToIntwithRadix("10011"));      //19 