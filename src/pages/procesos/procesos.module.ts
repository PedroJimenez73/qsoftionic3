import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProcesosPage } from "./procesos";

@NgModule({
  declarations: [
    ProcesosPage,
  ],
  imports: [
    IonicPageModule.forChild(ProcesosPage),
  ],
  exports: [
    ProcesosPage
  ]
})
export class ProcesosPageModule {}