import { NgModule } from '@angular/core';
import { RouterModule, Routes , CanActivate } from '@angular/router';
import { SupervisorsComponent } from './supervisors/supervisors.component';
const appRoutes: Routes = [  
   { path: '/supervisors' , component: SupervisorsComponent  }
];
@NgModule({
  imports: [
  ],
  exports: [
    RouterModule
  ]
})
export class SupervisorsRoutesModule { }