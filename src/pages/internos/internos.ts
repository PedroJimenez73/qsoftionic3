import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { Internos } from "../../providers/internos";


@IonicPage()
@Component({
  selector: 'page-internos',
  templateUrl: 'internos.html'
})
export class InternosPage {

  internos: any;

 
  constructor(public nav: NavController, public internoService: Internos, public modalCtrl: ModalController) {

  }
 
  ionViewDidLoad(){
 
    this.internoService.getInternos().then((data) => {
      console.log(data);
      this.internos = data;
    });
 
  }

}
