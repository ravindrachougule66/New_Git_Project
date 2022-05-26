import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    DefaultRouting = "DefaultRouting",
        App1 = "App1",
        btn_App2 = "btn_App2",
        btn_App3 = "btn_App3",
        RouterOutlet1 = "RouterOutlet1",
        RouterOutlet2 = "RouterOutlet2",
        RouterOutlet3 = "RouterOutlet3",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}