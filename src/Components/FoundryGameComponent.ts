import { ComponentResult, GameComponent } from "../GameComponent";
import { FoundryWallet, MetalWallet, ScrapWallet } from "../Wallet";


const BaseCost = 10000;    
const Cost = BaseCost*(FoundryWallet.get()*0.15 || 1);


export class FoundryGameComponent implements GameComponent {
    constructor() {
        document.getElementById("BuyFoundry").addEventListener("click", () => this.onClickBuyFoundry())
    }

    // Base Cost = 

    

    onClickBuyFoundry() {      
        if (ScrapWallet.tryRemove(Cost)) {
            FoundryWallet.add();
            console.log(Cost);
        }
    }

    public FoundryCost() {
        return {
            Cost
        }
    }

    run(milisecondsElapsed: number): ComponentResult {
        if(FoundryWallet.get() >=1){
            const foundry = FoundryWallet.get();
            const GainedMetal = milisecondsElapsed / 1000 * foundry
            if (GainedMetal > 0){
                if(ScrapWallet.tryRemove(GainedMetal*1000)){
                    MetalWallet.add(GainedMetal)
                }
            }
        }
        return {
            UpdateInterface: true
        }
    }
}
