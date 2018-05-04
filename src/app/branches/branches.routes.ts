import { NgModule } from '@angular/core';
import { RouterModule, Routes , CanActivate } from '@angular/router';
import { BranchesComponent } from './branches/branches.component';
import { AuthGuard } from '../auth/authentication.guard';
const appRoutes: Routes = [  
        { path: '/branches' , component: BranchesComponent, canActivate: [AuthGuard] },
];
@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BranchesRoutesModule { }