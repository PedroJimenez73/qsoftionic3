import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { Planes } from "../../providers/planes";

@IonicPage()
@Component({
  selector: 'page-viewplan',
  templateUrl: 'viewplan.html'
})
export class ViewPlanPage {

  plane: any;
 
  constructor(public nav: NavController, public planService: Planes, public navParams: NavParams, public viewCtrl: ViewController) {
    this.plane = navParams.get('plane');

  }
 
  close(): void {
    this.viewCtrl.dismiss();
  }



}