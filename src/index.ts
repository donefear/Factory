import "./index.css";
import { ScrapWallet, PickaxeWallet, ScavengerWallet, MetalWallet, FoundryWallet, BackpackWallet } from "./Wallet";
import { ManualLabor } from "./ManualLabor";
import { GameComponent } from "./GameComponent";
import { ScavengerGameComponent } from "./Components/ScavengerGameComponent";
import { FoundryGameComponent } from "./Components/FoundryGameComponent";

const manualLabor = new ManualLabor();
manualLabor.updateInterface = () => UpdateInfo();

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
    }
});

function UpdateInfo() {
    const backAccountCountSpan = document.querySelectorAll(".BankAccountCount");
    const PickaxeCountSpan = document.getElementById("Pickaxes");
    const KlickSecondCountSpan = document.getElementById("KlickSecond");
    const ScavengerCountSpan = document.getElementById("Scavenger");
    const BackpackCountSpan = document.getElementById("Backpack");
    const ScrapPerSecond = document.getElementById("ScrapPerSecond");
    const MetalPerSecond = document.getElementById("MetalPerSecond");
    const FoundryCountSpan = document.getElementById("Foundry");
    const MetalCountSpan = document.querySelectorAll(".Metal");
    for (const x of backAccountCountSpan) {
        x.textContent = Intl.NumberFormat().format(ScrapWallet.get());
    }
    if (KlickSecondCountSpan instanceof HTMLSpanElement) {
        const x = Intl.NumberFormat().format(PickaxeWallet.get()*1.5 + 1);
        KlickSecondCountSpan.textContent = x.toString();
    }
    if (ScrapPerSecond instanceof HTMLSpanElement) {
        ScrapPerSecond.textContent = Intl.NumberFormat().format(ScavengerWallet.get()*((BackpackWallet.get()||1)*1.5));
    }
    if (MetalPerSecond instanceof HTMLSpanElement) {
        //NO CLUE !!!!
    }
    if (PickaxeCountSpan instanceof HTMLSpanElement) {
        PickaxeCountSpan.textContent = PickaxeWallet.get().toString();
    }
    if (ScavengerCountSpan instanceof HTMLSpanElement) {
        ScavengerCountSpan.textContent = ScavengerWallet.get().toString();
    }
    if (BackpackCountSpan instanceof HTMLSpanElement) {
        BackpackCountSpan.textContent = BackpackWallet.get().toString();
    }
    if (FoundryCountSpan instanceof HTMLSpanElement) {
        FoundryCountSpan.textContent = FoundryWallet.get().toString();
    }
    for (const x of MetalCountSpan) {
        x.textContent = Intl.NumberFormat().format(MetalWallet.get());
    }
}



//hide metal production till atleast 100scrap/s income(100 scavengers)
function checkScrapIncome() {
    const x = document.getElementById("metalhide");
    if (ScavengerWallet.get() >= 100){
        x.style.display = "block";
    }else {
        x.style.display = "none";
    }
}

// Components. What runs every game loop!
const gameComponents: GameComponent[] = [
    new ScavengerGameComponent(),
    new FoundryGameComponent()
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
        checkScrapIncome();
    }
}

gameLoop();
UpdateInfo();
