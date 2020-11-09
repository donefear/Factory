const gameLoop = function() {
    try {
        const backAccountCountSpan = document.getElementById("BankAccountCount");
        if (backAccountCountSpan instanceof HTMLSpanElement) {
            backAccountCountSpan.textContent = ((parseFloat(backAccountCountSpan.textContent) || 0) + 0.01).toFixed(2);
        }
    } finally {
        setTimeout(gameLoop, 1000);
    }
}

gameLoop();