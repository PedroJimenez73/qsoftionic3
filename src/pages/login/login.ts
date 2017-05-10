import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';

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
        this.nav.setRoot(HomePage)
      } else {
        this.showError("Access Denied");
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
      title: 'Fail',
      message: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}
