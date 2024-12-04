let artists = [
    {name: "Michael Jackson", songs: ["Smooth Criminal", "Billie Jean", "Beat it", "Earth song"]},
    {name: "Billie Eilish", songs: ["Lovely", "TV", "WildFlower", "Bad Guy"]},
    {name: "Kairat Nurtas", songs: ["Ol sen emes", "Seni suyiemin"]}
]

artists[2].songs[1] = "Baika";
console.log("Michael Jackson сонгы ани:", artists[0].songs[artists[0].songs.length - 1]);
let bill = artists[1].songs.filter(song => song.length <= 6);
console.log("Billie Eilish кыска андери:", bill);



