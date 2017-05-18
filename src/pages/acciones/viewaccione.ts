import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { Acciones } from "../../providers/acciones";

@IonicPage()
@Component({
  selector: 'page-viewaccione',
  templateUrl: 'viewaccione.html'
})
export class ViewAccionePage {

  accione: any;
 
  constructor(public nav: NavController, public accioneService: Acciones, public navParams: NavParams, public viewCtrl: ViewController) {
    this.accione = navParams.get('accione');

  }
 
  close(): void {
    this.viewCtrl.dismiss();
  }



}