import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditReclamaPage } from './editreclamacion';

@NgModule({
  declarations: [
    EditReclamaPage,
  ],
  imports: [
    IonicPageModule.forChild(EditReclamaPage),
  ],
  exports: [
    EditReclamaPage
  ]
})
export class EditReclamaPageModule {}