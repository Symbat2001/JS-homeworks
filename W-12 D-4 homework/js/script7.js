function engiz() {
    let san = +prompt("Неше сан енгизесиз?")
    
    let keriSan = 0;
    let zhupSan = 0;
    let taqSan = 0;
    let i = 0;
    while (i<san) {
        let san1 = +prompt((i+1) + "-Санды енгизиниз:")

        if (san1<0) {
            keriSan++;
        }
        else if (san1 % 2 == 0) {
            zhupSan++;
        }
        else{
            taqSan++;
        }
        i++;
    }
    alert("Корытынды:\n" +
        "Кери сандар саны: " + keriSan + "\n" +
        "Жуп сандар саны: " + zhupSan + "\n" +
        "Так сандар саны: " + taqSan 
    )
}
engiz();