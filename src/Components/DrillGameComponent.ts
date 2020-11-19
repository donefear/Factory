import { ComponentResult, GameComponent } from "../GameComponent";
import { MetalWallet, ScrapWallet, CrystalWallet, DrillWallet, DrillHeadWallet } from "../Wallet";

const BaseCost = 100000;    
const DrillCost = BaseCost*(DrillWallet.get()*1.15 || 1);
const DrillHeadCost = BaseCost*(DrillHeadWallet.get()*1.15 || 1);

export class CrystalGameComponent implements GameComponent {
    constructor() {
        document.getElementById("BuyDrill").addEventListener("click", () => this.onClickBuyDrill())
        document.getElementById("BuyDrillHead").addEventListener("click", () => this.onClickBuyDrillHead())
    }

    

    onClickBuyDrill() {      
        if (MetalWallet.tryRemove(DrillCost)) {
            DrillWallet.add();
        }
    }

    public DrillCost() {
        return {
            DrillCost
        }
    }

    onClickBuyDrillHead() {      
        if (MetalWallet.tryRemove(DrillHeadCost)) {
            DrillHeadWallet.add();
        }
    }

    public DrillHeadCost() {
        return {
            DrillHeadCost
        }
    }

    run(milisecondsElapsed: number): ComponentResult {
        if(DrillWallet.get() != 0){
            let drillhead = 1;
            const drill = DrillWallet.get();
            if (DrillWallet.get() != 0){
                const drillHead = DrillHeadWallet.get();
            }
            ScrapWallet.add((milisecondsElapsed / 1000 * drill * (drillhead*0.5))/2);
            CrystalWallet.add((milisecondsElapsed / 1000 * drill * (drillhead*0.5)/5));
        }
        return {
            UpdateInterface: true
        }
    }
}