import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { Noconfs } from "../../providers/noconfs";

@IonicPage()
@Component({
  selector: 'page-viewnoconf',
  templateUrl: 'viewnoconf.html'
})
export class ViewNoconfPage {

  noconf: any;
 
  constructor(public nav: NavController, public noconfService: Noconfs, public navParams: NavParams, public viewCtrl: ViewController) {
    this.noconf = navParams.get('noconf');

  }
 
  close(): void {
    this.viewCtrl.dismiss();
  }



}