import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from 'ionic-angular';

import { Noconfs } from '../../providers/noconfs';

@IonicPage()
@Component({
  selector: 'page-noconfs',
  templateUrl: 'noconfs.html'
})
export class NoconfsPage {

  noconfs: any;
 
  constructor(public nav: NavController, public noconfService: Noconfs, public modalCtrl: ModalController) {
  
  }
 
  ionViewDidLoad(){
 
    this.noconfService.getNoconfs().then((data) => {
      console.log(data);
      this.noconfs = data;
    });
 
  }


  viewNoconf(noconf){
    this.nav.push('ViewNoconfPage', {noconf: noconf});
  }




  addNoconf(){
 
    let modal = this.modalCtrl.create('AddNoconfPage');
 
    modal.onDidDismiss(noconf => {
      if(noconf){
        this.noconfs.push(noconf);
        this.noconfService.createNoconf(noconf);        
      }
    });
 
    modal.present();
 
  }

  editNoconf(noconf){
    this.nav.push('EditNoconfPage', {noconf: noconf});
  }




  deleteNoconf(noconf){
 
    //Remove locally
      let index = this.noconfs.indexOf(noconf);
 
      if(index > -1){
        this.noconfs.splice(index, 1);
      }   
 
    //Remove from database
    this.noconfService.deleteNoconf(noconf._id);
  }

}
