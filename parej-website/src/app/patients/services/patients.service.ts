import { Injectable } from '@angular/core';
import { Patient } from '../models/patient';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private AFauth: AngularFireAuth,private db: AngularFirestore) { }

  addPatient(patient: Patient){
      this.AFauth.currentUser.then(res=>{
        patient.patientId=this.db.createId();
        patient.physioId=res.uid;
        this.db.collection('patients').doc(patient.patientId).set({
          patientId:patient.patientId
          ,name:patient.name
          ,identification: patient.identification
          ,email:patient.email
          ,phoneNumber:patient.phoneNumber
          ,description: patient.description
          ,avatar:patient.avatar
          ,physioId:patient.physioId}).then().catch(err=> err);
      });
  }
  getPatients(){
    return this.db.collection('patients').snapshotChanges().pipe(map(courses=>{
      return courses.map(course=>{
        const data = course.payload.doc.data() as Patient;
        data.patientId=course.payload.doc.id;
        return data;
      });
    }));
    
  }
  getMyPatients(){
    return new Promise((resolve,rejected)=>{
      this.AFauth.currentUser.then(res=>{
        this.db.collection('patients').ref.where('physioId', '==', res.uid).get().then(res=>{
          const data: Patient[] =[];
          res.forEach(doc =>{
            data.push(doc.data() as Patient);        
          });
          resolve(data);
        }).catch(err=>rejected(err));
      }).catch();
    });
  }
}
