export class Operation {
    private numberA: number = 0;
    private numberB: number = 0;
    
    get NumberA(): number {
        return this.numberA;
    }
    
    set NumberA(value: number) {
        this.numberA = value;
    }
    
    get NumberB(): number {
        return this.numberB;
    }
    
    set NumberB(value: number) {
        this.numberB = value;
    }
    
    GetResult(): number {
        let result: number = 0;
        return result;
    }
}