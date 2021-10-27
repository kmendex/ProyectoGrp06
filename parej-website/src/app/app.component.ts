import { Component } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon'
import {DomSanitizer} from '@angular/platform-browser'
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
   private matIconRegistry:MatIconRegistry
   ,private domSanitzer:DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'lock',
      this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icon/auth/lock.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'unlock',
      this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icon/auth/unlock.svg')
    );
   }
}
