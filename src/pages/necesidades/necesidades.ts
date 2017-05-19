import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-necesidades',
  templateUrl: 'necesidades.html'
})
export class NecesidadesPage {

 
  constructor(public nav: NavController, public modalCtrl: ModalController) {
  
  }
  goToProves() {
    this.nav.push('ProvesPage');
  }
 



}