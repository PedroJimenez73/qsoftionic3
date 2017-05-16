import { Component } from "@angular/core";
import {  IonicPage, NavController, ModalController } from 'ionic-angular';
import { Planes } from "../../providers/planes";

@IonicPage()
@Component({
  selector: 'page-planes',
  templateUrl: 'planes.html'
})
export class PlanesPage {

  planes: any;
 
  constructor(public nav: NavController, public planService: Planes, public modalCtrl: ModalController) {
  
  }
 
  ionViewDidLoad(){
 
    this.planService.getPlanes().then((data) => {
      console.log(data);
      this.planes = data;
    });
 
  }
  
  viewPlan(plane){
    this.nav.push('ViewPlanPage', {plane: plane});
  }

  addPlan(){
 
    let modal = this.modalCtrl.create('AddPlanPage');
 
    modal.onDidDismiss(plane => {
      if(plane){
        this.planes.push(plane);
        this.planService.createPlan(plane);        
      }
    });
 
    modal.present();
 
  }

  editPlan(plane){
    this.nav.push('EditPlanPage', {plane: plane});
  }

  deletePlan(plane){
 
    //Remove locally
      let index = this.planes.indexOf(plane);
 
      if(index > -1){
        this.planes.splice(index, 1);
      }   
 
    //Remove from database
    this.planService.deletePlan(plane._id);
  }

}
