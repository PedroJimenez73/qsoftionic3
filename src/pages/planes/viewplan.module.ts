import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewPlanPage } from './viewplan';

@NgModule({
  declarations: [
    ViewPlanPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewPlanPage),
  ],
  exports: [
    ViewPlanPage
  ]
})
export class ViewPlanPageModule {}