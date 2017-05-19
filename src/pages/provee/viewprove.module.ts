import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewProvePage } from "./viewprove";

@NgModule({
  declarations: [
    ViewProvePage,
  ],
  imports: [
    IonicPageModule.forChild(ViewProvePage),
  ],
  exports: [
    ViewProvePage
  ]
})
export class ViewProvePageModule {}