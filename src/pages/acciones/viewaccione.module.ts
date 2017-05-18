import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewAccionePage } from './viewaccione';

@NgModule({
  declarations: [
    ViewAccionePage,
  ],
  imports: [
    IonicPageModule.forChild(ViewAccionePage),
  ],
  exports: [
    ViewAccionePage
  ]
})
export class ViewAccionePageModule {}