import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { ApoyoPage } from "../apoyo/apoyo";

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html'
})
export class MapaPage {

 
  constructor(public nav: NavController, public modalCtrl: ModalController) {
  
  }
  goToApoyo() {
    this.nav.push(ApoyoPage);
  }
 



}