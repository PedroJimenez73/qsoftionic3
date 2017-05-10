import { DetailsPage } from './../pages/details/details';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../providers/auth-service';
import { RegisterPage } from '../pages/register/register';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { CursosPage } from "../pages/cursos/cursos";
import { ViewCursoPage } from "../pages/cursos/viewcurso";
import { AddCursoPage } from "../pages/cursos/addcurso";
import { EditCursoPage } from "../pages/cursos/editcurso";
import { ProvesPage } from "../pages/provee/provees";
import { AddProvePage } from "../pages/provee/addprove";
import { EditProvePage } from "../pages/provee/editprove";
import { ViewProvePage } from "../pages/provee/viewprove";
import { Proves } from "../providers/proves";
import { Cursos } from "../providers/cursos";
import { PlanifPage } from "../pages/planificacion/planif";
import { RiesgosPage } from "../pages/riesgos/riesgos";
import { MapaPage } from "../pages/mapa/mapa";
import { ApoyoPage } from "../pages/apoyo/apoyo";
import { Planes } from "../providers/planes";
import { PlanesPage } from "../pages/planes/planes";
import { AddPlanPage } from "../pages/planes/addplan";
import { EditPlanPage } from "../pages/planes/editplan";
import { ViewPlanPage } from "../pages/planes/viewplan";


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
    HomePage,
    LoginPage,
    RegisterPage,
    DetailsPage,
    CursosPage,
    ViewCursoPage,
    AddCursoPage,
    EditCursoPage,
    ProvesPage,
    AddProvePage,
    EditProvePage,
    ViewProvePage,
    PlanifPage,
    RiesgosPage,
    MapaPage,
    ApoyoPage,
    PlanesPage,
    AddPlanPage,
    EditPlanPage,
    ViewPlanPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    DetailsPage,
    CursosPage,
    ViewCursoPage,
    AddCursoPage,
    EditCursoPage,
    ProvesPage,
    AddProvePage,
    EditProvePage,
    ViewProvePage,
    PlanifPage,
    RiesgosPage,
    MapaPage,
    ApoyoPage,
    PlanesPage,
    AddPlanPage,
    EditPlanPage,
    ViewPlanPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Cursos,
    Proves,
    Planes,
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
