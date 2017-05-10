import { Component } from "@angular/core";
import { NavController, ModalController } from 'ionic-angular';
import { ApoyoPage } from "../apoyo/apoyo";


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