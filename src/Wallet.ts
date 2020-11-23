import { walkUpBindingElementsAndPatterns } from "../node_modules/typescript/lib/typescript";

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
const BackpackWallet = new Wallet("Backpack");
const FoundryWallet = new Wallet("Foundry");
const RefineryWallet = new Wallet("Refinery");
const MetalWallet = new Wallet("Metal");
const PlasticWallet = new Wallet("Plastic");
const RecyclerWallet = new Wallet("Recycler");
const SmelterWallet = new Wallet("Smelter");
const DrillWallet = new Wallet("Drill");
const DrillHeadWallet = new Wallet("DrillHead");
const CrystalWallet = new Wallet("Crystal");
const ScrapUsersWallet = new Wallet("ScrapUsers");



export { 
    ScrapWallet, PickaxeWallet, ScavengerWallet, FoundryWallet, 
    MetalWallet, BackpackWallet, PlasticWallet, RecyclerWallet, 
    SmelterWallet, DrillHeadWallet, CrystalWallet, DrillWallet,
    RefineryWallet, ScrapUsersWallet
}