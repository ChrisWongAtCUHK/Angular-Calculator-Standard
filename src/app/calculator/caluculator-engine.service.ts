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

    add() {
        if (this.currentValue === '') {
            return;
        }

        this.register.push(this.currentValue);
        this.register.push('+');

        this.currentValue = '';
    }

    subtract() {
        if (this.currentValue === '') {
            return;
        }

        this.register.push(this.currentValue);
        this.register.push('-');

        this.currentValue = '';
    }

    multiply() {
        if (this.currentValue === '') {
            return;
        }

        this.register.push(this.currentValue);
        this.register.push('*');

        this.currentValue = '';
    }

    divide() {
        if (this.currentValue === '') {
            return;
        }

        this.register.push(this.currentValue);
        this.register.push('/');
        
        this.currentValue = '';
    }

    getExpression() {
        return this.register.join(' ');
    }

    equals() {
        console.log(math.eval("5 + 9"));
    }
}