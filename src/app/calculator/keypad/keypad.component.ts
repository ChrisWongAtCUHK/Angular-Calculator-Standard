import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {
  @Output() onDigit = new EventEmitter<number>();
  @Output() onAdd = new EventEmitter<any>();
  @Output() onSubtract = new EventEmitter<any>();
  @Output() onMultiply = new EventEmitter<any>();
  @Output() onDivide = new EventEmitter<any>();
  @Output() onDecimalPoint = new EventEmitter<any>();
  @Output() onEquals = new EventEmitter<any>();
  @Output() onClear = new EventEmitter<any>();
  @Output() onClearAll = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {
  }

  handleOnDigit(event: any) {
    this.onDigit.emit(parseInt(event.target.value));
  }
  
}
