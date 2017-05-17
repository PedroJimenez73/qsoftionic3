import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Users } from "../../providers/users";
import { Noconfs } from "../../providers/noconfs";

@IonicPage()
@Component({
  selector: 'page-editnoconf',
  templateUrl: 'editnoconf.html'
})
export class EditNoconfPage {

  users: any;
 
  noconf: any;
  _id: any;
  numero: any;
  fecha: any;
  tipo: any;
  departamento: any;
  descripcion: any;
  causa: any;
  responsables: any;
  seguimiento: any;

  constructor(public nav: NavController, public noconfService: Noconfs, public userService: Users, public navParams: NavParams, public viewCtrl: ViewController) {
     this.noconf = navParams.get('noconf');
  }

  ionViewDidLoad(){
 
    this.userService.getUsers().then((data) => {
      console.log(data);
      this.users = data;
    });
 
  }

  save(): void {
 
    let noconf = {
      id: this.noconf._id,
      numero: this.noconf.proceso,
      fecha: this.noconf.fecha,
      tipo: this.noconf.tipo,
      departamento: this.noconf.departamento,
      descripcion: this.noconf.descripcion,
      causa: this.noconf.causa,
      responsables: this.noconf.responsables,
      seguimiento: this.noconf.seguimiento
    };
  
    this.noconfService.updateNoconf(noconf);

    this.viewCtrl.dismiss();
    
 
  }

  close(): void {
    this.viewCtrl.dismiss();
  }


 

}