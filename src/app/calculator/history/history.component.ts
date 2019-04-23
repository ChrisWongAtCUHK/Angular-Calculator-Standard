import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  @Input() history: any[];
  @Output() onClearHistory = new EventEmitter<any>();
  @Output() onHistorySelected = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
