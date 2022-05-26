import { Routes, RouterModule } from '@angular/router';
import { RouterContainerMagicComponent } from "@magic-xpa/angular";
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
export const routes: Routes = [

    {
        path: 'App1',
        component: RouterContainerMagicComponent,

    },
    {
        path: 'App2',
        component: RouterContainerMagicComponent,

    },
    {
        path: 'App3',
        component: RouterContainerMagicComponent,

    },

];

@NgModule({
    imports: [CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class MagicRoutingModule {}