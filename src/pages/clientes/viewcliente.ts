import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { Clientes } from '../../providers/clientes';

@IonicPage()
@Component({
  selector: 'page-viewcliente',
  templateUrl: 'viewcliente.html'
})
export class ViewClientePage {

  cliente: any;


 
  constructor(public nav: NavController, public cursoService: Clientes, public navParams: NavParams, public viewCtrl: ViewController) {
    this.cliente = navParams.get('cliente');

  }
 
  close(): void {
    this.viewCtrl.dismiss();
  }



}