import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-mejora',
  templateUrl: 'mejora.html'
})
export class MejoraPage {

 
  constructor(public nav: NavController, public modalCtrl: ModalController) {
  
  }
  goToNoconform() {
    this.nav.push('NoconfsPage');
  }
  goToAcciones() {
    this.nav.push('AccionesPage');
  }


 



}