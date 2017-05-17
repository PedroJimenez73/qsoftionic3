import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditNoconfPage } from './editnoconf';

@NgModule({
  declarations: [
    EditNoconfPage,
  ],
  imports: [
    IonicPageModule.forChild(EditNoconfPage),
  ],
  exports: [
    EditNoconfPage
  ]
})
export class EditNoconfPageModule {}