import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./App2.mg.controls.g";
import { MgDisplayedColumns } from "./App2.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-App2',
    providers: [...matMagicProviders],
    templateUrl: './App2.component.html'
})
export class App2 extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    displayedColumns = this.mgdp;
}