function generatePinCode() {
    const pin = Math.floor(1000 + Math.random() * 9000).toString();
    document.getElementById('pin-code').textContent = pin;
}

function startCountdown(duration) {
    let countdownElement = document.getElementById('countdown');
    let timer = duration, minutes, seconds;
    setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        seconds = seconds < 10 ? '0' + seconds : seconds;

        countdownElement.textContent = timer;

        if (--timer < 0) {
            timer = duration;
            generatePinCode();
        }
    }, 1000);
}

document.addEventListener('DOMContentLoaded', (event) => {
    generatePinCode();  // Generate the first PIN code immediately
    startCountdown(300);  // Start the countdown for 5 minutes (300 seconds)
});