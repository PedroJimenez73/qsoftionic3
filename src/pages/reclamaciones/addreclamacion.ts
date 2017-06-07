import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import { Clientes } from "../../providers/clientes";

@IonicPage()
@Component({
  selector: 'page-addreclama',
  templateUrl: 'addreclamacion.html'
})
export class AddReclamaPage {
 
clientes: any;
  
  fecha: any;
  cliente: any;
  departamento: any;
  descripcion: any;
  seguimiento: any;
 
  constructor(public viewCtrl: ViewController, public clienteService: Clientes) {
 
  }

ionViewDidLoad(){
 
    this.clienteService.getClientes().then((data) => {
      console.log(data);
      this.clientes = data;
    });
 
  }
 
  save(): void {
 
    let reclama = {
      fecha: this.fecha,
      cliente: this.cliente,
      departamento: this.departamento,
      descripcion: this.descripcion,
      seguimiento: this.seguimiento
    };
 
    this.viewCtrl.dismiss(reclama);
 
  }
 
  close(): void {
    this.viewCtrl.dismiss();
  }
}