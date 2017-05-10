import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Planes } from "../../providers/planes";

@Component({
  selector: 'page-editplan',
  templateUrl: 'editplan.html'
})
export class EditPlanPage {
 
  plan: any;
  _id: any;
  fecha: any;
  alcance: any;
  objeto: any;
  responsable: any;
  documentacion: any;
  sistematica: any;

  constructor(public nav: NavController, public planService: Planes, public navParams: NavParams, public viewCtrl: ViewController) {
     this.plan = navParams.get('plan');
     /*this.curso.titulo = navParams.get('curso.titulo');
     this.curso.organizador = navParams.get('curso.organizador');
     this.curso.horas = navParams.get('curso.horas');
     this.curso.asistentes = navParams.get('curso.asistentes');
     this.curso.fechas = navParams.get('curso.fechas');
     this.curso.observaciones = navParams.get('curso.observaciones');
     this.curso.fechamodif = navParams.get('curso.fechamodif');*/

  }

  save(): void {
 
    let plan = {
      id: this.plan._id,
      fecha: this.plan.fecha,
      alcance: this.plan.alcance,
      objeto: this.plan.objeto,
      responsable: this.plan.responsable,
      documentacion: this.plan.documentacion,
      sistematica: this.plan.sistematica
    };
  
    this.planService.updatePlan(plan);

    this.viewCtrl.dismiss();
    
 
  }

  close(): void {
    this.viewCtrl.dismiss();
  }


 

}