import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-planif',
  templateUrl: 'planif.html'
})
export class PlanifPage {

 
  constructor(public nav: NavController, public modalCtrl: ModalController) {
  
  }
  goToRiesgos() {
    this.nav.push('RiesgosPage');
  }
 



}
