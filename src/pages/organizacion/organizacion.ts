import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-organizacion',
  templateUrl: 'organizacion.html'
})
export class OrganizacionPage {

 
  constructor(public nav: NavController, public modalCtrl: ModalController) {
  
  }
  goToManual() {
    this.nav.push('ManualPage');
  }
 



}
