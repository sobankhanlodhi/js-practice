// Mad libs game or word blanks

function wordBlanks(noun, adjective, verb, adverb){    
    var result = "";

    result += "The " + adjective + " " + noun + " " + verb + " to the store! ";
    
    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));
