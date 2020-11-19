import "./index.css";
import { ScrapWallet, PickaxeWallet, ScavengerWallet, MetalWallet, FoundryWallet, BackpackWallet, PlasticWallet, SmelterWallet, RecyclerWallet } from "./Wallet";
import { ManualLabor } from "./ManualLabor";
import { GameComponent } from "./GameComponent";
import { ScavengerGameComponent } from "./Components/ScavengerGameComponent";
import { FoundryGameComponent } from "./Components/FoundryGameComponent";
import { PlasticGameComponent } from "./Components/PlasticGameComponent";
import { isConditionalExpression } from "../node_modules/typescript/lib/typescript";

let foundryGameComponent: FoundryGameComponent;
let scavengerGameComponent: ScavengerGameComponent;
let plasticGameComponent: PlasticGameComponent;
const manualLabor = new ManualLabor();
manualLabor.updateInterface = () => UpdateInfo();

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
    }
});

function UpdateInfo() {
    // player klick
    const backAccountCountSpan = document.querySelectorAll(".BankAccountCount");
    const ScrapPerSecond = document.getElementById("ScrapPerSecond");
    const PickaxeCountSpan = document.getElementById("Pickaxes");
    const PickaxeCostSpan = document.getElementById("Cost_Pickaxe");
    const KlickSecondCountSpan = document.getElementById("KlickSecond");
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
    if (PickaxeCountSpan instanceof HTMLSpanElement) {
        PickaxeCountSpan.textContent = PickaxeWallet.get().toString();
    }
    // Metal
    const MetalCountSpan = document.querySelectorAll(".Metal");
    const ScavengerCountSpan = document.getElementById("Scavenger");
    const ScavengerCostSpan = document.getElementById("Cost_Scavenger");
    const BackpackCountSpan = document.getElementById("Backpack");
    const BackpackCostSpan = document.getElementById("Cost_ScavengerBackpack");
    const FoundryCountSpan = document.getElementById("Foundry");
    const FoundryCostSpan = document.getElementById("Cost_Foundry");
    for (const x of MetalCountSpan) {
        x.textContent = Intl.NumberFormat().format(MetalWallet.get());
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
    if (FoundryCostSpan instanceof HTMLSpanElement){
        FoundryCostSpan.textContent =  Intl.NumberFormat().format(foundryGameComponent.FoundryCost().Cost);
    }
    if (BackpackCostSpan instanceof HTMLSpanElement) {
        BackpackCostSpan.textContent =  Intl.NumberFormat().format(scavengerGameComponent.BackpackCost().BackpackCost);
    }
    if (ScavengerCostSpan instanceof HTMLSpanElement) {
        ScavengerCostSpan.textContent =  Intl.NumberFormat().format(scavengerGameComponent.ScavengerCost().ScavengerCost);
        
    }
    if (PickaxeCostSpan instanceof HTMLSpanElement) {
        PickaxeCostSpan.textContent = "100";
    }
    // Plastic
    const PlasticCountSpan = document.querySelectorAll(".Plastic");
    const RecyclerCountSpan = document.getElementById("Recycler");
    const RecyclerCostSpan = document.getElementById("Cost_Recycler");
    const SmelterCountSpan = document.getElementById("Smelter");
    const SmelterCostSpan = document.getElementById("Cost_Smelter");
    for (const x of PlasticCountSpan) {
        x.textContent = Intl.NumberFormat().format(PlasticWallet.get());
    }
    if (RecyclerCountSpan instanceof HTMLSpanElement) {
        RecyclerCountSpan.textContent = RecyclerWallet.get().toString();
    }
    if (SmelterCountSpan instanceof HTMLSpanElement) {
        SmelterCountSpan.textContent = SmelterWallet.get().toString();
    }
    if (RecyclerCostSpan instanceof HTMLSpanElement) {
        RecyclerCostSpan.textContent =  Intl.NumberFormat().format(plasticGameComponent.RecyclerCost().RecyclerCost);
    }
    if (SmelterCostSpan instanceof HTMLSpanElement) {
        SmelterCostSpan.textContent =  Intl.NumberFormat().format(plasticGameComponent.SmelterCost().SmelterCost);
        
    }
    if (PickaxeCostSpan instanceof HTMLSpanElement) {
        PickaxeCostSpan.textContent = "100";
    }

    // DeepDrill

    

}

//hide metal production till atleast 100scrap/s income(100 scavengers)
function checkScrapIncome() {
    const x = document.getElementById("metalhide");
    const y = document.getElementById("plastichide");
    if (ScavengerWallet.get() >= 100){
        x.style.display = "block";
        y.style.display = "block";
    }else {
        x.style.display = "none";
        y.style.display = "none";
    }
}
foundryGameComponent = new FoundryGameComponent();
scavengerGameComponent = new ScavengerGameComponent();
plasticGameComponent = new PlasticGameComponent();
// Components. What runs every game loop!
const gameComponents: GameComponent[] = [
    scavengerGameComponent,
    foundryGameComponent,
    plasticGameComponent
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
