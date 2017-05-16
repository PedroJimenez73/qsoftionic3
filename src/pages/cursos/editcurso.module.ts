import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditCursoPage } from "./editcurso";

@NgModule({
  declarations: [
    EditCursoPage,
  ],
  imports: [
    IonicPageModule.forChild(EditCursoPage),
  ],
  exports: [
    EditCursoPage
  ]
})
export class EditCursoPageModule {}