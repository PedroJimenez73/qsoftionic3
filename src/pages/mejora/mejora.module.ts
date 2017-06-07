import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MejoraPage } from "./mejora";

@NgModule({
  declarations: [
    MejoraPage,
  ],
  imports: [
    IonicPageModule.forChild(MejoraPage),
  ],
  exports: [
    MejoraPage
  ]
})
export class MejoraPageModule {}