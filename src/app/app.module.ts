import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import { AuthService } from '../providers/auth-service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Storage } from '@ionic/storage';

import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { ProvesPage } from "../pages/provee/provees";
import { AddProvePage } from "../pages/provee/addprove";
import { EditProvePage } from "../pages/provee/editprove";
import { ViewProvePage } from "../pages/provee/viewprove";
import { Proves } from "../providers/proves";
import { Cursos } from "../providers/cursos";
import { RiesgosPage } from "../pages/riesgos/riesgos";
import { Planes } from "../providers/planes";
import { Docs } from "../providers/docs";
import { Indicadores } from "../providers/indicadores";



let storage = new Storage();

export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    noJwtError: true,
    globalHeaders: [{'Accept': 'application/json'}],
    tokenGetter: (() => storage.get('id_token')),
  }), http);
}

const cloudSettings: CloudSettings = {

'core': {

'app_id': '50a8b31f'

}

};

@NgModule({
  declarations: [
    MyApp,
    ProvesPage,
    AddProvePage,
    EditProvePage,
    ViewProvePage,
    RiesgosPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    CloudModule.forRoot(cloudSettings)
  ],
  
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProvesPage,
    AddProvePage,
    EditProvePage,
    ViewProvePage,
    RiesgosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Cursos,
    Proves,
    Planes,
    Docs,
    Indicadores,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http]
    }
  ]
})
export class AppModule {}
