import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor( 
     private menuCtrl: MenuController
    , private authService: AuthService
    , private route: Router) { }

  ngOnInit() {}
  logout(){
    this.authService.logout();
    this.toggleMenu();

  }
  toggleMenu(){
    this.menuCtrl.toggle();
  }

}
