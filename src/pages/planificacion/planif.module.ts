import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlanifPage } from "./planif";

@NgModule({
  declarations: [
    PlanifPage,
  ],
  imports: [
    IonicPageModule.forChild(PlanifPage),
  ],
  exports: [
    PlanifPage
  ]
})
export class PlanifPageModule {}