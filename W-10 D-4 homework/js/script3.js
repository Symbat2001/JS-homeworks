let a = prompt("Биринши санды енгизиниз")
let b = prompt("Екинши санды енгизиниз")
let c = prompt("Ушинши санды енгизиниз")

let option;

if (a >= b && a >=c) {
    option = "a"
}
else if (b >= a && b >= c) {
    option = "b"
}
else{
    option = "c"
}


switch (option) {
    case "a":
        alert("Ен улкен сан: " + a)
        break;
    case "b":
        alert("Ен улкен сан: " + b)
        break;
    case "c":
        alert("Ен улкен сан: " + c)
        break;
    default: 
        alert("Кате тердиниз")
}