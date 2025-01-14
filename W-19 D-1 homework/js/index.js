const startButton = document.getElementById("startButton");
const timerDisplay = document.getElementById("timer");

let countdownInterval; 
startButton.addEventListener("click", () => {
    clearInterval(countdownInterval); 
    let countdown = 5; 

    timerDisplay.textContent = `Ýaqyt qaldy: ${countdown}`;
    
    countdownInterval = setInterval(() => {
        countdown--;
        if (countdown > 0) {
            timerDisplay.textContent = `Ýaqyt qaldy: ${countdown}`;
        } else {
            clearInterval(countdownInterval); 
            timerDisplay.textContent = "Ýaqytyńyz ayaqtaldy! 😊";
        }
    }, 1000);
});