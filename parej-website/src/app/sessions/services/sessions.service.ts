import { Injectable } from '@angular/core';
import { Session } from '../models/session';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  constructor(private AFauth: AngularFireAuth,private db: AngularFirestore) { }

  addSession(session: Session){
      this.AFauth.currentUser.then(res=>{
        session.sessionId = this.db.createId();        
        session.physioId=res.uid;
        this.db.collection('sessions').doc(session.sessionId).set({
          sessionId: session.sessionId
          ,patientId: session.patientId
          ,activityId: session.activityId
          ,date: session.date
          ,hour: session.hour
          ,avatar: session.avatar
          ,duration: session.duration
          ,patientName: session.patientName          
          ,physioId:session.physioId}).then().catch(err=> err);
      });
  }
  getSessions(){    
    return this.db.collection('sessions').snapshotChanges().pipe(map(sessions=>{
      return sessions.map(session=>{
        let data = session.payload.doc.data() as Session;
        data.sessionId = session.payload.doc.id;
        return data;
      });
    }));
    
  }
  getMySessions(){
    return new Promise((resolve,rejected)=>{
      this.AFauth.currentUser.then(res=>{
        this.db.collection('sessions').ref.where('physioId', '==', res.uid).get().then(res=>{
          const data: Session[] =[];
          res.forEach(doc =>{
            data.push(doc.data() as Session);        
          });
          resolve(data);
        }).catch(err=>rejected(err));
      }).catch();
    });
  }
}
