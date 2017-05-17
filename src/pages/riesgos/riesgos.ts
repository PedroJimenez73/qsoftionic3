import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from 'ionic-angular';

import { Riesgos } from '../../providers/riesgos';

@IonicPage()
@Component({
  selector: 'page-riesgos',
  templateUrl: 'riesgos.html'
})
export class RiesgosPage {

  riesgos: any;
 
  constructor(public nav: NavController, public riesgoService: Riesgos, public modalCtrl: ModalController) {
  
  }
 
  ionViewDidLoad(){
 
    this.riesgoService.getRiesgos().then((data) => {
      console.log(data);
      this.riesgos = data;
    });
 
  }


  viewRiesgo(riesgo){
    this.nav.push('ViewRiesgoPage', {riesgo: riesgo});
  }




  addRiesgo(){
 
    let modal = this.modalCtrl.create('AddRiesgoPage');
 
    modal.onDidDismiss(riesgo => {
      if(riesgo){
        this.riesgos.push(riesgo);
        this.riesgoService.createRiesgo(riesgo);        
      }
    });
 
    modal.present();
 
  }

  editRiesgo(riesgo){
    this.nav.push('EditRiesgoPage', {riesgo: riesgo});
  }




  deleteRiesgo(riesgo){
 
    //Remove locally
      let index = this.riesgos.indexOf(riesgo);
 
      if(index > -1){
        this.riesgos.splice(index, 1);
      }   
 
    //Remove from database
    this.riesgoService.deleteRiesgo(riesgo._id);
  }

}
