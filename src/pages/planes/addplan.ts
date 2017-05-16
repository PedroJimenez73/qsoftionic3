import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-addplan',
  templateUrl: 'addplan.html'
})
export class AddPlanPage {
 
  fecha: any;
  alcance: any;
  objeto: any;
  responsable: any;
  documentacion: any;
  sistematica: any;
 
  constructor(public viewCtrl: ViewController) {
 
  }
 
  save(): void {
 
    let plane = {
      fecha: this.fecha,
      alcance: this.alcance,
      objeto: this.objeto,
      responsable: this.responsable,
      documentacion: this.documentacion,
      sistematica: this.sistematica
    };
 
    this.viewCtrl.dismiss(plane);
 
  }
 
  close(): void {
    this.viewCtrl.dismiss();
  }
}