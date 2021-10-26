import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {FormControl, Validators} from '@angular/forms';
import { RecoveryPassComponent } from '../recovery-pass/recovery-pass.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import {MatIconRegistry} from '@angular/material/icon'
import {DomSanitizer} from '@angular/platform-browser'
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  password: string='';
  newUser= new User()
  constructor(
    public modalController: ModalController
    , private authService: AuthService
    , private route: Router
    ,private matIconRegistry:MatIconRegistry
    ,private domSanitzer:DomSanitizer
  ) { }

  ngOnInit() {}

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Por favor ingrese un correo electrónico';
    }

    return this.email.hasError('email') ? 'Correo incorrecto, por favor introduzca uno válido' : '';
  }
  async recoveryModal() {
    this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: RecoveryPassComponent,
      cssClass: 'recovery-pass-popover-class'
    });
    return await modal.present();
  }
  async registerModal() {
    this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: SignUpComponent,
      cssClass: 'sign-up-popover-class'
    });
    return await modal.present();
  }
  login(){
    this.authService.signIn(this.newUser.email, this.newUser.password).then(res=>{
      //Popup autenticación
      console.log('Usuario autenticado');
      this.route.navigate(['/mapa']);
      
    }).catch(err=>console.log('error'));
  }
  back(){
    this.modalController.dismiss({
      'dismissed': true
    })
  }

}
