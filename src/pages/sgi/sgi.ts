import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sgi',
  templateUrl: 'sgi.html'
})
export class SgiPage {

 
  constructor(public nav: NavController, public modalCtrl: ModalController) {
  
  }
  goToExternos() {
    this.nav.push('ExternosPage');
  }

  goToInternos() {
    this.nav.push('InternosPage');
  }
  
  goToProcesos() {
    this.nav.push('ProcesosPage');
  }
 



}
