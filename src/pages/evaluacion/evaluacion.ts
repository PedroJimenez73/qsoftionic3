import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-evaluacion',
  templateUrl: 'evaluacion.html'
})
export class EvaluacionPage {

 
  constructor(public nav: NavController, public modalCtrl: ModalController) {
  
  }
  goToPlanes() {
    this.nav.push('PlanesPage');
  }



 



}