let soccers = ["Ronaldo", "Zidane", "Neymar", "Benzema"]

soccers[1] = "Messi"

let newsoccers = ["Mbappe", "Maradona"]

for (let i = 0; i < newsoccers.length; i++) {
    console.log(newsoccers[i]);
}

if (newsoccers.length > 5) {
    alert("Kop");
}
else{
    alert("Az")
}

console.log(soccers);
