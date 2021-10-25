import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecoveryPassComponent } from './components/recovery-pass/recovery-pass.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [RecoveryPassComponent, SignInComponent, SignUpComponent],
  exports: [RecoveryPassComponent, SignInComponent, SignUpComponent],
  imports: [
    CommonModule
    ,FormsModule
    ,IonicModule
    ,MatFormFieldModule
    ,MatIconModule
    ,MatInputModule
    ,ReactiveFormsModule
  ]
})
export class AuthModule { }
