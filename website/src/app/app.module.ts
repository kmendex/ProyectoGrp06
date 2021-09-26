import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {firebaseConfig} from '../environments/environment';
//import { AngularFireModule } from '@angular/fire';
//import {AngularFireAuthModule} from '@angular/fire/auth/auth.module'
//import {AngularFireStorageModule} from '@angular/fire/storage/storage.module'
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule
    , IonicModule.forRoot()
    , AppRoutingModule
    , BrowserAnimationsModule
   // , AngularFireModule.initializeApp(firebaseConfig)
   // , AngularFireAuthModule
    //, AngularFireStorageModule

  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
