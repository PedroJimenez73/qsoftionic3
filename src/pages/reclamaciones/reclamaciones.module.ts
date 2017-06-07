import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReclamasPage } from "./reclamaciones";

@NgModule({
  declarations: [
    ReclamasPage,
  ],
  imports: [
    IonicPageModule.forChild(ReclamasPage),
  ],
  exports: [
    ReclamasPage
  ]
})
export class ReclamasPageModule {}