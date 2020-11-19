import { ComponentResult, GameComponent } from "../GameComponent";
import { ScavengerWallet, ScrapWallet, BackpackWallet } from "../Wallet";

const BaseCost = 500;    
const BackpackCost = BaseCost*(BackpackWallet.get()*0.15 || 1);
const ScavengerCost = BaseCost*(ScavengerWallet.get()*0.15 || 1);

export class ScavengerGameComponent implements GameComponent {
    constructor() {
        document.getElementById("HireScavenger").addEventListener("click", () => this.onClickHireScavenger())
        document.getElementById("BuyBackpack").addEventListener("click", () => this.onClickBuyBackpack())
    }

    onClickHireScavenger() {
        const BaseCost = 500;    
        const Cost = BaseCost*(ScavengerWallet.get()*0.15 || 1);
        if (ScrapWallet.tryRemove(Cost)) {
            ScavengerWallet.add();
        }
    }

    onClickBuyBackpack() {
        if(BackpackWallet.get() < ScavengerWallet.get()){
            if (ScrapWallet.tryRemove(500)) {
                BackpackWallet.add();
            }
        }        
    }

    BackpackCost(){
        return{
            BackpackCost
        }
    }

    ScavengerCost(){
        return{
            ScavengerCost
        }
    }

    run(milisecondsElapsed: number): ComponentResult {
        if(ScavengerWallet.get() != 0){
            let backpack = 1;
            const scavengers = ScavengerWallet.get();
            if (BackpackWallet.get() != 0){
                const backpack = BackpackWallet.get();
            }
            ScrapWallet.add(milisecondsElapsed / 1000 * scavengers * (backpack*1.5));
        }

        return {
            UpdateInterface: true
        }
    }
}