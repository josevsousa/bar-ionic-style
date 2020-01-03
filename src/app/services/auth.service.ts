import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;

  constructor(
    private afs: AngularFireAuth
  ) {
    this.getAuthStatus();
   }

  login(user: User){
    return this.afs.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  register(user: User){
    return this.afs.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  logout(){
    return this.afs.auth.signOut();
  }


  getAuth(){
    return this.afs.auth;
  }  
    
  getAuthStatus(){
    this.afs.auth.onAuthStateChanged((user)=>{
      this.user = user;
    })
  }



}
