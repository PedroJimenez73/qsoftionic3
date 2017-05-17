import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNoconfPage } from './addnoconf';

@NgModule({
  declarations: [
    AddNoconfPage,
  ],
  imports: [
    IonicPageModule.forChild(AddNoconfPage),
  ],
  exports: [
    AddNoconfPage
  ]
})
export class AddNoconfPageModule {}