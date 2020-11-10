import { ComponentResult, GameComponent } from "../GameComponent";
import { FoundryWallet, MetalWallet, ScrapWallet } from "../Wallet";

export class FoundryGameComponent implements GameComponent {
    constructor() {
        document.getElementById("BuyFoundry").addEventListener("click", () => this.onClickBuyFoundry())
    }

    onClickBuyFoundry() {
        if (ScrapWallet.tryRemove(10000)) {
            FoundryWallet.add();
        }
    }

    run(milisecondsElapsed: number): ComponentResult {
        if(FoundryWallet.get() != 0){
            const foundry = FoundryWallet.get();
            MetalWallet.add(milisecondsElapsed / 1000 * foundry);
        }

        return {
            UpdateInterface: true
        }
    }
}
