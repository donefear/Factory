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
        // console.log("foundry = "+FoundryWallet.get());
        let GainedMetal = 0;
        if(FoundryWallet.get() >=1 ){
            const foundry = FoundryWallet.get();
            const Metal = foundry/ 1000 * milisecondsElapsed;     
            // console.log("XMetal: "+XMetal);
            const convertedScrap =  (ScrapWallet.get() - 500) / 1000;
            // console.log("usablescrap: "+convertedScrap);
            const usableScrap = convertedScrap*100;
            if(ScrapWallet.tryRemove(usableScrap)){
                if(Math.min(Math.floor(Metal), usableScrap) >= 0){
                    GainedMetal = Math.min(Math.floor(Metal), convertedScrap);
                    MetalWallet.add(GainedMetal);
                }
            }
        }
        return {
            UpdateInterface: true
        }
    }
}
