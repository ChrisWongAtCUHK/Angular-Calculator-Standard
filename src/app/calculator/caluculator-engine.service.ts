import { Injectable } from '@angular/core';
import * as math from "mathjs"

@Injectable()
export class CalculatorEngineService {
    constructor() {}

    equals() {
        console.log(math.eval("5 + 9"));
    }
}