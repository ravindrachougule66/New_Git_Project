import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    Package1 = "Package1",
        Label7 = "Label7",
        varid = "varid",
        Label8 = "Label8",
        Var2 = "Var2",
        Button9 = "Button9",
        Button10 = "Button10",
        Button11 = "Button11",
        Subform6 = "Subform6",
        Subform7 = "Subform7",
        Subform8 = "Subform8",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get varid(): FormControl {
        return this.fg.controls[MgControlName.varid] as FormControl;
    }

    get Var2(): FormControl {
        return this.fg.controls[MgControlName.Var2] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}