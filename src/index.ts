import "./index.css";
import { ScrapWallet, PickaxeWallet } from "./Wallet";
import { ManualLabor } from "./ManualLabor";
import { GameComponent } from "./GameComponent";
import { ScavengerGameComponent } from "./Components/ScavengerGameComponent";

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

// Components. What runs every game loop!
const gameComponents: GameComponent[] = [
    new ScavengerGameComponent()
];

let gameLoopLastTime = new Date().getTime();

const gameLoop = function () {
    let doUpdateInterface = false;
    const gameLoopCurrentTime = new Date().getTime();
    const milisecondsElapsed = gameLoopCurrentTime - gameLoopLastTime;

    try {
        for (const gameComponent of gameComponents) {
            const result = gameComponent.run(milisecondsElapsed);
            if (result.UpdateInterface) {
                doUpdateInterface = true;
            }
        }

        if (doUpdateInterface) {
            UpdateInfo();
        }
    } finally {
        gameLoopLastTime = gameLoopCurrentTime;
        setTimeout(gameLoop, 500);
    }
}

gameLoop();
UpdateInfo();




























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