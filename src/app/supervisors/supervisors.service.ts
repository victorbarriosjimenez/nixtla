import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {  Administrator, Promoter , Supervisor } from '../models/user';
@Injectable()
export class SupervisorsService {
  supervisorsReference:   AngularFirestoreCollection<Supervisor> = this.afs.collection<Supervisor>('branches');
  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {
  }
  
}