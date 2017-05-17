import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditRiesgoPage } from './editriesgo';

@NgModule({
  declarations: [
    EditRiesgoPage,
  ],
  imports: [
    IonicPageModule.forChild(EditRiesgoPage),
  ],
  exports: [
    EditRiesgoPage
  ]
})
export class EditRiesgoPageModule {}