import { CashBase } from "./CashBase";

export class Normal extends CashBase {
    acceptCash(money: number): number {
        return money;
    }
}

export class Rebate extends CashBase {
    private moneyRebate: number;
    constructor(moneyRebate: number) {
        super();
        this.moneyRebate = moneyRebate;
    }

    acceptCash(money: number): number {
        return money * this.moneyRebate;
    }
}

export class Return extends CashBase {
    private moneyCondition: number = 0.00;
    private moneyReturn: number = 0.00;
    constructor(moneyCondition: number, moneyReturn: number) {
        super();
        this.moneyCondition = moneyCondition;
        this.moneyReturn = moneyReturn;
    }
    acceptCash(money: number): number {
        let result: number = money;
        if (money >= this.moneyCondition) {
            result = money - Math.floor(money / this.moneyCondition) * this.moneyReturn;
        }
        return result;
    }
}
