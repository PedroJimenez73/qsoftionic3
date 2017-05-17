import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewRiesgoPage } from './viewriesgo';

@NgModule({
  declarations: [
    ViewRiesgoPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewRiesgoPage),
  ],
  exports: [
    ViewRiesgoPage
  ]
})
export class ViewRiesgoPageModule {}