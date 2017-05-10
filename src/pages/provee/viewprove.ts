import { Component } from "@angular/core";
import { NavController, NavParams, ViewController} from 'ionic-angular';
import { Proves } from "../../providers/proves";


@Component({
  selector: 'page-viewprove',
  templateUrl: 'viewprove.html'
})
export class ViewProvePage {

  prove: any;


 
  constructor(public nav: NavController, public proveService: Proves, public navParams: NavParams, public viewCtrl: ViewController) {
    this.prove = navParams.get('prove');

  }


  close(): void {
    this.viewCtrl.dismiss();
  }
 
  



}