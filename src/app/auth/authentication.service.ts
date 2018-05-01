import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/switchMap';
interface User {
  uid: string;
  email: string;
}
@Injectable()
export class AuthService {
  user: Observable<User>;
  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {
  }
  public createUserWithEmailAndPassword(email,password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email,password)
               .then(user => {
                 return this.setUserToDatabase(user);
               })
               .catch(err=> console.log(err));
  }
  public setUserToDatabase(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    console.log(user.uid);
    const data: User = {
      uid: user.uid,
      email: user.email || null,
    }
    console.log(data);
    return userRef.set(data);
  }
}