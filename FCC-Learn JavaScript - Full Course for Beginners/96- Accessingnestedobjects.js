//Accessing nested objects

//we use the dot and bracket notation together to access nested properties of any object

var myMusic = [
    {
        "Artist": "Akon",
        "title":  "SMack that",
        "release_year": 1999,
        "formats" : ["mp3", "mp4"],
        "gold": true
    },
    {
        "Artist": "Shakira",
        "title":  "waka waka",
        "release_year": 2015,
        "formats" : ["mp3", "mp4", "avi"],
        "gold": true
    },
    {
        "car": {
            "inside": {
                "glove box": "maps of glove box",
                "seats": 4
            },
            "outside": {
                "trunk" : "jack"
            }
        }
    }
]


console.log(myMusic[2].car.inside["glove box"]);