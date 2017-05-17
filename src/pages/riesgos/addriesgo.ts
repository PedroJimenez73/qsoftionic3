import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import { Users } from "../../providers/users";


@IonicPage()
@Component({
  selector: 'page-addriesgo',
  templateUrl: 'addriesgo.html'
})
export class AddRiesgoPage {

  users: any;
 
  proceso: any;
  responsable: any;
  riesgo: any;
  oportunidad: any;
  control: any;
 
  constructor(public viewCtrl: ViewController, public userService: Users) {
 
  }

  ionViewDidLoad(){
 
    this.userService.getUsers().then((data) => {
      console.log(data);
      this.users = data;
    });
 
  }
 
  save(): void {
 
    let riesgo = {
      proceso: this.proceso,
      responsable: this.responsable,
      riesgo: this.riesgo,
      oportunidad: this.oportunidad,
      control: this.control
    };
 
    this.viewCtrl.dismiss(riesgo);
 
  }
 
  close(): void {
    this.viewCtrl.dismiss();
  }
}