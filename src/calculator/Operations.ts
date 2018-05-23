import { Operation } from "./OperationBase";

export class Add extends Operation {
    GetResult(): number {
        let result: number = 0;
        result = this.NumberA + this.NumberB;
        return result;
    }
}

export class Sub extends Operation {
    GetResult(): number {
        let result: number = 0;
        result = this.NumberA - this.NumberB;
        return result;
    }
}

export class Mul extends Operation {
    GetResult(): number {
        let result: number = 0;
        result = this.NumberA * this.NumberB;
        return result;
    }
}

export class Div extends Operation {
    GetResult(): number {
        let result: number = 0;
        if (this.NumberB == 0) {
            throw new Error("Number B can't be 0");
        }
        result = this.NumberA / this.NumberB;
        return result;
    }
}