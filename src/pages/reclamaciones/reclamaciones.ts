import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from 'ionic-angular';

import { Reclamas } from '../../providers/reclamaciones';

@IonicPage()
@Component({
  selector: 'page-reclamas',
  templateUrl: 'reclamaciones.html'
})
export class ReclamasPage {

  reclamas: any;
 
  constructor(public nav: NavController, public reclamaService: Reclamas, public modalCtrl: ModalController) {
  
  }
 
  ionViewDidLoad(){
 
    this.reclamaService.getReclamas().then((data) => {
      console.log(data);
      this.reclamas = data;
    });
 
  }

 

  viewReclama(reclama){
    this.nav.push('ViewReclamaPage', {reclama: reclama});
  }




  addReclama(){
 
    let modal = this.modalCtrl.create('AddReclamaPage');
 
    modal.onDidDismiss(reclama => {
      if(reclama){
        this.reclamas.push(reclama);
        this.reclamaService.createReclama(reclama);        
      }
    });
 
    modal.present();
 
  }

  editReclama(reclama){
    this.nav.push('EditReclamaPage', {reclama: reclama});
  }




  deleteReclama(reclama){
 
    //Remove locally
      let index = this.reclamas.indexOf(reclama);
 
      if(index > -1){
        this.reclamas.splice(index, 1);
      }   
 
    //Remove from database
    this.reclamaService.deleteReclama(reclama._id);
  }


}
