import { Component } from "@angular/core";
import { NavController, ModalController } from 'ionic-angular';
import { Proves } from "../../providers/proves";
import { ViewProvePage } from "./viewprove";
import { AddProvePage } from "./addprove";
import { EditProvePage } from "./editprove";


@Component({
  selector: 'page-provees',
  templateUrl: 'provees.html'
})
export class ProvesPage {

  proves: any;
 
  constructor(public nav: NavController, public proveService: Proves, public modalCtrl: ModalController) {
  
  }
 
  ionViewDidLoad(){
 
    this.proveService.getProves().then((data) => {
      console.log(data);
      this.proves = data;
    });
 
  }

 

  viewProve(prove){
    this.nav.push(ViewProvePage, {prove: prove});
  }




  addProve(){
 
    let modal = this.modalCtrl.create(AddProvePage);
 
    modal.onDidDismiss(prove => {
      if(prove){
        this.proves.push(prove);
        this.proveService.createProve(prove);        
      }
    });
 
    modal.present();
 
  }

  editProve(prove){
    this.nav.push(EditProvePage, {prove: prove});
  }




  deleteProve(prove){
 
    //Remove locally
      let index = this.proves.indexOf(prove);
 
      if(index > -1){
        this.proves.splice(index, 1);
      }   
 
    //Remove from database
    this.proveService.deleteProve(prove._id);
  }


}
