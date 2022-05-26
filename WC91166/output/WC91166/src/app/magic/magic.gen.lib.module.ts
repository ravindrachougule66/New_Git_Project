import {NgModule, NgModuleRef} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";


import {DynamicModule} from 'ng-dynamic-component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

import {ComponentListMagicService, MagicModule, ExitMagicService} from "@magic-xpa/angular";
import {magicGenComponents, magicGenCmpsHash, title, LazyLoadModulesMap} from './component-list.g';
import {MagicAngularMaterialModule} from "@magic-xpa/angular-material-core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatListModule} from "@angular/material/list";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {MatNativeDateModule} from "@angular/material/core";
import {MatTabsModule} from "@angular/material/tabs";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButtonModule} from "@angular/material/button";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {CurrencyMaskInputMode, NgxCurrencyModule } from "ngx-currency";

export const customCurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  allowZero: true,
  decimal: ".",
  precision: 2,
  prefix: "",
  suffix: "",
  thousands: ",",
  nullable: true,
  min: null,
  max: null,
  inputMode: CurrencyMaskInputMode.FINANCIAL
};

@NgModule({
  declarations: [
    ...magicGenComponents
  ],
  exports: [
    ...magicGenComponents,
    MagicModule
  ],
  imports: [
    // Angular Modules
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

    // Magic Modules
    MagicModule,
    DynamicModule,
    InfiniteScrollModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),

    // Material Modules
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatCheckboxModule,
    MatTabsModule,
    MatDialogModule,
    MatSelectModule,
    MatSortModule,
    MatTooltipModule,
    MatCardModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MagicAngularMaterialModule,
    MatAutocompleteModule
  ],
  providers: [ExitMagicService],
})
export class MagicGenLibModule {
  constructor(componentList: ComponentListMagicService, private moduleRef: NgModuleRef<any>) {
    componentList.addComponents(magicGenCmpsHash, moduleRef);
    componentList.title = title; 
    componentList.lazyLoadModulesMap = LazyLoadModulesMap; 
  }
}
