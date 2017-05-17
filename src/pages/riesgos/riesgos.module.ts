import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RiesgosPage } from "./riesgos";

@NgModule({
  declarations: [
    RiesgosPage,
  ],
  imports: [
    IonicPageModule.forChild(RiesgosPage),
  ],
  exports: [
    RiesgosPage
  ]
})
export class RiesgosPageModule {}