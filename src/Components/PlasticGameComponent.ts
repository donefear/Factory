import { ComponentResult, GameComponent } from "../GameComponent";
import { ScrapWallet, PlasticWallet, RecyclerWallet, SmelterWallet } from "../Wallet";

const BaseCost = 500;    
const RecyclerCost = BaseCost*(RecyclerWallet.get()*1.15 || 1);
const SmelterCost = BaseCost*(SmelterWallet.get()*1.15 || 1);

export class PlasticGameComponent implements GameComponent {
    constructor() {
        document.getElementById("BuyRecycler").addEventListener("click", () => this.onClickBuyRecycler())
        document.getElementById("BuySmelter").addEventListener("click", () => this.onClickBuySmelter())
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
        if(RecyclerWallet.get() >=1){
            const recycler = RecyclerWallet.get();
            const GainedPlastic = milisecondsElapsed / 500 * recycler;
            const smelter = SmelterWallet.get();
            if (GainedPlastic > 0){
                if(ScrapWallet.tryRemove(GainedPlastic*500)){
                    PlasticWallet.add(GainedPlastic*(smelter*0.5))
                }
            }
        }
        return {
            UpdateInterface: true
        }
    }
}