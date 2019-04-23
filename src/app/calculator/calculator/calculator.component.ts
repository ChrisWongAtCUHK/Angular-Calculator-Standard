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
    this.value = '0'; 
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
    console.log(this.expression);
  }

  onEquals() {
    this.calculator.equals();
  }
}
