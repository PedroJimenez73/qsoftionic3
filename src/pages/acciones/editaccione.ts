import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Acciones } from "../../providers/acciones";
import { Users } from "../../providers/users";

@IonicPage()
@Component({
  selector: 'page-editaccione',
  templateUrl: 'editaccione.html'
})
export class EditAccionePage {

  users: any;
 
  accione: any;
  _id: any;
  accion: any;
  ncasoc: any;
  tipo: any;
  responsable: any;
  fecha: any;
  tareas: any;
  seguimiento: any;

  constructor(public nav: NavController, public accioneService: Acciones, public userService: Users, public navParams: NavParams, public viewCtrl: ViewController) {
     this.accione = navParams.get('accione');
  }

  ionViewDidLoad(){
 
    this.userService.getUsers().then((data) => {
      console.log(data);
      this.users = data;
    });
 
  }

  save(): void {
 
    let accione = {
      id: this.accione._id,
      accion: this.accion,
      ncasoc: this.ncasoc,
      tipo: this.tipo,
      responsable: this.responsable,
      fecha: this.fecha,
      tareas: this.tareas,
      seguimiento: this.seguimiento
    };

    console.log(accione);
  
    this.accioneService.updateAccione(accione);

    this.viewCtrl.dismiss();
    
 
  }

  close(): void {
    this.viewCtrl.dismiss();
  }


 

}