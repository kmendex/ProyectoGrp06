import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { User } from '../../models/user';
@Component({
  selector: 'app-recovery-pass',
  templateUrl: './recovery-pass.component.html',
  styleUrls: ['./recovery-pass.component.scss'],
})
export class RecoveryPassComponent implements OnInit {
  newUser= new User();
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor() { }

  ngOnInit() {}

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Por favor ingrese un correo electrónico';
    }

    return this.email.hasError('email') ? 'Correo incorrecto, por favor introduzca uno válido' : '';
  }

}
