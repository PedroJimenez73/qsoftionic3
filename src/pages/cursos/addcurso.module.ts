import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCursoPage } from "./addcurso";

@NgModule({
  declarations: [
    AddCursoPage,
  ],
  imports: [
    IonicPageModule.forChild(AddCursoPage),
  ],
  exports: [
    AddCursoPage
  ]
})
export class AddCursoPageModule {}