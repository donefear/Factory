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

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
    }
});


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
        if(doUpdateInterface){
            for (const gameComponent of gameComponents) {
                gameComponent.UpdateInterface();
            }        
            checkScrapIncome();        
        }
    } finally {
        gameLoopLastTime = gameLoopCurrentTime;
        setTimeout(gameLoop, 500);
    }
}

gameLoop();
