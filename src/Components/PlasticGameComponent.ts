import { ComponentResult, GameComponent } from "../GameComponent";
import { ScrapWallet, PlasticWallet, RecyclerWallet, SmelterWallet } from "../Wallet";

const BaseCost = 500;    
const RecyclerCost = BaseCost*(RecyclerWallet.get()*1.15 || 1);
const SmelterCost = BaseCost*(SmelterWallet.get()*1.15 || 1);
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
        }else{
            PlasticRun = true;
        }           
    }

    checkButton(){
        if (button instanceof HTMLImageElement){
            if (PlasticRun){                
                button.src ="src/Icon/ON.png";
            }else{                
                button.src ="src/Icon/OFF.png";
            }
        } 
    }

    onClickBuyRecycler() {      
        if (ScrapWallet.tryRemove(RecyclerCost)) {
            RecyclerWallet.add();
        }
    }

    public RecyclerCost() {
        return {
            RecyclerCost
        }
    }

    onClickBuySmelter() {      
        if (ScrapWallet.tryRemove(SmelterCost)) {
            SmelterWallet.add();
        }
    }

    public SmelterCost() {
        return {
            SmelterCost
        }
    }

    run(milisecondsElapsed: number): ComponentResult {
        if(PlasticRun){
            if(RecyclerWallet.get() >=1){
                const recycler = RecyclerWallet.get();
                const GainedPlastic = milisecondsElapsed / 500 * recycler;
                const smelter = SmelterWallet.get();
                if (GainedPlastic > 0){
                    if(ScrapWallet.tryRemove(GainedPlastic*500)){
                        PlasticWallet.add(GainedPlastic*(smelter*0.5))
                    }
                    if (PlasticPerSecond instanceof HTMLSpanElement) {
                        PlasticPerSecond.textContent = Intl.NumberFormat().format(GainedPlastic*2);
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
}