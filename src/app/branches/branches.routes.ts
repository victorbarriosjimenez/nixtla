import { NgModule } from '@angular/core';
import { RouterModule, Routes , CanActivate } from '@angular/router';
import { BranchesComponent } from './branches/branches.component';
const appRoutes: Routes = [  
        { path: '/branches' , component: BranchesComponent },
];
@NgModule({
  imports: [
  ],
  exports: [
    RouterModule
  ]
})
export class BranchesRoutesModule { }