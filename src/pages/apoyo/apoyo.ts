import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-apoyo',
  templateUrl: 'apoyo.html'
})
export class ApoyoPage {

 
  constructor(public nav: NavController, public modalCtrl: ModalController) {
  
  }
  goToCursos() {
    this.nav.push('CursosPage');
  }
 



}