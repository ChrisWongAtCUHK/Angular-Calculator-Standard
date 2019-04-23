import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CalculatorComponent } from './calculator/calculator/calculator.component';
import { DisplayComponent } from './calculator/display/display.component';
import { CalculatorEngineService } from './calculator/caluculator-engine.service';
import { ControlPanelComponent } from './calculator/control-panel/control-panel.component';
import { KeypadComponent } from './calculator/keypad/keypad.component';
import { HistoryComponent } from './calculator/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalculatorComponent,
    DisplayComponent,
    ControlPanelComponent,
    KeypadComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CalculatorEngineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
