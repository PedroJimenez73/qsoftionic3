import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-requisitos',
  templateUrl: 'requisitos.html'
})
export class RequisitosPage {

 
  constructor(public nav: NavController, public modalCtrl: ModalController) {
  
  }
  goToReclamaciones() {
    this.nav.push('ReclamasPage');
  }
 



}
