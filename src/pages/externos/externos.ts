import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { Products } from "../../providers/products";


@IonicPage()
@Component({
  selector: 'page-externos',
  templateUrl: 'externos.html'
})
export class ExternosPage {

  products: any;

 
  constructor(public nav: NavController, public productService: Products, public modalCtrl: ModalController) {

  }
 
  ionViewDidLoad(){
 
    this.productService.getProducts().then((data) => {
      console.log(data);
      this.products = data;
    });
 
  }

}
