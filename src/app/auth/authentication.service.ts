import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { User,Administrator, Promoter , Supervisor } from '../models/user';
import 'rxjs/add/operator/switchMap';
@Injectable()
export class AuthService {
  admin: Observable<Administrator>;
  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {
  }
  public createUserWithEmailAndPassword(administrator: Administrator) {
    return this.afAuth.auth.createUserWithEmailAndPassword(administrator.email,administrator.password)
               .then(admin => {
                 this.setAdministratorToDatabase(admin,administrator.name);
                 this.router.navigate(['/home']);
               })
               .catch(err=> console.log(err));
  }
  public setAdministratorToDatabase(admin, adminName) {
    const userRef: AngularFirestoreDocument<Administrator> = this.afs.doc(`administrators/${admin.uid}`);
    const data: Administrator = {
      uid: admin.uid,
      name: adminName,
      email: admin.email || null
    }
    return userRef.set(data);
  }
  public loginWithEmailAndPassword(_userloginModel: User) {
    console.log("Hey", _userloginModel);
    //this.afAuth.auth.signInWithEmailAndPassword(_userloginModel.email,_userloginModel.password)
  }
  public logoutUser() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/login']);
  }
}