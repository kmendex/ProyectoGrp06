import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private AFauth: AngularFireAuth, private db : AngularFirestore) { }

  createUser(user: User){
    return new Promise((resolve, rejected)=>{
      this.db.collection('users').doc(user.userID).set({
        userID:user.userID,
        name: user.name,
        email:user.email,
        password: user.password,
        avatar: user.avatar
      }).then(res=>{
        resolve(res);
      }).catch(err=>(rejected));
    });
  }
}
