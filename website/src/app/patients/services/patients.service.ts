import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore/firestore';
import {AngularFireAuth} from '@angular/fire/auth/auth';
import { Patient } from '../models/patient';
@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private AFauth: AngularFireAuth,private db: AngularFirestore) { }

  

}
