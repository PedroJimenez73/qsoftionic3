import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddClientePage } from "./addcliente";

@NgModule({
  declarations: [
    AddClientePage,
  ],
  imports: [
    IonicPageModule.forChild(AddClientePage),
  ],
  exports: [
    AddClientePage
  ]
})
export class AddClientePageModule {}