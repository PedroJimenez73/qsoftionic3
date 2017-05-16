import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndicadoresPage } from "./indicadores";

@NgModule({
  declarations: [
    IndicadoresPage,
  ],
  imports: [
    IonicPageModule.forChild(IndicadoresPage),
  ],
  exports: [
    IndicadoresPage
  ]
})
export class IndicadoresPageModule {}