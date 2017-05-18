import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccionesPage } from "./acciones";

@NgModule({
  declarations: [
    AccionesPage,
  ],
  imports: [
    IonicPageModule.forChild(AccionesPage),
  ],
  exports: [
    AccionesPage
  ]
})
export class AccionesPageModule {}