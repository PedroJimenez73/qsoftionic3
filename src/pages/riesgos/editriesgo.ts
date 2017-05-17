import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Riesgos } from "../../providers/riesgos";
import { Users } from "../../providers/users";

@IonicPage()
@Component({
  selector: 'page-editriesgo',
  templateUrl: 'editriesgo.html'
})
export class EditRiesgoPage {

  users: any;
 
  riesgo: any;
  _id: any;
  proceso: any;
  responsable: any;
  //riesgo: any;
  oportunidad: any;
  control: any;

  constructor(public nav: NavController, public riesgoService: Riesgos, public userService: Users, public navParams: NavParams, public viewCtrl: ViewController) {
     this.riesgo = navParams.get('riesgo');
  }

  ionViewDidLoad(){
 
    this.userService.getUsers().then((data) => {
      console.log(data);
      this.users = data;
    });
 
  }

  save(): void {
 
    let riesgo = {
      id: this.riesgo._id,
      proceso: this.riesgo.proceso,
      responsable: this.riesgo.responsable,
      riesgo: this.riesgo.riesgo,
      oportunidad: this.riesgo.oportunidad,
      control: this.riesgo.control
    };
  
    this.riesgoService.updateRiesgo(riesgo);

    this.viewCtrl.dismiss();
    
 
  }

  close(): void {
    this.viewCtrl.dismiss();
  }


 

}