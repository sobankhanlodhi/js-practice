//export

/*
Use export to reuse a code block
    you export functions and variables from one file so that you can import them into another
    file
*/

const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//to export the above function we can do like:
export { capitalizeString };

//to eport a variable
export const myNameVar = "Soban Khan";

//Now we can import these in any file