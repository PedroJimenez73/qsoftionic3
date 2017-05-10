import { Component } from "@angular/core";
import { NavController, NavParams, ViewController} from 'ionic-angular';
import { Planes } from "../../providers/planes";


@Component({
  selector: 'page-viewplan',
  templateUrl: 'viewplan.html'
})
export class ViewPlanPage {

  plan: any;
 
  constructor(public nav: NavController, public planService: Planes, public navParams: NavParams, public viewCtrl: ViewController) {
    this.plan = navParams.get('plan');

  }
 
  close(): void {
    this.viewCtrl.dismiss();
  }



}