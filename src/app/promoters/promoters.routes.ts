import { NgModule } from '@angular/core';
import { RouterModule, Routes , CanActivate } from '@angular/router';
import { AuthGuard } from '../auth/authentication.guard';
import { PromoterComponent } from './promoter/promoter.component'
import { PromoterDetailsComponent } from './promoter-details/promoter-details.component';
const promoterRoutes: Routes = [  
  { path: 'promoters' , component: PromoterComponent, canActivate: [AuthGuard], data: { animation: 'settings' } },
  { path: 'promoters/:uid' , component: PromoterDetailsComponent, canActivate: [AuthGuard], data: { animation: 'settings' } }  
];
@NgModule({
  imports: [
    RouterModule.forChild(promoterRoutes)    
  ],
  exports: [
    RouterModule
  ]
})
export class PromotersRoutesModule { }