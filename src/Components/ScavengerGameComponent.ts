import { ComponentResult, GameComponent } from "../GameComponent";
import { ScavengerWallet, ScrapWallet, BackpackWallet, PickaxeWallet } from "../Wallet";

const BaseCost = 500;

export class ScavengerGameComponent implements GameComponent {
    constructor() {
        document.getElementById("HireScavenger").addEventListener("click", () => this.onClickHireScavenger())
        document.getElementById("BuyBackpack").addEventListener("click", () => this.onClickBuyBackpack())
    }

    onClickHireScavenger() {
        const BaseCost = 500;
        if (ScrapWallet.tryRemove(this.ScavengerCost())) {
            ScavengerWallet.add();
        }
    }

    onClickBuyBackpack() {
        if (BackpackWallet.get() < ScavengerWallet.get()) {
            if (ScrapWallet.tryRemove(this.BackpackCost())) {
                BackpackWallet.add();
            }
        }
    }

    BackpackCost() {
        const BackpackCost = BaseCost * (BackpackWallet.get() * 1.15 || 1);
        return BackpackCost
    }

    ScavengerCost() {
        const ScavengerCost = BaseCost * (ScavengerWallet.get() * 1.15 || 1);
        return ScavengerCost
    }

    run(milisecondsElapsed: number): ComponentResult {
        if (ScavengerWallet.get() != 0) {
            const scavengers = ScavengerWallet.get();
            const backpack = BackpackWallet.get();
            if (backpack != 0) {
                const backpack = BackpackWallet.get();
            }
            let income = milisecondsElapsed / 1000 * scavengers * (backpack * 1.5);
            ScrapWallet.add(income;
            const ScrapPerSecond = document.getElementById("ScrapPerSecond");
            if (ScrapPerSecond instanceof HTMLSpanElement) {
                ScrapPerSecond.textContent = Intl.NumberFormat().format(income);
            }
        }

        return {
            UpdateInterface: true
        }
    }

    UpdateInterface() {
        const backAccountCountSpan = document.querySelectorAll(".BankAccountCount");
        const PickaxeCountSpan = document.getElementById("Pickaxes");
        const PickaxeCostSpan = document.getElementById("Cost_Pickaxe");
        const KlickSecondCountSpan = document.getElementById("KlickSecond");
        const ScavengerCountSpan = document.getElementById("Scavenger");
        const ScavengerCostSpan = document.getElementById("Cost_Scavenger");
        const BackpackCountSpan = document.getElementById("Backpack");
        const BackpackCostSpan = document.getElementById("Cost_ScavengerBackpack");
        for (const x of backAccountCountSpan) {
            x.textContent = Intl.NumberFormat().format(ScrapWallet.get());
        }
        if (KlickSecondCountSpan instanceof HTMLSpanElement) {
            const x = Intl.NumberFormat().format(PickaxeWallet.get() * 1.5 + 1);
            KlickSecondCountSpan.textContent = x.toString();
        }
        if (PickaxeCountSpan instanceof HTMLSpanElement) {
            PickaxeCountSpan.textContent = PickaxeWallet.get().toString();
        }
        if (PickaxeCostSpan instanceof HTMLSpanElement) {
            PickaxeCostSpan.textContent = "100";
        }
        if (ScavengerCountSpan instanceof HTMLSpanElement) {
            ScavengerCountSpan.textContent = ScavengerWallet.get().toString();
        }
        if (BackpackCountSpan instanceof HTMLSpanElement) {
            BackpackCountSpan.textContent = BackpackWallet.get().toString();
        }
        if (BackpackCostSpan instanceof HTMLSpanElement) {
            BackpackCostSpan.textContent = Intl.NumberFormat().format(this.BackpackCost());
        }
        if (ScavengerCostSpan instanceof HTMLSpanElement) {
            ScavengerCostSpan.textContent = Intl.NumberFormat().format(this.ScavengerCost());
        }
    }
}