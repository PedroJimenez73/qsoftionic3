import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { Manuales } from "../../providers/manuales";


@IonicPage()
@Component({
  selector: 'page-manual',
  templateUrl: 'manual.html'
})
export class ManualPage {

  manuales: any;

 
  constructor(public nav: NavController, public manualService: Manuales, public modalCtrl: ModalController) {

  }
 
  ionViewDidLoad(){
 
    this.manualService.getManuales().then((data) => {
      console.log(data);
      this.manuales = data;
    });
 
  }

}
