import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewReclamaPage } from './viewreclamacion';

@NgModule({
  declarations: [
    ViewReclamaPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewReclamaPage),
  ],
  exports: [
    ViewReclamaPage
  ]
})
export class ViewReclamaPageModule {}