import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {
  @Input() anyHistory: boolean;
  @Output() onToggleHistory = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
}
