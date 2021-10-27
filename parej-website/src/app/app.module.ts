import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { firebaseConfig } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { YouTubePlayerModule } from '@angular/youtube-player';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
     AngularFireModule.initializeApp(firebaseConfig)
    ,AngularFireAuthModule
    ,BrowserAnimationsModule
    ,BrowserModule
    ,IonicModule.forRoot()
    ,AppRoutingModule,SharedModule, HttpClientModule, MatIconModule, YouTubePlayerModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
