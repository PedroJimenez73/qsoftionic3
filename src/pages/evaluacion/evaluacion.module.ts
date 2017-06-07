import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EvaluacionPage } from "./evaluacion";

@NgModule({
  declarations: [
    EvaluacionPage,
  ],
  imports: [
    IonicPageModule.forChild(EvaluacionPage),
  ],
  exports: [
    EvaluacionPage
  ]
})
export class EvaluacionPageModule {}