import { ComponentResult, GameComponent } from "../GameComponent";
import { FoundryWallet, MetalWallet, ScrapWallet } from "../Wallet";

export class FoundryGameComponent implements GameComponent {
    constructor() {
        document.getElementById("BuyFoundry").addEventListener("click", () => this.onClickBuyFoundry())
    }

    // Base Cost = 

    

    onClickBuyFoundry() {

        const BaseCost = 10000;    
        const Cost = BaseCost*(FoundryWallet.get()*0.15 || 1);

        if (ScrapWallet.tryRemove(Cost)) {
            FoundryWallet.add();
            console.log(Cost);
        }
    }

    run(milisecondsElapsed: number): ComponentResult {
        // console.log("foundry = "+FoundryWallet.get());
        let GainedMetal = 0;
        if(FoundryWallet.get() >=1 ){
            const foundry = FoundryWallet.get();
            const Metal = foundry/ 500 * milisecondsElapsed;     
            // console.log("XMetal: "+XMetal);
            const convertedScrap =  (ScrapWallet.get() - 500) / 1000;
            // console.log("usablescrap: "+convertedScrap);
            const usableScrap = convertedScrap*50;
            GainedMetal = Math.min(Math.floor(Metal), convertedScrap);
            if(ScrapWallet.tryRemove(GainedMetal*500)){
                if(Math.min(Math.floor(Metal), usableScrap) >= 0){                    
                    MetalWallet.add(GainedMetal/2);
                }
            }
        }
        return {
            UpdateInterface: true
        }
    }
}
