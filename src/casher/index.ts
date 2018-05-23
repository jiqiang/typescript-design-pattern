import { CashContext } from "./CashContext";

export class Casher {
    static run(): void {
        let methods = [
            { type: "NORMAL", money: 200 },
            { type: "NORMAL", money: 500 },
            { type: "80_PERCENTAGE", money: 100 },
            { type: "90_PERCENTAGE", money: 100 },
            { type: "SPEND_300_CASHBACK_100", money: 200 },
            { type: "SPEND_300_CASHBACK_100", money: 300 },
            { type: "SPEND_300_CASHBACK_100", money: 400 },
            { type: "SPEND_500_CASHBACK_200", money: 200 },
            { type: "SPEND_500_CASHBACK_200", money: 500 },
            { type: "SPEND_500_CASHBACK_200", money: 700 }
        ];

        for (let i = 0; i < methods.length; i++) {
            let method = methods[i];
            let cc = new CashContext(method.type);
            let actual = cc.GetResult(method.money);
            console.log(method.type + " | received: " + method.money + " | actually received: " + actual);
        }
    }
}
