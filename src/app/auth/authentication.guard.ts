import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService} from './authentication.service';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
@Injectable()
export class AuthGuard  {
  constructor(private auth: AuthService, private router: Router) {}
  /*canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
      return this.auth.user
           .take(1)
           .map(user => !!(user && user.catchPhrase) )
           .do(loggedIn => {
             if (!loggedIn) {
               this.router.navigate(['/login']);
             }
         })

  }*/
}