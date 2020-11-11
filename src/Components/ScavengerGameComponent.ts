import { ComponentResult, GameComponent } from "../GameComponent";
import { ScavengerWallet, ScrapWallet, BackpackWallet } from "../Wallet";

export class ScavengerGameComponent implements GameComponent {
    constructor() {
        document.getElementById("HireScavenger").addEventListener("click", () => this.onClickHireScavenger())
        document.getElementById("BuyBackpack").addEventListener("click", () => this.onClickBuyBackpack())
    }

    onClickHireScavenger() {
        if (ScrapWallet.tryRemove(500)) {
            ScavengerWallet.add();
        }
    }

    onClickBuyBackpack() {
        if (ScrapWallet.tryRemove(500)) {
            BackpackWallet.add();
        }
    }

    run(milisecondsElapsed: number): ComponentResult {
        if(ScavengerWallet.get() != 0){
            let backpack = 1;
            const scavengers = ScavengerWallet.get();
            if (BackpackWallet.get() != 0){
                const backpack = BackpackWallet.get();
            }
            ScrapWallet.add(milisecondsElapsed / 1000 * scavengers * (backpack*1.5));
        }

        return {
            UpdateInterface: true
        }
    }
}