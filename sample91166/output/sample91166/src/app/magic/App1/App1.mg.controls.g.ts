import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    App1 = "App1",
        Label5 = "Label5",
        V_Dummy = "V_Dummy",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_Dummy(): FormControl {
        return this.fg.controls[MgControlName.V_Dummy] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}