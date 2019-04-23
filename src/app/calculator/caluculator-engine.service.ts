import { Injectable } from '@angular/core';
import * as math from "mathjs"

@Injectable()
export class CalculatorEngineService {
    currentValue = '';
    register = [];
    history = [];
    result = '';

    constructor() {
        math.config({
            number: 'BigNumber', // Default type of number:
            // 'number' (default), 'BigNumber', or 'Fraction'
            precision: 64        // Number of significant digits for BigNumbers
        })
    }

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

    inputDecimal() {
        if (this.result !== '') {
            this.result = '';
            this.currentValue = '';         
        }

        if (this.currentValue.indexOf('.') >= 0) {
            return;
        }

        if (this.currentValue === '') {
            this.currentValue += '0.';
        } else {
            this.currentValue += '.';
        }
    }

    getExpression() {
        return this.register.join(' ');
    }

    equals() {
        if (this.currentValue === '') {
            return;
        }

        this.register.push(this.currentValue);

        const expression = this.register.join(' ');

        this.result = math.eval(expression);
        const result = this.result;
        this.currentValue = this.result.toString();
        this.history.splice(0, 0, { expression, result });
        this.register = [];
    }

    clear() {
        this.currentValue = '';
        this.register = [];
        this.result = '';
    }

    clearAll() {
        this.clear();
        this.history = [];
    }

    delete() {
        if (this.currentValue === '') {
            return;
        }

        this.currentValue = this.currentValue.substring(0, this.currentValue.length - 1);
    }

    toggleSign() {
        if (this.currentValue === '') {
            return;
        }

        this.currentValue = (parseFloat(this.currentValue) * (-1)).toString();
    }

    loadHistory(index: number) {
        this.currentValue = this.history[index].result.toString();
    }
}