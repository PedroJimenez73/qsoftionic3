import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-addcliente',
  templateUrl: 'addcliente.html'
})
export class AddClientePage {
 
  nombre: any;
  cif: any;
  direccion: any;
  telefono: any;
  persona: any;
  mail: any;
 
  constructor(public viewCtrl: ViewController) {
 
  }
 
  save(): void {
 
    let cliente = {
      nombre: this.nombre,
      cif: this.cif,
      direccion: this.direccion,
      telefono: this.telefono,
      persona: this.persona,
      mail: this.mail
    };
 
    this.viewCtrl.dismiss(cliente);
 
  }
 
  close(): void {
    this.viewCtrl.dismiss();
  }
}