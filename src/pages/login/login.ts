import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { RegisterPage } from '../register/register';
import { IonicPage } from 'ionic-angular';


@IonicPage()

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loading: Loading;
  registerCredentials = {email: '', password: ''};
  restInfo = {};

  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {}

  // Push the registerPage
  public createAccount() {
    this.nav.push(RegisterPage);
  }

  // Submit the login form, login the user with our provider and push Home page if successful
  public onSubmit() {
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(data => {
      if (data !== '') {
        this.loading.dismiss();
        this.nav.setRoot('HomePage');
        //this.nav.push('HomePage');
      } else {
        this.showError("Aceso Denegado");
      }
    },
    error => {
      this.showError(error._body);
    });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Iniciando sesión...'
    });
    this.loading.present();
  }

  showError(text) {
      this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Error',
      message: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}
