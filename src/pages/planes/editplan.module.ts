import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditPlanPage } from './editplan';

@NgModule({
  declarations: [
    EditPlanPage,
  ],
  imports: [
    IonicPageModule.forChild(EditPlanPage),
  ],
  exports: [
    EditPlanPage
  ]
})
export class EditPlanPageModule {}