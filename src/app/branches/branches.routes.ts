import { NgModule } from '@angular/core';
import { RouterModule, Routes , CanActivate } from '@angular/router';
import { BranchesComponent } from './branches/branches.component';
import { AuthGuard } from '../auth/authentication.guard';
import { BranchFormComponent } from './branch-form/branch-form.component';
import { BranchDetailsComponent } from './branch-details/branch-details.component';
const branchesRoutes: Routes = [  
       { path: 'branches' , component: BranchesComponent, canActivate: [AuthGuard] },
       { path: 'branches/new' , component: BranchFormComponent, canActivate: [AuthGuard] },
       { path: 'branches/:uid' , component: BranchDetailsComponent, canActivate: [AuthGuard] },       
      
];
@NgModule({
  imports: [
    RouterModule.forChild(branchesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BranchesRoutesModule { }