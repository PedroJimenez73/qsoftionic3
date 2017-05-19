import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditProvePage } from "./editprove";

@NgModule({
  declarations: [
    EditProvePage,
  ],
  imports: [
    IonicPageModule.forChild(EditProvePage),
  ],
  exports: [
    EditProvePage
  ]
})
export class EditProvePageModule {}