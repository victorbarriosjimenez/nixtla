import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Branch } from '../models/branch';
export interface dayOff {
    branchUid: string,
    uid?: string,
    dayOffDate: Date
} 
@Injectable()
export class BranchesService {
  branchesRef: AngularFirestoreCollection<Branch> = this.afs.collection<Branch>('branches'); 
  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {  }
  public setNewBranch(branch: Branch){ 
    const uid: string = this.afs.createId();
    branch.uid = uid
    this.branchesRef.doc(uid).set(branch)
        .then(() => this.router.navigate(['/branches']));
  }
  public getBranch(uid: string) {
    return this.afs.doc(`branches/${uid}`).valueChanges();    
  }
  public setNewDayOff(data: dayOff) {
      let branchDaysOffRef = this.afs.collection<dayOff>(`branches/${data.branchUid}/daysOff`);
      let uid = this.afs.createId();
      data.uid = uid
      return branchDaysOffRef.doc(uid).set(data);
  }
  public getListOfDaysOff(uid: string){
    return this.afs.collection<dayOff>(`branches/${uid}/daysOff`).valueChanges();
  }
  public deleteDayOffFromList(dayOff: dayOff){
    return this.afs.collection('branches')
                   .doc(dayOff.branchUid)
                   .collection('daysOff')
                   .doc(dayOff.uid)
                   .delete();
  }
  public editBranch(branch: Branch, branchUid: string){
    return this.afs.collection('branches')
                   .doc(branchUid)
                   .update(branch)
                   .then(() => this.router.navigate(['/branches']));
  }
  public deleteBranch(branch: Branch,uid: string){
    return this.afs.collection('branches')
                   .doc(uid)
                   .delete()
                   .then(() => this.router.navigate(['/branches']));
  }
}

