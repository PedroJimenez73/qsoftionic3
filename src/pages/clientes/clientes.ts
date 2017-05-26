import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from 'ionic-angular';

import { Clientes } from '../../providers/clientes';

@IonicPage()
@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html'
})
export class ClientesPage {

  clientes: any;
 
  constructor(public nav: NavController, public clienteService: Clientes, public modalCtrl: ModalController) {
  
  }
 
  ionViewDidLoad(){
 
    this.clienteService.getClientes().then((data) => {
      console.log(data);
      this.clientes = data;
    });
 
  }

 

  viewCliente(cliente){
    this.nav.push('ViewClientePage', {cliente: cliente});
  }




  addCliente(){
 
    let modal = this.modalCtrl.create('AddClientePage');
 
    modal.onDidDismiss(cliente => {
      if(cliente){
        this.clientes.push(cliente);
        this.clienteService.createCliente(cliente);        
      }
    });
 
    modal.present();
 
  }

  editCliente(cliente){
    this.nav.push('EditClientePage', {cliente: cliente});
  }




  deleteCliente(cliente){
 
    //Remove locally
      let index = this.clientes.indexOf(cliente);
 
      if(index > -1){
        this.clientes.splice(index, 1);
      }   
 
    //Remove from database
    this.clienteService.deleteCliente(cliente._id);
  }


}
