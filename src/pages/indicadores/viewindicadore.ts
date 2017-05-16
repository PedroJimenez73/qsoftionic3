import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { Indicadores } from "../../providers/indicadores";

@IonicPage()
@Component({
  selector: 'page-viewindicadore',
  templateUrl: 'viewindicadore.html'
})
export class ViewIndicadorePage {

  indicadore: any;
 
  constructor(public nav: NavController, public indicadoreService: Indicadores, public navParams: NavParams, public viewCtrl: ViewController) {
    this.indicadore = navParams.get('indicadore');

  }
 
  close(): void {
    this.viewCtrl.dismiss();
  }



}