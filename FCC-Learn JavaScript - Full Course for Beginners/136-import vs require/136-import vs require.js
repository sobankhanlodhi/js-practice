//Import vs Require

/*
Understand the differences between import and require
In past people use require mostly to import code and other from files
    but now we have import and export
        you can export code in one file and import it another file 
            it also allow you to only import certain functions from a file or certain variables
*/

import { capitalizeString } from "./136-string_function";
const cap = capitalizeString("hello world");
console.log(cap);