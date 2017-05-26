import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditClientePage } from "./editcliente";

@NgModule({
  declarations: [
    EditClientePage,
  ],
  imports: [
    IonicPageModule.forChild(EditClientePage),
  ],
  exports: [
    EditClientePage
  ]
})
export class EditClientePageModule {}