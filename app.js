window.addEventListener("load", () => {
    const countdownContainer = document.querySelector("#countdown");
    const targetDate = new Date(1735700400000);
    let hours;
    let minutes;
    let seconds;

    function updateCountdown() {
        let ts = countdown(targetDate);
        hours = ts.hours.toString().padStart(2, "0");
        minutes = ts.minutes.toString().padStart(2, "0");;
        seconds = ts.seconds.toString().padStart(2, "0");;
        countdownContainer.innerHTML = `<span>${hours}</span>:<span>${minutes}</span>:<span>${seconds}</span>`;
    }

    // Actualiza el countdown cada segundo
    setInterval(updateCountdown, 1000);

    // Llama a la función una vez para inicializar
    updateCountdown();
});