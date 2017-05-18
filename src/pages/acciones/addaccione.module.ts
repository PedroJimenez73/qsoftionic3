import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAccionePage } from './addaccione';

@NgModule({
  declarations: [
    AddAccionePage,
  ],
  imports: [
    IonicPageModule.forChild(AddAccionePage),
  ],
  exports: [
    AddAccionePage
  ]
})
export class AddAccionePageModule {}