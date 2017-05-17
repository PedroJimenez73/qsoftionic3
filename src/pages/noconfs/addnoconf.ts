import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import { Users } from "../../providers/users";


@IonicPage()
@Component({
  selector: 'page-addnoconf',
  templateUrl: 'addnoconf.html'
})
export class AddNoconfPage {

  users: any;
 
  numero: any;
  fecha: any;
  tipo: any;
  departamento: any;
  descripcion: any;
  causa: any;
  responsables: any;
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
 
    let noconf = {
      numero: this.numero,
      fecha: this.fecha,
      tipo: this.tipo,
      departamento: this.departamento,
      descripcion: this.descripcion,
      causa: this.causa,
      responsables: this.responsables,
      seguimiento: this.seguimiento
    };
 
    this.viewCtrl.dismiss(noconf);
 
  }
 
  close(): void {
    this.viewCtrl.dismiss();
  }
}