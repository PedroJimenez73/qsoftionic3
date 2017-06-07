import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html'
})
export class MapaPage {

 
  constructor(public nav: NavController, public modalCtrl: ModalController) {
  
  }
  goToApoyo() {
    this.nav.push('ApoyoPage');
  }
  goToPlanif() {
    this.nav.push('PlanifPage');
  }
  goToNec() {
    this.nav.push('NecesidadesPage');
  }
  goToOrganizacion() {
    this.nav.push('OrganizacionPage');
  }
    goToRequisitos() {
    this.nav.push('RequisitosPage');
  }
 



}