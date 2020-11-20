import { ComponentResult, GameComponent } from "../GameComponent";
import { FoundryWallet, MetalWallet, ScrapWallet, RefineryWallet } from "../Wallet";


const BaseCost = 10000;    
const Cost = BaseCost*(FoundryWallet.get()*1.15 || 1);
const RefineryCost = BaseCost*(FoundryWallet.get()*1.15 || 1);
var FoundryRun:boolean;
const button = document.getElementById("FoundryToggleIMG");
const MetalPerSecond = document.getElementById("MetalPerSecond");


export class FoundryGameComponent implements GameComponent {
    constructor() {
        document.getElementById("BuyFoundry").addEventListener("click", () => this.onClickBuyFoundry())
        document.getElementById("BuyRefinery").addEventListener("click", () => this.onClickBuyRefinery())
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

    onClickBuyRefinery() {      
        if (ScrapWallet.tryRemove(RefineryCost)) {
            RefineryWallet.add();
        }
    }

    public RefineryCost() {
        return {
            RefineryCost
        }
    }

    run(milisecondsElapsed: number): ComponentResult {
        if(FoundryRun){
            if(FoundryWallet.get() >=1){
                const scrap = ScrapWallet.get();
                const foundry = FoundryWallet.get();
                const usablescrap = scrap / 1000
                const refinery = RefineryWallet.get();
                const GainedMetal = Math.floor(milisecondsElapsed / 1000 * foundry * ((refinery||1)*1.05));
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
                    if (MetalPerSecond instanceof HTMLSpanElement) {
                        MetalPerSecond.textContent = Intl.NumberFormat().format(GainedMetal*2);
                    } 
                }
            }
            this.checkButton()
            return {
                UpdateInterface: true
            }
        }else{
            this.checkButton()            
            if (MetalPerSecond instanceof HTMLSpanElement) {
                MetalPerSecond.textContent = Intl.NumberFormat().format(0);
            } 
            return {
                UpdateInterface: false
            }
        }
    }
}
