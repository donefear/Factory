import { ComponentResult, GameComponent } from "../GameComponent";
import { FoundryWallet, MetalWallet, ScrapWallet } from "../Wallet";


const BaseCost = 10000;    
const Cost = BaseCost*(FoundryWallet.get()*1.15 || 1);
var FoundryRun:boolean;
const button = document.getElementById("FoundryToggleIMG");

export class FoundryGameComponent implements GameComponent {
    constructor() {
        document.getElementById("BuyFoundry").addEventListener("click", () => this.onClickBuyFoundry())
        document.getElementById("FoundryToggle").addEventListener("click", () => this.onFoundryToggle())
    }

    // Base Cost = 

    onFoundryToggle(){
        if(FoundryRun == true){
            FoundryRun = false;
        }else{
            FoundryRun = true;
        }           
    }

    checkButton(){
        if (button instanceof HTMLImageElement){
            if (FoundryRun){                
                button.src ="src/Icon/ON.png";
            }else{                
                button.src ="src/Icon/OFF.png";
            }
        } 
    }
    

    onClickBuyFoundry() {      
        if (ScrapWallet.tryRemove(Cost)) {
            FoundryWallet.add();
        }
    }

    public FoundryCost() {
        return {
            Cost
        }
    }

    run(milisecondsElapsed: number): ComponentResult {
        console.log("FoundryRun: "+FoundryRun)
        if(FoundryRun){
            if(FoundryWallet.get() >=1){
                const scrap = ScrapWallet.get();
                const foundry = FoundryWallet.get();
                const usablescrap = scrap / 1000
                const GainedMetal = Math.floor(milisecondsElapsed / 1000 * foundry);
                if(scrap>1500){
                    if(Math.floor(usablescrap)<=GainedMetal){
                        if(ScrapWallet.tryRemove(usablescrap*1000)){
                            MetalWallet.add(GainedMetal)
                        }
                    }else{
                        if(ScrapWallet.tryRemove(GainedMetal*1000)){
                            MetalWallet.add(GainedMetal)
                        }
                    }
                }
            }
            this.checkButton()
            return {
                UpdateInterface: true
            }
        }else{
            this.checkButton()
            return {
                UpdateInterface: false
            }
        }
    }
}
