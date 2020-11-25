import { ComponentResult, GameComponent } from "../GameComponent";
import { FoundryWallet, MetalWallet, ScrapWallet, RefineryWallet, ScrapUsersWallet} from "../Wallet";
import onImage from "../Icon/ON.png";
import offImage from "../Icon/OFF.png";

const BaseCost = 10000;    
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
            ScrapUsersWallet.tryRemove(1);
        }else{
            FoundryRun = true;
            ScrapUsersWallet.add(1);
        }           
    }

    checkButton(){
        if (button instanceof HTMLImageElement){
            if (FoundryRun){                
                button.src = onImage;
            }else{                
                button.src = offImage;
            }
        } 
    }
    

    onClickBuyFoundry() {      
        if (ScrapWallet.tryRemove(this.FoundryCost())) {
            FoundryWallet.add();
        }
    }

    public FoundryCost() {
        const Cost = BaseCost*(FoundryWallet.get()*1.15 || 1);
        return Cost
    }

    onClickBuyRefinery() {      
        if (ScrapWallet.tryRemove(this.RefineryCost())) {
            RefineryWallet.add();
        }
    }

    public RefineryCost() {
        const RefineryCost = BaseCost*(FoundryWallet.get()*1.15 || 1);
        return RefineryCost
    }

    run(milisecondsElapsed: number): ComponentResult {
        if(FoundryRun){
            if(FoundryWallet.get() >=1){
                const scrap = (ScrapWallet.get() / ScrapUsersWallet.get());
                const foundry = FoundryWallet.get();
                const usablescrap = scrap / 1000
                const refinery = RefineryWallet.get();
                const GainedMetal = Math.floor(milisecondsElapsed / 1000 * foundry * ((refinery||1)*1.15));
                if(scrap>1500){
                    if(Math.floor(usablescrap)<=GainedMetal){
                        if(ScrapWallet.tryRemove(usablescrap*1000)){
                            MetalWallet.add(usablescrap)
                            if (MetalPerSecond instanceof HTMLSpanElement) {
                                MetalPerSecond.textContent = Intl.NumberFormat().format(usablescrap);
                            } 
                        }
                    }else{
                        if(ScrapWallet.tryRemove(GainedMetal*1000)){
                            MetalWallet.add(GainedMetal)
                            if (MetalPerSecond instanceof HTMLSpanElement) {
                                MetalPerSecond.textContent = Intl.NumberFormat().format(GainedMetal);
                            } 
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
            if (MetalPerSecond instanceof HTMLSpanElement) {
                MetalPerSecond.textContent = Intl.NumberFormat().format(0);
            } 
            return {
                UpdateInterface: false
            }
        }
    }

    UpdateInterface(){
        const MetalCountSpan = document.querySelectorAll(".Metal");
        const FoundryCountSpan = document.getElementById("Foundry");
        const FoundryCostSpan = document.getElementById("Cost_Foundry");
        const RefineryCountSpan = document.getElementById("Refinery");
        const RefineryCostSpan = document.getElementById("Cost_Refinery");
        for (const x of MetalCountSpan) {
            x.textContent = Intl.NumberFormat().format(MetalWallet.get());
        }
        if (FoundryCountSpan instanceof HTMLSpanElement) {
            FoundryCountSpan.textContent = FoundryWallet.get().toString();
        }
        if (FoundryCostSpan instanceof HTMLSpanElement){
            FoundryCostSpan.textContent =  Intl.NumberFormat().format(this.FoundryCost());
        }
        if (RefineryCountSpan instanceof HTMLSpanElement) {
            RefineryCountSpan.textContent = RefineryWallet.get().toString();
        }
        if (RefineryCostSpan instanceof HTMLSpanElement){
            RefineryCostSpan.textContent =  Intl.NumberFormat().format(this.RefineryCost());
        }
    }
}
