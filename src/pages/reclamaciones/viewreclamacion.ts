import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { Reclamas } from "../../providers/reclamaciones";

@IonicPage()
@Component({
  selector: 'page-viewnreclama',
  templateUrl: 'viewreclamacion.html'
})
export class ViewReclamaPage {

  reclama: any;
 
  constructor(public nav: NavController, public reclamaService: Reclamas, public navParams: NavParams, public viewCtrl: ViewController) {
    this.reclama = navParams.get('reclama');

  }
 
  close(): void {
    this.viewCtrl.dismiss();
  }



}