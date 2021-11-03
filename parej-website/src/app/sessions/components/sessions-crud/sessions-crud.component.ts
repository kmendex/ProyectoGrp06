import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Session } from '../../models/session';
import { SessionsService } from '../../services/sessions.service';

@Component({
  selector: 'app-sessions-crud',
  templateUrl: './sessions-crud.component.html',
  styleUrls: ['./sessions-crud.component.scss'],
})
export class SessionsCrudComponent implements OnInit {
  newSession: Session;
  //email = new FormControl('', [Validators.required, Validators.email]);
  constructor( private sessionsService:SessionsService) { 
    this.newSession = new Session();
    this.newSession.date = new Date().toLocaleDateString();
  }

  ngOnInit() {}

  addSession(){
    this.sessionsService.addSession(this.newSession);
  }

  getErrorMessage() {
    /*if (this.email.hasError('required')) {
      return 'Por favor ingrese un correo electrónico';
    }*/

    //return this.email.hasError('email') ? 'Correo incorrecto, por favor introduzca uno válido' : '';
  }

}
