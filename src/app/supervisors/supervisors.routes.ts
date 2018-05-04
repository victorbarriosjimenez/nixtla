import { NgModule } from '@angular/core';
import { RouterModule, Routes , CanActivate } from '@angular/router';
import { SupervisorsComponent } from './supervisors/supervisors.component';
import { AuthGuard } from '../auth/authentication.guard';
const supervisorsRoutes: Routes = [  
    { path: 'supervisors' , component: SupervisorsComponent, canActivate: [AuthGuard]  }
];
@NgModule({
  imports: [
    RouterModule.forChild(supervisorsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SupervisorsRoutesModule { }