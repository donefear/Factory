import { ScrapWallet, PickaxeWallet } from "./Wallet";

export class ManualLabor {
    public updateInterface?: () => void;

    constructor() {
        document.getElementById("PlayerGather").addEventListener("click", () => this.onClickPlayerGather());
        document.getElementById("BuyPick").addEventListener("click", () => this.onClickBuyPickaxe());
    }

    public onClickPlayerGather(): void {
        ScrapWallet.add(PickaxeWallet.get() + 1);
        
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
}