import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  createSuccess = false;
  registerCredentials = {email: '', password: ''};

  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController) {}

  // Register a new user at our API
  public register() {
    this.auth.register(this.registerCredentials).subscribe(success => {
      if (success !== '') {
        this.createSuccess = true;
        this.showPopup("Success", "Cuenta Creada.");
      } else {
        this.showPopup("Error", "Error al crear la cuenta.");
      }
    },
    error => {
      this.showPopup("Error", error._body);
    });
  }

  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      message: text,
      buttons: [
       {
         text: 'OK',
         handler: data => {
           if (this.createSuccess) {
             this.nav.popToRoot();
           }
         }
       }
     ]
    });
    alert.present();
  }
}
