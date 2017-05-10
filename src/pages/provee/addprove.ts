import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
 
@Component({
  selector: 'page-addprove',
  templateUrl: 'addprove.html'
})
export class AddProvePage {
 
  nombre: any;
  servicio: any;
  cif: any;
  direccion: any;
  telefono: any;
  persona: any;
  mail: any;
  pago: any;
  nc: any;
  eval: any;
  fechamodif: any;
 
  constructor(public viewCtrl: ViewController) {
 
  }
 
  save(): void {
 
    let prove = {
      nombre: this.nombre,
      servicio: this.servicio,
      cif: this.cif,
      direccion: this.direccion,
      telefono: this.telefono,
      persona: this.persona,
      mail: this.mail,
      pago: this.pago,
      nc: this.nc,
      eval: this.eval,
      fechamodif: this.fechamodif
    };
 
    this.viewCtrl.dismiss(prove);
 
  }
 
  close(): void {
    this.viewCtrl.dismiss();
  }
}