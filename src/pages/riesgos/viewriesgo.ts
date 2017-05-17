import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { Riesgos } from "../../providers/riesgos";

@IonicPage()
@Component({
  selector: 'page-viewriesgo',
  templateUrl: 'viewriesgo.html'
})
export class ViewRiesgoPage {

  riesgo: any;
 
  constructor(public nav: NavController, public riesgoService: Riesgos, public navParams: NavParams, public viewCtrl: ViewController) {
    this.riesgo = navParams.get('riesgo');

  }
 
  close(): void {
    this.viewCtrl.dismiss();
  }



}