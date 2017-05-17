import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InternosPage } from "./internos";

@NgModule({
  declarations: [
    InternosPage,
  ],
  imports: [
    IonicPageModule.forChild(InternosPage),
  ],
  exports: [
    InternosPage
  ]
})
export class InternosPageModule {}