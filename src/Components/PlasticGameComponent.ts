import { ComponentResult, GameComponent } from "../GameComponent";
import { ScrapWallet, PlasticWallet, RecyclerWallet, SmelterWallet, ScrapUsersWallet } from "../Wallet";
import onImage from "../Icon/ON.png";
import offImage from "../Icon/OFF.png";

const BaseCost = 500;    
const button = document.getElementById("PlasticToggleIMG");
var PlasticRun:boolean;
const PlasticPerSecond = document.getElementById("PlasticPerSecond");

export class PlasticGameComponent implements GameComponent {
    constructor() {
        document.getElementById("BuyRecycler").addEventListener("click", () => this.onClickBuyRecycler())
        document.getElementById("BuySmelter").addEventListener("click", () => this.onClickBuySmelter())
        document.getElementById("PlasticToggle").addEventListener("click", () => this.onPlasticToggle())
    }

    onPlasticToggle(){
        if(PlasticRun == true){
            PlasticRun = false;
            ScrapUsersWallet.tryRemove(1);
        }else{
            PlasticRun = true;
            ScrapUsersWallet.add(1);
        }           
    }

    checkButton(){
        if (button instanceof HTMLImageElement){
            if (PlasticRun){                
                button.src = onImage;
            }else{                
                button.src = offImage;
            }
        } 
    }

    onClickBuyRecycler() {      
        if (ScrapWallet.tryRemove(this.RecyclerCost())) {
            RecyclerWallet.add();
        }
    }

    public RecyclerCost() {
        const RecyclerCost = BaseCost*(RecyclerWallet.get()*1.15 || 1);
        return RecyclerCost 
    }

    onClickBuySmelter() {      
        if (ScrapWallet.tryRemove(this.SmelterCost())) {
            SmelterWallet.add();
        }
    }

    public SmelterCost() {
        const SmelterCost = BaseCost*(SmelterWallet.get()*1.15 || 1);
        return SmelterCost
    }

    run(milisecondsElapsed: number): ComponentResult {
        if(PlasticRun){
            if(RecyclerWallet.get() >=1){
                const scrap = (ScrapWallet.get() / ScrapUsersWallet.get());
                const recycler = RecyclerWallet.get();
                const usablescrap = scrap / 1000
                const smelter = SmelterWallet.get();
                const GainedPlastic = Math.floor(milisecondsElapsed / 1000 * recycler * ((smelter||1)*1.15));
                if(scrap>1500){
                    if(Math.floor(usablescrap)<=GainedPlastic){
                        if(ScrapWallet.tryRemove(usablescrap*1000)){
                            PlasticWallet.add(usablescrap)
                            if (PlasticPerSecond instanceof HTMLSpanElement) {
                                PlasticPerSecond.textContent = Intl.NumberFormat().format(usablescrap);
                            } 
                        }
                    }else{
                        if(ScrapWallet.tryRemove(GainedPlastic*1000)){
                            PlasticWallet.add(GainedPlastic)
                            if (PlasticPerSecond instanceof HTMLSpanElement) {
                                PlasticPerSecond.textContent = Intl.NumberFormat().format(GainedPlastic);
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
            if (PlasticPerSecond instanceof HTMLSpanElement) {
                PlasticPerSecond.textContent = Intl.NumberFormat().format(0);
            } 
            return {
                UpdateInterface: false
            }
        }
    }

    UpdateInterface(){
        const PlasticCountSpan = document.querySelectorAll(".Plastic");
        const RecyclerCountSpan = document.getElementById("Recycler");
        const RecyclerCostSpan = document.getElementById("Cost_Recycler");
        const SmelterCountSpan = document.getElementById("Smelter");
        const SmelterCostSpan = document.getElementById("Cost_Smelter");
        for (const x of PlasticCountSpan) {
            x.textContent = Intl.NumberFormat().format(PlasticWallet.get());
        }
        if (RecyclerCountSpan instanceof HTMLSpanElement) {
            RecyclerCountSpan.textContent = RecyclerWallet.get().toString();
        }
        if (SmelterCountSpan instanceof HTMLSpanElement) {
            SmelterCountSpan.textContent = SmelterWallet.get().toString();
        }
        if (RecyclerCostSpan instanceof HTMLSpanElement) {
            RecyclerCostSpan.textContent =  Intl.NumberFormat().format(this.RecyclerCost());
        }
        if (SmelterCostSpan instanceof HTMLSpanElement) {
            SmelterCostSpan.textContent =  Intl.NumberFormat().format(this.SmelterCost());
            
        }
    }



}