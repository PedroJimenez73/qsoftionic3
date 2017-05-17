import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewNoconfPage } from './viewnoconf';

@NgModule({
  declarations: [
    ViewNoconfPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewNoconfPage),
  ],
  exports: [
    ViewNoconfPage
  ]
})
export class ViewNoconfPageModule {}