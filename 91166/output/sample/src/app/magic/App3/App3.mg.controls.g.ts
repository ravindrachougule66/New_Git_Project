import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    App3 = "App3",
        Table4 = "Table4",
        Column6 = "Column6",
        V_App3 = "V_App3",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column6',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_App3(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_App3);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}