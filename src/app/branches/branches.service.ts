import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Branch } from '../models/branch';
@Injectable()
export class BranchesService {
  branchesRef: AngularFirestoreCollection<Branch> = this.afs.collection<Branch>('branches'); 
  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {  }
  public setNewBranch(branch: Branch){ 
      this.branchesRef.add(branch)
          .then(() => this.router.navigate(['/branches']));
  }
}

