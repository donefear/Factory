import "./index.css";
import { ScrapWallet, PickaxeWallet, ScavengerWallet, MetalWallet, FoundryWallet, RefineryWallet, BackpackWallet, PlasticWallet, SmelterWallet, RecyclerWallet } from "./Wallet";
import { DrillHeadWallet, DrillWallet, CrystalWallet } from "./Wallet";
import { ManualLabor } from "./ManualLabor";
import { GameComponent } from "./GameComponent";
import { ScavengerGameComponent } from "./Components/ScavengerGameComponent";
import { FoundryGameComponent } from "./Components/FoundryGameComponent";
import { PlasticGameComponent } from "./Components/PlasticGameComponent";
import { CrystalGameComponent } from "./Components/CrystalGameComponent";
import { isConditionalExpression } from "../node_modules/typescript/lib/typescript";

let foundryGameComponent: FoundryGameComponent;
let scavengerGameComponent: ScavengerGameComponent;
let plasticGameComponent: PlasticGameComponent;
let crystalGameComponent: CrystalGameComponent;
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
    const RefineryCountSpan = document.getElementById("Refinery");
    const RefineryCostSpan = document.getElementById("Cost_Refinery");
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
    if (RefineryCountSpan instanceof HTMLSpanElement) {
        RefineryCountSpan.textContent = RefineryWallet.get().toString();
    }
    if (RefineryCostSpan instanceof HTMLSpanElement){
        RefineryCostSpan.textContent =  Intl.NumberFormat().format(foundryGameComponent.RefineryCost().RefineryCost);
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

    // DeepDrill
    const CrystalCountSpan = document.querySelectorAll(".Crystal");
    const DeepDrillCountSpan = document.getElementById("Drill");
    const DeepDrillCostSpan = document.getElementById("Cost_DeepDrill");
    const DrillHeadCountSpan = document.getElementById("DrillHead");
    const DrillHeadCostSpan = document.getElementById("Cost_DrillHead");
    for (const x of CrystalCountSpan) {
        x.textContent = Intl.NumberFormat().format(CrystalWallet.get());
    }
    if (DeepDrillCountSpan instanceof HTMLSpanElement) {
        DeepDrillCountSpan.textContent = DrillWallet.get().toString();
    }
    if (DrillHeadCountSpan instanceof HTMLSpanElement) {
        DrillHeadCountSpan.textContent = DrillHeadWallet.get().toString();
    }
    if (DeepDrillCostSpan instanceof HTMLSpanElement) {
        DeepDrillCostSpan.textContent =  Intl.NumberFormat().format(crystalGameComponent.DrillCost().DrillCost);
    }
    if (DrillHeadCostSpan instanceof HTMLSpanElement) {
        DrillHeadCostSpan.textContent =  Intl.NumberFormat().format(crystalGameComponent.DrillHeadCost().DrillHeadCost);
        
    }   

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


// Components. What runs every game loop!
foundryGameComponent = new FoundryGameComponent();
scavengerGameComponent = new ScavengerGameComponent();
plasticGameComponent = new PlasticGameComponent();
crystalGameComponent = new CrystalGameComponent();
const gameComponents: GameComponent[] = [
    scavengerGameComponent,
    foundryGameComponent,
    plasticGameComponent,
    crystalGameComponent
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
