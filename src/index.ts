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
    const MetalCountSpan = document.querySelectorAll(".Metal");
    const PickaxeCountSpan = document.getElementById("Pickaxes");
    const PickaxeCostSpan = document.getElementById("Cost_Pickaxes");
    const KlickSecondCountSpan = document.getElementById("KlickSecond");
    const ScavengerCountSpan = document.getElementById("Scavenger");
    const ScavengerCostSpan = document.getElementById("Cost_Scavenger");
    const BackpackCountSpan = document.getElementById("Backpack");
    const BackpackCostSpan = document.getElementById("Cost_Backpack");
    const ScrapPerSecond = document.getElementById("ScrapPerSecond");
    const FoundryCountSpan = document.getElementById("Foundry");
    const FoundryCostSpan = document.getElementById("Cost_Foundry");
    for (const x of backAccountCountSpan) {
        x.textContent = Intl.NumberFormat().format(ScrapWallet.get());
    }
    for (const x of MetalCountSpan) {
        x.textContent = Intl.NumberFormat().format(MetalWallet.get());
    }
    if (KlickSecondCountSpan instanceof HTMLSpanElement) {
        const x = Intl.NumberFormat().format(PickaxeWallet.get()*1.5 + 1);
        KlickSecondCountSpan.textContent = x.toString();
    }
    if (ScrapPerSecond instanceof HTMLSpanElement) {
        ScrapPerSecond.textContent = Intl.NumberFormat().format(ScavengerWallet.get()*((BackpackWallet.get()||1)*1.5));
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
    if (BackpackCostSpan instanceof HTMLSpanElement) {
        
    }
    if (ScavengerCostSpan instanceof HTMLSpanElement) {
        
    }
    if (PickaxeCostSpan instanceof HTMLSpanElement) {
        
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
