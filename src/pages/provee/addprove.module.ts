import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddProvePage } from "./addprove";

@NgModule({
  declarations: [
    AddProvePage,
  ],
  imports: [
    IonicPageModule.forChild(AddProvePage),
  ],
  exports: [
    AddProvePage
  ]
})
export class AddProvePageModule {}