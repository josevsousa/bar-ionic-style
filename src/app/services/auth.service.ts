import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;

  constructor(
    private db: AngularFirestore,
    private afs: AngularFireAuth
  ) {
    this.getAuthStatus();
   }

   async login() {
    try {
      const user = await this.afs.auth.signInWithPopup(new auth.GoogleAuthProvider());
      await   this.db.collection('users').doc(user.user.uid).set(
        {
          displayName: user.user.displayName,
          email: user.user.email,
          photoURL: user.user.photoURL,
          uid: user.user.uid
        }
      );
    } catch (error) {
      console.log(error)
    }
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
