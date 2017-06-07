import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddReclamaPage } from "./addreclamacion";

@NgModule({
  declarations: [
    AddReclamaPage,
  ],
  imports: [
    IonicPageModule.forChild(AddReclamaPage),
  ],
  exports: [
    AddReclamaPage
  ]
})
export class AddReclamaPageModule {}