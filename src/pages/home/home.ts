import {Component} from '@angular/core';
import { IonicPage, NavController, AlertController, ToastController} from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  email = '';
  information = {};

  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private toastCtrl: ToastController) {
    let info = this.auth.getUserInfo();
    this.email = info.email;
  }

  // Destroy our JWT Token by hand
  forceDeleteToken() {
    this.auth.deleteToken().then(() => {
      let toast = this.toastCtrl.create({
        message: 'JWT was deleted',
        duration: 3000
      });
      toast.present();
    });
  }

  // load the secret information from our API
  loadInformation() {
    this.auth.getSecretInformation().subscribe(data => {
      this.information = data;
    },
    error => {
      if (error.status === 401) {
        this.showForceLogoutInfo();
      }
    });
  }

  //Push the details page
  goToDetails() {
    this.nav.push('DetailsPage')
    .catch((err) => {
      this.showForceLogoutInfo();
    });
  }

  logout() {
    this.auth.logout().subscribe(succ => {
        this.nav.setRoot(LoginPage)
    });
  }

  showForceLogoutInfo() {
    let alert = this.alertCtrl.create({
      title: 'Unauthorized',
      enableBackdropDismiss: false,
      message: 'Your token has expired, you will be redirected to the login',
      buttons: [
      {
        text: 'OK',
        handler: () => {
          this.logout();
        }
      }
    ]
    });
    alert.present(prompt);
  }
  goToMapa() {
    this.nav.push('MapaPage');
  }

  goToPlanes() {
    this.nav.push('PlanesPage');
  }

  goToDocs() {
    this.nav.push('MedioambPage');
  }

  goToSgi() {
    this.nav.push('SgiPage');
  }

  goToIndicadores() {
    this.nav.push('IndicadoresPage');
  }
  goToRiesgos() {
    this.nav.push('RiesgosPage');
  }
  goToNoconfs() {
    this.nav.push('NoconfsPage');
  }
  goToAcciones() {
    this.nav.push('AccionesPage');
  }
  goToClientes() {
    this.nav.push('ClientesPage');
  }
  goToReclamaciones() {
    this.nav.push('ReclamasPage');
  }
  goToReg() {
    this.nav.push('RegisterPage');
  }
}
