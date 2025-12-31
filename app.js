window.addEventListener("load", () => {
    const countdownContainer = document.querySelector("#countdown");
    const targetDate = new Date("2026-01-01T00:00:00-03:00");

    let timerId;

    function updateCountdown() {
        let ts = countdown(new Date(), targetDate);     

        if (ts.value <= 0) {
            clearInterval(timerId);
            countdownContainer.innerHTML = `<span>00</span>:<span>00</span>:<span>00</span>`;
            return;
        }

        const hours = ts.hours.toString().padStart(2, "0");
        const minutes = ts.minutes.toString().padStart(2, "0");
        const seconds = ts.seconds.toString().padStart(2, "0");

        countdownContainer.innerHTML = `<span>${hours}</span>:<span>${minutes}</span>:<span>${seconds}</span>`;
    }

    // Actualiza el countdown cada segundo
    timerId = setInterval(updateCountdown, 1000);

    // Llama a la función una vez para inicializar
    updateCountdown();
});
