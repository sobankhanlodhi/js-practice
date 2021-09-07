//Accessing nested arrays

//we use the dot and bracket notation together to access nested arrays

var myMusic  = [
    {
        "Artist": "Akon",
        "title":  "SMack that",
        "formats" : ["mp3", "mp4"],
    },  
    {
        "Artist": "Shakira",
        "title":  "waka waka",
        "formats" : ["mp3", "mp4", "avi"],
    }    
]


console.log(myMusic[1].formats[2]); //avi