import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {  Administrator, Promoter , Supervisor } from '../models/user';
import 'rxjs/add/operator/switchMap';
@Injectable()
export class AuthService {
  admin: Observable<Administrator>;
  //user: Observable<User>;
  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {
  }
  public createUserWithEmailAndPassword(email,password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email,password)
               .then(admin => {
                 return this.setAdministratorToDatabase(admin);
               })
               .catch(err=> console.log(err));
  }
  public setAdministratorToDatabase(admin) {
    const userRef: AngularFirestoreDocument<Administrator> = this.afs.doc(`administrators/${admin.uid}`);
    const data: Administrator = {
      uid: admin.uid,
      name: admin.name,
      email: admin.email || null,
    }
    console.log(data);
    //return userRef.set(data);
  }
  public logoutUser() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/login']);
  }
}