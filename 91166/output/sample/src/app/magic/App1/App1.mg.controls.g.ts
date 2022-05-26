import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    App1 = "App1",
        Table3 = "Table3",
        Column5 = "Column5",
        V_App1 = "V_App1",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column5',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_App1(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_App1);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}