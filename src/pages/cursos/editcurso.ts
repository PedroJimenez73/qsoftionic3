import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Cursos } from '../../providers/cursos';

@IonicPage()
@Component({
  selector: 'page-editcurso',
  templateUrl: 'editcurso.html'
})
export class EditCursoPage {
 
  curso: any;
  _id: any;
  titulo: any;
  organizador: any;
  horas: any;
  asistentes: any;
  fechas: any;
  observaciones: any;
  fechamodif: any;

  constructor(public nav: NavController, public cursoService: Cursos, public navParams: NavParams, public viewCtrl: ViewController) {
     this.curso = navParams.get('curso');
     /*this.curso.titulo = navParams.get('curso.titulo');
     this.curso.organizador = navParams.get('curso.organizador');
     this.curso.horas = navParams.get('curso.horas');
     this.curso.asistentes = navParams.get('curso.asistentes');
     this.curso.fechas = navParams.get('curso.fechas');
     this.curso.observaciones = navParams.get('curso.observaciones');
     this.curso.fechamodif = navParams.get('curso.fechamodif');*/

  }

  
  

 
  save(): void {
 
    let curso = {
      id: this.curso._id,
      titulo: this.curso.titulo,
      organizador: this.curso.organizador,
      horas: this.curso.horas,
      asistentes: this.curso.asistentes,
      fechas: this.curso.fechas,
      observaciones: this.curso.observaciones,
      fechamodif: this.curso.fechamodif
    };
  
    this.cursoService.updateCurso(curso);

    this.viewCtrl.dismiss();
    
 
  }

  close(): void {
    this.viewCtrl.dismiss();
  }


 

}