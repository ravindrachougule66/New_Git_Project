import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./Package1.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


@Component({
    selector: 'mga-Package1',
    providers: [...magicProviders],
    templateUrl: './Package1.component.html'
})
export class Package1 extends TaskBaseMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc: MgFormControlsAccessor;
    createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
}