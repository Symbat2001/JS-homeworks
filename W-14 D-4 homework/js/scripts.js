let tapsyrma = [
    {
        respon: "Tangy as ishu", 
        orynndau: true,
    },
    {
        respon: "Sabakka baru",
        orynndau: true,
    },
    {
        respon: "Dostarmen seruendeu",
        orundau: false,
    },
    {
        respon: "tuski as daiyndau",
        orundau: false,
    },
    {
        respon: "Ui zhinau",
        orynndau: true,
    }
]
function korset(respons) {
    let esepter = respons.filter(respon => !respon.orundau); 
    if (esepter.length > 0) {
        alert(
            "Орындалмаған тапсырмалар:\n" +
            esepter.map(respon => `- ${respon.respon}`).join("\n")
        );
    } else {
        alert("Барлық тапсырмалар орындалған!");
    }
}
korset(tapsyrma);