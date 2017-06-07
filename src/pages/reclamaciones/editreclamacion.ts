import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Clientes } from "../../providers/clientes";
import { Reclamas } from "../../providers/reclamaciones";

@IonicPage()
@Component({
  selector: 'page-editreclama',
  templateUrl: 'editreclamacion.html'
})
export class EditReclamaPage {

  clientes: any;
 
  reclama: any;
  _id: any;
  fecha: any;
  cliente: any;
  departamento: any;
  descripcion: any;
  seguimiento: any;

  constructor(public nav: NavController, public reclamaService: Reclamas, public clienteService: Clientes, public navParams: NavParams, public viewCtrl: ViewController) {
     this.reclama = navParams.get('reclama');
  }

  ionViewDidLoad(){
 
    this.clienteService.getClientes().then((data) => {
      console.log(data);
      this.clientes = data;
    });
 
  }

  save(): void {
 
    let reclama = {
      id: this.reclama._id,
      fecha: this.reclama.fecha,
      cliente: this.reclama.cliente,
      departamento: this.reclama.departamento,
      descripcion: this.reclama.descripcion,
      seguimiento: this.reclama.seguimiento
    };
  
    this.reclamaService.updateReclama(reclama);

    this.viewCtrl.dismiss();
    
 
  }

  close(): void {
    this.viewCtrl.dismiss();
  }


 

}