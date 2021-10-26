import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  hide = true;
  newUser= new User()
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {}

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Por favor ingrese un correo electrónico';
    }

    return this.email.hasError('email') ? 'Correo incorrecto, por favor introduzca uno válido' : '';
  }

  signUp(){
    console.log(this.newUser);
    this.authService.signUp(this.newUser).then(res=>{
      //Acá va el popup de creado
      console.log('usuario creado');
      console.log(this.newUser);
      this.route.navigate(['/home-view']);
    }).catch(err=>console.log('error'));
  }



}
