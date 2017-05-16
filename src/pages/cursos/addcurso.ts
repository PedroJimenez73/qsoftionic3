import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-addcurso',
  templateUrl: 'addcurso.html'
})
export class AddCursoPage {
 
  titulo: any;
  organizador: any;
  horas: any;
  asistentes: any;
  fechas: any;
  observaciones: any;
  fechamodif: any;
 
  constructor(public viewCtrl: ViewController) {
 
  }
 
  save(): void {
 
    let curso = {
      titulo: this.titulo,
      organizador: this.organizador,
      horas: this.horas,
      asistentes: this.asistentes,
      fechas: this.fechas,
      observaciones: this.observaciones,
      fechamodif: this.fechamodif
    };
 
    this.viewCtrl.dismiss(curso);
 
  }
 
  close(): void {
    this.viewCtrl.dismiss();
  }
}