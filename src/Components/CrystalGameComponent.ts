import { ComponentResult, GameComponent } from "../GameComponent";
import { MetalWallet, ScrapWallet, CrystalWallet, DrillWallet, DrillHeadWallet } from "../Wallet";

const BaseCost = 100000;    
const DrillCost = BaseCost*(DrillWallet.get()*1.15 || 1);
const DrillHeadCost = BaseCost*(DrillHeadWallet.get()*1.15 || 1);
const CrystalPerSecond = document.getElementById("CrystalPerSecond");
const CrystalScrapPerSecond = document.getElementById("CrystalScrapPerSecond");

export class CrystalGameComponent implements GameComponent {
    constructor() {
        document.getElementById("BuyDeepDrill").addEventListener("click", () => this.onClickBuyDrill())
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
            const incomeScrap = (milisecondsElapsed / 1000 * drill * (drillhead*1.5)/2.5);
            const incomeCrystal = ((milisecondsElapsed / 1000 * drill * (drillhead*1.5))*75000);
            ScrapWallet.add(incomeScrap);
            CrystalWallet.add(incomeCrystal);            
            if (CrystalPerSecond instanceof HTMLSpanElement) {
                CrystalPerSecond.textContent = Intl.NumberFormat().format(incomeScrap*2);
            } 
            if (CrystalScrapPerSecond instanceof HTMLSpanElement) {
                CrystalScrapPerSecond.textContent = Intl.NumberFormat().format(incomeCrystal*2);
            } 
        }
        return {
            UpdateInterface: true
        }
    }
}