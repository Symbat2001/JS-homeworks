let san = +prompt("Сан жаз");
let i = 1;
let ulken = null;
let kishi = null;

while (i<=san ) {
    if (i%5==0) {
        if (kishi==null) {
            kishi = i;
        }
            ulken = i;
    }
    i++;
}

if (kishi != null && ulken != null) {
    console.log("Ен киши сан: " + kishi);
    console.log("Ен улкен сан: " + ulken);
}
else{
    alert("Сиз талапка сай жасамадыныз!")
}