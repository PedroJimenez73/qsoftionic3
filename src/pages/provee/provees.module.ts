import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProvesPage } from "./provees";

@NgModule({
  declarations: [
    ProvesPage,
  ],
  imports: [
    IonicPageModule.forChild(ProvesPage),
  ],
  exports: [
    ProvesPage
  ]
})
export class ProvesPageModule {}