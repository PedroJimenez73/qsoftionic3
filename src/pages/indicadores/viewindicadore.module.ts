import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewIndicadorePage } from './viewindicadore';

@NgModule({
  declarations: [
    ViewIndicadorePage,
  ],
  imports: [
    IonicPageModule.forChild(ViewIndicadorePage),
  ],
  exports: [
    ViewIndicadorePage
  ]
})
export class ViewIndicadorePageModule {}