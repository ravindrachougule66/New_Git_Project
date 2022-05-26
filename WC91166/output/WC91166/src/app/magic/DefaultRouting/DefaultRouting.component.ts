import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./DefaultRouting.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


@Component({
    selector: 'mga-DefaultRouting',
    providers: [...magicProviders],
    templateUrl: './DefaultRouting.component.html'
})
export class DefaultRouting extends TaskBaseMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc: MgFormControlsAccessor;
    createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
}