import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from 'ionic-angular';

import { Acciones } from '../../providers/acciones';

@IonicPage()
@Component({
  selector: 'page-acciones',
  templateUrl: 'acciones.html'
})
export class AccionesPage {

  acciones: any;
 
  constructor(public nav: NavController, public accioneService: Acciones, public modalCtrl: ModalController) {
  
  }
 
  ionViewDidLoad(){
 
    this.accioneService.getAcciones().then((data) => {
      console.log(data);
      this.acciones = data;
    });
 
  }

 

  viewAccione(accione){
    this.nav.push('ViewAccionePage', {accione: accione});
  }




  addAccione(){
 
    let modal = this.modalCtrl.create('AddAccionePage');
 
    modal.onDidDismiss(accione => {
      if(accione){
        this.acciones.push(accione);
        this.accioneService.createAccione(accione);        
      }
    });
 
    modal.present();
 
  }

  editAccione(accione){
    this.nav.push('EditAccionePage', {accione: accione});
  }




  deleteAccione(accione){
 
    //Remove locally
      let index = this.acciones.indexOf(accione);
 
      if(index > -1){
        this.acciones.splice(index, 1);
      }   
 
    //Remove from database
    this.accioneService.deleteAccione(accione._id);
  }


}
