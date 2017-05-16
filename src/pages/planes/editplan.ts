import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Planes } from "../../providers/planes";

@IonicPage()
@Component({
  selector: 'page-editplan',
  templateUrl: 'editplan.html'
})
export class EditPlanPage {
 
  plane: any;
  _id: any;
  fecha: any;
  alcance: any;
  objeto: any;
  responsable: any;
  documentacion: any;
  sistematica: any;

  constructor(public nav: NavController, public planService: Planes, public navParams: NavParams, public viewCtrl: ViewController) {
     this.plane = navParams.get('plane');
     /*this.curso.titulo = navParams.get('curso.titulo');
     this.curso.organizador = navParams.get('curso.organizador');
     this.curso.horas = navParams.get('curso.horas');
     this.curso.asistentes = navParams.get('curso.asistentes');
     this.curso.fechas = navParams.get('curso.fechas');
     this.curso.observaciones = navParams.get('curso.observaciones');
     this.curso.fechamodif = navParams.get('curso.fechamodif');*/

  }

  save(): void {
 
    let plane = {
      id: this.plane._id,
      fecha: this.plane.fecha,
      alcance: this.plane.alcance,
      objeto: this.plane.objeto,
      responsable: this.plane.responsable,
      documentacion: this.plane.documentacion,
      sistematica: this.plane.sistematica
    };
  
    this.planService.updatePlan(plane);

    this.viewCtrl.dismiss();
    
 
  }

  close(): void {
    this.viewCtrl.dismiss();
  }


 

}