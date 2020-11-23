import { ComponentResult, GameComponent } from "../GameComponent";
import { MetalWallet, ScrapWallet, CrystalWallet, DrillWallet, DrillHeadWallet } from "../Wallet";

const BaseCost = 100000;
const CrystalPerSecond = document.getElementById("CrystalPerSecond");
const CrystalScrapPerSecond = document.getElementById("CrystalScrapPerSecond");

export class CrystalGameComponent implements GameComponent {
    constructor() {
        document.getElementById("BuyDeepDrill").addEventListener("click", () => this.onClickBuyDrill())
        document.getElementById("BuyDrillHead").addEventListener("click", () => this.onClickBuyDrillHead())
    }



    onClickBuyDrill() {
        if (MetalWallet.tryRemove(this.DrillCost())) {
            DrillWallet.add();
        }
    }

    public DrillCost() {
        const DrillCost = BaseCost * (DrillWallet.get() * 1.15 || 1);
        return DrillCost
    }

    onClickBuyDrillHead() {
        if (MetalWallet.tryRemove(this.DrillHeadCost())) {
            DrillHeadWallet.add();
        }
    }

    public DrillHeadCost() {
        const DrillHeadCost = BaseCost * (DrillHeadWallet.get() * 1.15 || 1);
        return DrillHeadCost
    }

    run(milisecondsElapsed: number): ComponentResult {
        if (DrillWallet.get() != 0) {
            let drillhead = 1;
            const drill = DrillWallet.get();
            if (DrillWallet.get() != 0) {
                const drillHead = DrillHeadWallet.get();
            }
            const incomeScrap = (milisecondsElapsed / 1000 * drill * (drillhead * 1.5) / 2.5);
            const incomeCrystal = ((milisecondsElapsed / 1000 * drill * (drillhead * 1.5)) * 75000);
            ScrapWallet.add(incomeScrap);
            CrystalWallet.add(incomeCrystal);
            if (CrystalPerSecond instanceof HTMLSpanElement) {
                CrystalPerSecond.textContent = Intl.NumberFormat().format(incomeScrap * 2);
            }
            if (CrystalScrapPerSecond instanceof HTMLSpanElement) {
                CrystalScrapPerSecond.textContent = Intl.NumberFormat().format(incomeCrystal * 2);
            }
        }
        return {
            UpdateInterface: true
        }
    }

    UpdateInterface() {
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
            DeepDrillCostSpan.textContent = Intl.NumberFormat().format(this.DrillCost());
        }
        if (DrillHeadCostSpan instanceof HTMLSpanElement) {
            DrillHeadCostSpan.textContent = Intl.NumberFormat().format(this.DrillHeadCost());

        }
    }
}