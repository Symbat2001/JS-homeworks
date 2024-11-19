
function compareWords() {
    let soz1 = prompt("1-inshi sozdi zhaz").toLowerCase();
    let soz2 = prompt("2-inshi sozdi zhaz").toLowerCase();
    if (soz1==soz2) {
        alert("Создер бирдей");
    }else{
        alert("Создер артурли");
    }
}
compareWords();