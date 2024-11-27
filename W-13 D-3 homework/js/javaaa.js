let sandar = []

while (true) {
    let suraq = +prompt("San zhaz")
    if (suraq % 2 == 0) {
        sandar.unshift(suraq)
    }else{
        sandar.push(suraq)
    }
    if (suraq == 0) {
        break;
    }
    
}
console.log("Сандар:", sandar);
console.log("Узындыгы:", sandar.length);

