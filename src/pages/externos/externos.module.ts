import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExternosPage } from "./externos";

@NgModule({
  declarations: [
    ExternosPage,
  ],
  imports: [
    IonicPageModule.forChild(ExternosPage),
  ],
  exports: [
    ExternosPage
  ]
})
export class ExternosPageModule {}