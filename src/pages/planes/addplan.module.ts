import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPlanPage } from './addplan';

@NgModule({
  declarations: [
    AddPlanPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPlanPage),
  ],
  exports: [
    AddPlanPage
  ]
})
export class AddPlanPageModule {}