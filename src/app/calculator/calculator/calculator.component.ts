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

  onEquals() {
    this.calculator.equals();
  }
}
