import { AuthService } from './../../providers/auth-service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthService) {}

  // Check if a user can enter this page by validating the token
  ionViewCanEnter() {
    return this.auth.loggedIn();
  }

}
