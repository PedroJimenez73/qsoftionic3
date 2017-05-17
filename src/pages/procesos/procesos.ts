import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { Procesos } from "../../providers/procesos";


@IonicPage()
@Component({
  selector: 'page-procesos',
  templateUrl: 'procesos.html'
})
export class ProcesosPage {

  procesos: any;

 
  constructor(public nav: NavController, public procesoService: Procesos, public modalCtrl: ModalController) {

  }
 
  ionViewDidLoad(){
 
    this.procesoService.getProcesos().then((data) => {
      console.log(data);
      this.procesos = data;
    });
 
  }

}
