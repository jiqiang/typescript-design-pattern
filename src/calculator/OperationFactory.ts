import { Operation } from "./OperationBase";
import * as Operations from "./Operations";

export class OperationFactory {
    static CreateOperate(operate: string): Operation {
        let oper: Operation;
        switch(operate) {
            case "+":
                oper = new Operations.Add();
                break;
            case "-":
                oper = new Operations.Sub();
                break;
            case "*":
                oper = new Operations.Mul();
                break;
            case "/":
                oper = new Operations.Div();
                break;
            default:
                oper = new Operations.Add();
        }
        return oper;
    }
}