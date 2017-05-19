import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Proves } from "../../providers/proves";

@IonicPage()
@Component({
  selector: 'page-editprove',
  templateUrl: 'editprove.html'
})
export class EditProvePage {
 
  prove: any;
  _id: any;
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


  constructor(public nav: NavController, public proveService: Proves, public navParams: NavParams, public viewCtrl: ViewController) {
     this.prove = navParams.get('prove');
    

  }

  
  

 
  save(): void {
 
    let prove = {
      id: this.prove._id,
      nombre: this.prove.nombre,
      servicio: this.prove.servicio,
      cif: this.prove.cif,
      direccion: this.prove.direccion,
      telefono: this.prove.telefono,
      persona: this.prove.persona,
      mail: this.prove.mail,
      pago: this.prove.pago,
      nc: this.prove.nc,
      eval: this.prove.eval,
      fechamodif: this.prove.fechamodif
    };
  
    this.proveService.updateProve(prove);

    this.viewCtrl.dismiss();
    
 
  }

  close(): void {
    this.viewCtrl.dismiss();
  }

  


 

}