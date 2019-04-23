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

  constructor(private calculator: CalculatorEngineService) { }

  ngOnInit() {
    this.value = '0'; 
  }

  onEquals() {
    this.calculator.equals();
  }
}
