import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    App2 = "App2",
        Table6 = "Table6",
        Column8 = "Column8",
        V_App2 = "V_App2",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column8',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_App2(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_App2);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}