import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlanesPage } from "./planes";

@NgModule({
  declarations: [
    PlanesPage,
  ],
  imports: [
    IonicPageModule.forChild(PlanesPage),
  ],
  exports: [
    PlanesPage
  ]
})
export class PlanesPageModule {}