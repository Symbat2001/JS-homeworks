
let esim = prompt("Студент атын жаз:");
let language = prompt("Студент кай тилде сойлейди? (kazakh/english/russian");


function kazakh() {
    alert("Салем! Калын калай?")
}

function english() {
    alert("Hello! How are you?")
}

function russian() {
    alert("Привет! Как дела?")
}


function salemdesu(){
    if (language == "kazakh") {
        kazakh();
    }else if (language == "english") {
        english();
    }else if (language == "russian") {
        russian();
    }else{
        alert("Сиз тандаган тил жок!")
    }
}
salemdesu();

