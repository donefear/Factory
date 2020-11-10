import { ComponentResult, GameComponent } from "../GameComponent";
import { ScavengerWallet, ScrapWallet } from "../Wallet";

export class ScavengerGameComponent implements GameComponent {
    constructor() {
        document.getElementById("HireScavenger").addEventListener("click", () => this.onClickHireScavenger())
    }

    onClickHireScavenger() {
        if (ScrapWallet.tryRemove(500)) {
            ScavengerWallet.add();
        }
    }

    run(milisecondsElapsed: number): ComponentResult {
        const scavengers = ScavengerWallet.get();
        ScrapWallet.add(milisecondsElapsed / 1000 * scavengers);

        return {
            UpdateInterface: true
        }
    }
}