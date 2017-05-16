import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { Docs } from "../../providers/docs";


@IonicPage()
@Component({
  selector: 'page-medioamb',
  templateUrl: 'medioamb.html'
})
export class MedioambPage {

  docs: any;

 
  constructor(public nav: NavController, public docService: Docs, public modalCtrl: ModalController) {

  }
 
  ionViewDidLoad(){
 
    this.docService.getDocs().then((data) => {
      console.log(data);
      this.docs = data;
    });
 
  }

}
