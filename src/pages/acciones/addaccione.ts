import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import { Users } from "../../providers/users";


@IonicPage()
@Component({
  selector: 'page-addaccione',
  templateUrl: 'addaccione.html'
})
export class AddAccionePage {

  users: any;
 
  accion: any;
  ncasoc: any;
  tipo: any;
  responsable: any;
  fecha: any;
  tareas: any;
  seguimiento: any;
 
  constructor(public viewCtrl: ViewController, public userService: Users) {
 
  }

  ionViewDidLoad(){
 
    this.userService.getUsers().then((data) => {
      console.log(data);
      this.users = data;
    });
 
  }
 
  save(): void {
 
    let accione = {
      accion: this.accion,
      ncasoc: this.ncasoc,
      tipo: this.tipo,
      responsable: this.responsable,
      fecha: this.fecha,
      tareas: this.tareas,
      seguimiento: this.seguimiento
    };
 
    this.viewCtrl.dismiss(accione);
 
  }
 
  close(): void {
    this.viewCtrl.dismiss();
  }
}