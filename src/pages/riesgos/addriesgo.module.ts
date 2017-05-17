import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddRiesgoPage } from './addriesgo';

@NgModule({
  declarations: [
    AddRiesgoPage,
  ],
  imports: [
    IonicPageModule.forChild(AddRiesgoPage),
  ],
  exports: [
    AddRiesgoPage
  ]
})
export class AddRiesgoPageModule {}