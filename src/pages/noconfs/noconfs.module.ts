import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoconfsPage } from "./noconfs";

@NgModule({
  declarations: [
    NoconfsPage,
  ],
  imports: [
    IonicPageModule.forChild(NoconfsPage),
  ],
  exports: [
    NoconfsPage
  ]
})
export class NoconfsPageModule {}