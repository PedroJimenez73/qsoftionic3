import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Planes } from "../../providers/planes";
import { Users } from "../../providers/users";

@IonicPage()
@Component({
  selector: 'page-editplan',
  templateUrl: 'editplan.html'
})
export class EditPlanPage {

  users: any;
 
  plane: any;
  _id: any;
  fecha: any;
  alcance: any;
  objeto: any;
  responsable: any;
  documentacion: any;
  sistematica: any;

  constructor(public nav: NavController, public planService: Planes, public userService: Users, public navParams: NavParams, public viewCtrl: ViewController) {
     this.plane = navParams.get('plane');
  }

  ionViewDidLoad(){
 
    this.userService.getUsers().then((data) => {
      console.log(data);
      this.users = data;
    });
 
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