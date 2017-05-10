import { Injectable, Inject } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { AuthHttp, JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Storage } from '@ionic/storage';

let storage = new Storage();

export class User {
  email: string;

  constructor(email: string) {
    this.email = email;
  }
}

const CONFIG = {
  apiUrl: 'http://ec2-52-35-12-75.us-west-2.compute.amazonaws.com:3001/',
};

@Injectable()
export class AuthService {
  currentUser: User;
  userToken = '';
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private http: Http, public authHttp: AuthHttp, public storage: Storage) {}

  // Login a user with email + password and store the JWT
  public login(credentials) {
    return this.http.post(CONFIG.apiUrl + 'users/login', credentials)
      .map(response => response.json())
      .map(data => {
        this.setCurrentUser(data.id_token);
        return data.id_token;
      });
  }

  // Register a new user at our API
  public register(credentials) {
    return this.http.post(CONFIG.apiUrl + 'users', credentials)
      .map(response => response.json())
      .map(data => {
        this.setCurrentUser(data.id_token);
        return data.id_token;
      });
  }

  // The route to the pulbic information, not used currently
  public getPublicInformation() {
    return this.http.get(CONFIG.apiUrl + 'api/information')
    .map(response => response.json());
  }

  // The route to the secret information, only accesible with valid token
  public getSecretInformation() {
    return this.authHttp.get(CONFIG.apiUrl + 'api/protected/information')
      .map(response => response.json());
  }

  // Store the token and current user information local
  private setCurrentUser(token) {
    this.userToken = token;
    this.currentUser = new User(this.jwtHelper.decodeToken(this.userToken).email);
    return this.storage.set('id_token', token);
  }

  // Remove the JWT from our storage
  public deleteToken() {
    this.userToken = '';
    return this.storage.set('id_token', '');
  }

  public getUserInfo() : User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      this.deleteToken();
      observer.next(true);
      observer.complete();
    });
  }

  loggedIn() {
     return this.storage.get('id_token').then(token => {
      return tokenNotExpired(null, token);
    });
  }
}
