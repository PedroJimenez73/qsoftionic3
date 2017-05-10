import { Component } from "@angular/core";
import { NavController, ModalController } from 'ionic-angular';
import { Planes } from "../../providers/planes";
import { ViewPlanPage } from "./viewplan";
import { AddPlanPage } from "./addplan";
import { EditPlanPage } from "./editplan";


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
  
  viewPlan(plan){
    this.nav.push(ViewPlanPage, {plan: plan});
  }

  addPlan(){
 
    let modal = this.modalCtrl.create(AddPlanPage);
 
    modal.onDidDismiss(plan => {
      if(plan){
        this.planes.push(plan);
        this.planService.createPlan(plan);        
      }
    });
 
    modal.present();
 
  }

  editPlan(plan){
    this.nav.push(EditPlanPage, {plan: plan});
  }

  deletePlan(plan){
 
    //Remove locally
      let index = this.planes.indexOf(plan);
 
      if(index > -1){
        this.planes.splice(index, 1);
      }   
 
    //Remove from database
    this.planService.deletePlan(plan._id);
  }

}
