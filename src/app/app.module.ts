import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular'
;
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { VideoPlayer } from '@ionic-native/video-player/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//  Firebase modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';


// Environment
import { environment } from '../environments/environment';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    VideoPlayer,
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    }
    ],
  bootstrap: [AppComponent],
})
export class AppModule {}
