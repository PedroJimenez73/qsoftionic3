import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SgiPage } from "./sgi";

@NgModule({
  declarations: [
    SgiPage,
  ],
  imports: [
    IonicPageModule.forChild(SgiPage),
  ],
  exports: [
    SgiPage
  ]
})
export class SgiPageModule {}