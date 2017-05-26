import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Clientes } from '../../providers/clientes';

@IonicPage()
@Component({
  selector: 'page-editcliente',
  templateUrl: 'editcliente.html'
})
export class EditClientePage {
 
  cliente: any;
  _id: any;
  nombre: any;
  cif: any;
  direccion: any;
  telefono: any;
  persona: any;
  mail: any;

  constructor(public nav: NavController, public clienteService: Clientes, public navParams: NavParams, public viewCtrl: ViewController) {
     this.cliente = navParams.get('cliente');

  }

  
  

 
  save(): void {
 
    let cliente = {
      id: this.cliente._id,
      nombre: this.cliente.nombre,
      cif: this.cliente.cif,
      direccion: this.cliente.direccion,
      telefono: this.cliente.telefono,
      persona: this.cliente.persona,
      mail: this.cliente.mail
    };
  
    this.clienteService.updateCliente(cliente);

    this.viewCtrl.dismiss();
    
 
  }

  close(): void {
    this.viewCtrl.dismiss();
  }


 

}