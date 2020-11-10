class Wallet {
    private readonly type: string;

    constructor(type: string) {
        this.type = type;
    }

    public get(): number {
        return parseFloat(localStorage.getItem("Wallet_" + this.type) || "0")
    }

    public add(count?: number): number {
        const current = this.get();

        this.set(current + (count || 1));

        return this.get();
    }

    public set(count: number): void {
        localStorage.setItem("Wallet_" + this.type, count.toString());
    }

    public tryRemove(count: number): boolean {
        const currentCount = this.get();

        if (currentCount >= count) {
            this.set(currentCount - count);
            return true;
        } else {
            return false;
        }
    }
}

// The diffrent types of numbers we store
const ScrapWallet = new Wallet("Scrap");
const PickaxeWallet = new Wallet("Pickaxe");
const ScavengerWallet = new Wallet("Scavenger");

export { ScrapWallet, PickaxeWallet, ScavengerWallet }