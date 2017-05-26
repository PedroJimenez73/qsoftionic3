import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewClientePage } from "./viewcliente";

@NgModule({
  declarations: [
    ViewClientePage,
  ],
  imports: [
    IonicPageModule.forChild(ViewClientePage),
  ],
  exports: [
    ViewClientePage
  ]
})
export class ViewClientePageModule {}