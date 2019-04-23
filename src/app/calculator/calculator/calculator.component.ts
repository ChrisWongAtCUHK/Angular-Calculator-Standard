import { Component, OnInit } from '@angular/core';
import { CalculatorEngineService } from '../caluculator-engine.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  expression: string;
  value: string;
  history: any[];
  showHistory: boolean;

  constructor(private calculator: CalculatorEngineService) { }

  ngOnInit() {
    this.value = ''; 
    this.history = [];
    this.showHistory = false;
  }

  onToggleHistory() {
    console.log("handling onToggleHistory");
  }

  onDigit(digit: number) {
    this.calculator.inputDigit(digit);
    this.value = this.calculator.currentValue;
  }

  onAdd() {
    this.calculator.add();
    this.expression = this.calculator.getExpression();
    this.value = this.calculator.currentValue;
  }

  onSubtract() {
    this.calculator.subtract();
    this.expression = this.calculator.getExpression();
    this.value = this.calculator.currentValue;
  }

  onMultiply() {
    this.calculator.multiply();
    this.expression = this.calculator.getExpression();
    this.value = this.calculator.currentValue;
  }

  onDivide() {
    this.calculator.divide();
    this.expression = this.calculator.getExpression();
    this.value = this.calculator.currentValue;
  }

  onDecimalPoint() {
    this.calculator.inputDecimal();
    this.expression = this.calculator.getExpression();
    this.value = this.calculator.currentValue;
  }

  onEquals() {
    this.calculator.equals();
    this.expression = this.calculator.getExpression();
    this.value = this.calculator.currentValue;
  }

  onClear() {
    this.calculator.clear();
    this.expression = this.calculator.getExpression();
    this.value = this.calculator.currentValue;
  }

  onClearAll() {
    this.calculator.clearAll();
    this.expression = this.calculator.getExpression();
    this.value = this.calculator.currentValue;
    this.history = this.calculator.history;
  }

  onDelete() {
    this.calculator.delete();
    this.expression = this.calculator.getExpression();
    this.value = this.calculator.currentValue;
  }

  onToggleSign() {
    this.calculator.toggleSign();
    this.expression = this.calculator.getExpression();
    this.value = this.calculator.currentValue;
  }

  
}
