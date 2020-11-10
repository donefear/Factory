import { ScrapWallet, PickaxeWallet } from "./Wallet";
import { ManualLabor } from "./ManualLabor";

const manualLabor = new ManualLabor();
manualLabor.updateInterface = () => UpdateInfo();

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
    }
});

function UpdateInfo() {
    const backAccountCountSpan = document.getElementById("BankAccountCount");
    const PickaxeCountSpan = document.getElementById("Pickaxes");
    if (backAccountCountSpan instanceof HTMLSpanElement) {
        backAccountCountSpan.textContent = ScrapWallet.get().toFixed(2);

    }
    if (PickaxeCountSpan instanceof HTMLSpanElement) {
        PickaxeCountSpan.textContent = PickaxeWallet.get().toString();
    }
}

const gameLoop = function () {
    try {
        UpdateInfo();
    } finally {
        setTimeout(gameLoop, 1000);
    }
}
gameLoop();




























// const gameLoop = function() {
//     try {
//         const backAccountCountSpan = document.getElementById("BankAccountCount");
//         if (backAccountCountSpan instanceof HTMLSpanElement) {
//             backAccountCountSpan.textContent = ((parseFloat(backAccountCountSpan.textContent) || 0) + 0.01).toFixed(2);
//         }
//     } finally {
//         setTimeout(gameLoop, 1000);
//     }
// }

// gameLoop();