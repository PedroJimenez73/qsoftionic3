import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedioambPage } from "./medioamb";

@NgModule({
  declarations: [
    MedioambPage,
  ],
  imports: [
    IonicPageModule.forChild(MedioambPage),
  ],
  exports: [
    MedioambPage
  ]
})
export class MedioambPageModule {}