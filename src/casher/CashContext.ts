import { CashBase } from "./CashBase";
import * as CashMethods from "./CashMethods";

export class CashContext {
    private casher: CashBase;

    constructor(type: string) {
        switch(type) {
            case "80_PERCENTAGE":
                this.casher = new CashMethods.Rebate(0.8);
                break;
            case "90_PERCENTAGE":
                this.casher = new CashMethods.Rebate(0.9);
                break;
            case "SPEND_300_CASHBACK_100":
                this.casher = new CashMethods.Return(300, 100);
                break;
            case "SPEND_500_CASHBACK_200":
                this.casher = new CashMethods.Return(500, 200);
                break;
            default:
                this.casher = new CashMethods.Normal();
        }
    }

    GetResult(money: number): number {
        return this.casher.acceptCash(money);
    }
}
