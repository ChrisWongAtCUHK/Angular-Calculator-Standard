import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {
  @Output() onDigit = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  handleOnDigit(event: any) {
    this.onDigit.emit(parseInt(event.target.value));
  }
}
