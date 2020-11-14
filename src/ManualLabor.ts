import { ScrapWallet, PickaxeWallet, ScavengerWallet } from "./Wallet";

export class ManualLabor {
    public updateInterface?: () => void;

    constructor() {
        document.getElementById("PlayerGather").addEventListener("click", () => this.onClickPlayerGather());
        document.getElementById("BuyPick").addEventListener("click", () => this.onClickBuyPickaxe());
        // document.getElementById("RESET").addEventListener("click", () => this.RESET());
    }

    public onClickPlayerGather(): void {
        ScrapWallet.add(PickaxeWallet.get()*1.5 + 1);
        
        if (this.updateInterface) {
            this.updateInterface();
        }
    }

    public onClickBuyPickaxe(): void {
        if (ScrapWallet.tryRemove(100)) {
            PickaxeWallet.add();

            if (this.updateInterface) {
                this.updateInterface();
            }
        }
    }

    public RESET(): void {
        localStorage.clear();
        PickaxeWallet.add(500);
        ScavengerWallet.add(98);
        if (this.updateInterface) {
            this.updateInterface();
        }
    }

}