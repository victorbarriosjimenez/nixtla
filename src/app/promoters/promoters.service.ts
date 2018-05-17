import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {  Administrator, Promoter , Supervisor } from '../models/user';
@Injectable()
export class PromotersService {
  public promotersReference:  AngularFirestoreCollection<Promoter> = this.afs.collection<Promoter>('promoters');  
  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {
  }
  public getPromoter(uid: string): Observable<any> {
    return this.afs.doc(`promoters/${uid}`).valueChanges();
  }
}