import { Component } from "@angular/core";
import {  IonicPage, NavController, ModalController } from 'ionic-angular';
import { Indicadores } from "../../providers/indicadores";

@IonicPage()
@Component({
  selector: 'page-indicadores',
  templateUrl: 'indicadores.html'
})
export class IndicadoresPage {

  indicadores: any;
 
  constructor(public nav: NavController, public indicadoreService: Indicadores, public modalCtrl: ModalController) {
  
  }
 
  ionViewDidLoad(){
 
    this.indicadoreService.getIndicadores().then((data) => {
      console.log(data);
      this.indicadores = data;
    });
 
  }
  
  viewIndicadore(indicadore){
    this.nav.push('ViewIndicadorePage', {indicadore: indicadore});
  }

}
