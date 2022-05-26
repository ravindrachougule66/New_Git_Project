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
        Label7 = "Label7",
        RouterOutlet1 = "RouterOutlet1",
        Label8 = "Label8",
        RouterOutlet2 = "RouterOutlet2",
        Label9 = "Label9",
        RouterOutlet3 = "RouterOutlet3",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}