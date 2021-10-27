import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import {User} from '../models/user'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private AFauth: AngularFireAuth
    , private db : AngularFirestore
    , private userService: UserService
    , private route: Router
  ) { }

  signIn(email: string, password: string){
    return new Promise((resolve, rejected)=>{
      this.AFauth.signInWithEmailAndPassword(email, password).then(res=>{
        resolve(res);
      }).catch(err=>rejected(err));
    });
  }

  sigInGoogle(){
    return new Promise(async (resolve, rejected)=>{
      const res = await this.AFauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      if (res.additionalUserInfo.isNewUser){
        var newUser = new User();
        newUser.avatar = res.user.photoURL,
        newUser.email = res.user.email,
        newUser.name = res.user.displayName,
        newUser.userID = res.user.uid
        this.userService.createUser(newUser);
      }
      const user = res.user;
      resolve(user)
    })
  }

  signUp(user: User){
    return new Promise((resolve, rejected)=>{
      this.AFauth.createUserWithEmailAndPassword(user.email, user.password).then(res=>{
        user.userID=res.user.uid;
        //Pendiente agregar indicador de usuarios registrados.
        this.userService.createUser(user); // Revisar popups
        resolve(res);
      }).catch(err=>rejected(err));
      this.AFauth.signOut() // Consultar si regresa a la página de cuenta para el acceso
    });
  }

  logout(){
    this.AFauth.signOut().then(auth=>{
      this.route.navigate(['/home-view']);
    })
  }



  recoveryPassword(email: string){
    this.AFauth.sendPasswordResetEmail(email).then(res=>{
      this.route.navigate(['/mapa']);
    })
  }
}
