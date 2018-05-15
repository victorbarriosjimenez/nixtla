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
  public authState: any = null;
  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {
                this.afAuth.authState.subscribe((auth) => {
                   this.authState = auth
              }); 
  }
  public createUserWithEmailAndPassword(administrator: Administrator) {
    return this.afAuth.auth.createUserWithEmailAndPassword(administrator.email,administrator.password)
               .then(admin => {
                 this.setAdministratorToDatabase(admin,administrator.name);
                 this.router.navigate(['/settings']);
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
  public createEmployeeWithEmailAndPassword(employee: Supervisor | Promoter){
    return this.afAuth.auth.createUserWithEmailAndPassword(employee.email,employee.password)
               .then(user => {
                 this.setAdministratorToDatabase(user,employee);
               })
               .catch(err=> console.log(err));
  }
  public setEmployeeToDatabase(user,employee: Supervisor | Promoter) {
    const employeeRef: AngularFirestoreDocument<Supervisor> = this.afs.doc(`supervisors/${user.uid}`);
    const data = {
      uid: user.uid,
      email: employee.email,
      name:  employee.name ,
      birthDate: employee.birthDate ,
      city: employee.city,
      state: employee.state ,  
      address: employee.address,                      
      curp: employee.curp,
      contractDateBegin: employee.contractDateBegin,             
      contractDateExp: employee.contractDateExp,
      postalCode: employee.postalCode ,             
      nss: employee.nss,            
      rfc: employee.rfc,  
      salary: employee.salary, 
      salaryType: employee.salaryType,   
      image: employee.image   
    }
    return employeeRef.set(data);
  }
  public loginWithEmailAndPassword(_userloginModel: User) {
    this.afAuth.auth.signInWithEmailAndPassword(_userloginModel.email,_userloginModel.password)
        .then( user => {
              this.router.navigate(['/']);
        });
  }
  public getAdministratorDocument(uid): Observable<Administrator>{
   return  this.afs.doc(`administrators/${uid}`).valueChanges();
  }
  public logoutUser() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/login']);
  }
}