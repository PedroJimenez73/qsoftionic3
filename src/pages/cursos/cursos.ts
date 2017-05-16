import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from 'ionic-angular';

import { Cursos } from '../../providers/cursos';

@IonicPage()
@Component({
  selector: 'page-cursos',
  templateUrl: 'cursos.html'
})
export class CursosPage {

  cursos: any;
 
  constructor(public nav: NavController, public cursoService: Cursos, public modalCtrl: ModalController) {
  
  }
 
  ionViewDidLoad(){
 
    this.cursoService.getCursos().then((data) => {
      console.log(data);
      this.cursos = data;
    });
 
  }

 

  viewCurso(curso){
    this.nav.push('ViewCursoPage', {curso: curso});
  }




  addCurso(){
 
    let modal = this.modalCtrl.create('AddCursoPage');
 
    modal.onDidDismiss(curso => {
      if(curso){
        this.cursos.push(curso);
        this.cursoService.createCurso(curso);        
      }
    });
 
    modal.present();
 
  }

  editCurso(curso){
    this.nav.push('EditCursoPage', {curso: curso});
  }




  deleteCurso(curso){
 
    //Remove locally
      let index = this.cursos.indexOf(curso);
 
      if(index > -1){
        this.cursos.splice(index, 1);
      }   
 
    //Remove from database
    this.cursoService.deleteCurso(curso._id);
  }


}
