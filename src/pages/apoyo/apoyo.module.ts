import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApoyoPage } from "./apoyo";

@NgModule({
  declarations: [
    ApoyoPage,
  ],
  imports: [
    IonicPageModule.forChild(ApoyoPage),
  ],
  exports: [
    ApoyoPage
  ]
})
export class ApoyoPageModule {}