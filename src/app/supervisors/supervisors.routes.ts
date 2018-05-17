import { NgModule } from '@angular/core';
import { RouterModule, Routes , CanActivate } from '@angular/router';
import { SupervisorsComponent } from './supervisors/supervisors.component';
import { AuthGuard } from '../auth/authentication.guard';
import { SupervisorFormComponent } from './supervisor-form/supervisor-form.component';
import { SupervisorDetailsComponent } from './supervisor-details/supervisor-details.component';
const supervisorsRoutes: Routes = [  
    { path: 'supervisors' , component: SupervisorsComponent, canActivate: [AuthGuard] },
    { path: 'supervisors/:uid', component: SupervisorDetailsComponent, canActivate: [AuthGuard] }
    { path: 'new-employee' , component: SupervisorFormComponent, canActivate: [AuthGuard] }    
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