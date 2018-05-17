import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {  Administrator, Promoter , Supervisor } from '../models/user';
import { Event } from '../models/event';
@Injectable()
export class PromotersService {
  public promotersReference:  AngularFirestoreCollection<Promoter> = this.afs.collection<Promoter>('promoters');  
  public eventsReference:  AngularFirestoreCollection<Event> = this.afs.collection<Event>('events');    
  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {
  }
  public getPromoter(uid: string): Observable<any> {
    return this.afs.doc(`promoters/${uid}`).valueChanges();
  }
  public setNewEvent(event: Event){ 
      this.eventsReference.add(event)
          .then(() => this.router.navigate(['/home']));
  }
}