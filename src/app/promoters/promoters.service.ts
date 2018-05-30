import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {  Administrator, Promoter , Supervisor } from '../models/user';
import { Workday } from '../models/workday';
import { Event } from '../models/event';
import { getMatIconFailedToSanitizeError } from '@angular/material';
import { CalendarEvent } from 'calendar-utils';
@Injectable()
export class PromotersService {
  public promotersReference:  AngularFirestoreCollection<Promoter> = this.afs.collection<Promoter>('promoters');  
  public promoterRef: AngularFirestoreDocument<Promoter>;
  public eventsReference:  AngularFirestoreCollection<Event> = this.afs.collection<Event>('events'); 
  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {
  }
  public getPromoter(uid: string): Observable<any> {
    return this.afs.doc(`promoters/${uid}`).valueChanges();
  }
  public setNewEvent(event: Event, promoter: Promoter){
    this.eventsReference.add(event)
          .then(() =>{
              this.updatePromoterStatus(promoter);
              this.router.navigate(['/']);
          });
  }
  public updatePromoterStatus(promoter: Promoter) {
      this.promoterRef = this.afs.doc(`promoters/${promoter.uid}`);
      const data = {
          status: false
      }
      return this.promoterRef.update(data);
  }
  public getPromoterWordkdays(promoterUid: string) {
    return this.afs.collection<CalendarEvent>('calendar_events', ref => ref.where('promoter','==',promoterUid))
                   .valueChanges();
  }
}