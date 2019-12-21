import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afs: AngularFireAuth
  ) { }

  login(user: User){
    return this.afs.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  register(user: User){
    return this.afs.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  logout(){

  }

  getAuth(){
    return this.afs.auth;
  }
}
