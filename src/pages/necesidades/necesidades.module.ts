import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NecesidadesPage } from "./necesidades";

@NgModule({
  declarations: [
    NecesidadesPage,
  ],
  imports: [
    IonicPageModule.forChild(NecesidadesPage),
  ],
  exports: [
    NecesidadesPage
  ]
})
export class NecesidadesPageModule {}