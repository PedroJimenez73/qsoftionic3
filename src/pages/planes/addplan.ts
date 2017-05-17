import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import { Users } from "../../providers/users";


@IonicPage()
@Component({
  selector: 'page-addplan',
  templateUrl: 'addplan.html'
})
export class AddPlanPage {

  users: any;
 
  fecha: any;
  alcance: any;
  objeto: any;
  responsable: any;
  documentacion: any;
  sistematica: any;
 
  constructor(public viewCtrl: ViewController, public userService: Users) {
 
  }

  ionViewDidLoad(){
 
    this.userService.getUsers().then((data) => {
      console.log(data);
      this.users = data;
    });
 
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