import { Operation } from "./OperationBase";
import { OperationFactory } from "./OperationFactory";

export class Calculator {
    static run(): void {
        let oper: Operation = OperationFactory.CreateOperate("+");
        oper.NumberA = 1;
        oper.NumberB = 2;
        let result: number = oper.GetResult();
        console.log(oper.NumberA + " + " + oper.NumberB + " = " + result);

        oper = OperationFactory.CreateOperate("-");
        oper.NumberA = 5;
        oper.NumberB = 2;
        result = oper.GetResult();
        console.log(oper.NumberA + " - " + oper.NumberB + " = " + result);

        oper = OperationFactory.CreateOperate("*");
        oper.NumberA = 5;
        oper.NumberB = 2;
        result = oper.GetResult();
        console.log(oper.NumberA + " * " + oper.NumberB + " = " + result);

        oper = OperationFactory.CreateOperate("/");
        oper.NumberA = 6;
        oper.NumberB = 2;
        result = oper.GetResult();
        console.log(oper.NumberA + " / " + oper.NumberB + " = " + result);

        oper = OperationFactory.CreateOperate("/");
        oper.NumberA = 5;
        oper.NumberB = 0;
        try {
            result = oper.GetResult();
            console.log(oper.NumberA + " / " + oper.NumberB + " = " + result);  
        } catch(e) {
            console.error(e.message);
        }
    }
}