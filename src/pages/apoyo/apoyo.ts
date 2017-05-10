import { Component } from "@angular/core";
import { NavController, ModalController } from 'ionic-angular';
import { CursosPage } from "../cursos/cursos";


@Component({
  selector: 'page-apoyo',
  templateUrl: 'apoyo.html'
})
export class ApoyoPage {

 
  constructor(public nav: NavController, public modalCtrl: ModalController) {
  
  }
  goToCursos() {
    this.nav.push(CursosPage);
  }
 



}