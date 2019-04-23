import { Injectable } from '@angular/core';
import * as math from "mathjs"

@Injectable()
export class CalculatorEngineService {
    currentValue = '';
    register = [];
    history = [];
    result = '';

    constructor() {}

    inputDigit(digit: number) {
        if (this.result !== '') {
            this.result = '';
            this.currentValue = '';            
        }

        this.currentValue += digit;
    }

    equals() {
        console.log(math.eval("5 + 9"));
    }
}