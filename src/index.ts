const gameLoop = function() {
    try {
        const backAccountCountSpan = document.getElementById("BankAccountCount");
        if (backAccountCountSpan instanceof HTMLSpanElement) {
            backAccountCountSpan.textContent = ((parseInt(backAccountCountSpan.textContent) || 0) + 1).toString();
        }
    } finally {
        setTimeout(gameLoop, 1000);
    }
}

gameLoop();