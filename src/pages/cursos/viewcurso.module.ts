import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewCursoPage } from "./viewcurso";

@NgModule({
  declarations: [
    ViewCursoPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewCursoPage),
  ],
  exports: [
    ViewCursoPage
  ]
})
export class ViewCursoPageModule {}