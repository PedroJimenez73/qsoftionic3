import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditAccionePage } from './editaccione';

@NgModule({
  declarations: [
    EditAccionePage,
  ],
  imports: [
    IonicPageModule.forChild(EditAccionePage),
  ],
  exports: [
    EditAccionePage
  ]
})
export class EditAccionePageModule {}