import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 
import { PromotersRoutesModule } from './promoters.routes';
import { PromoterComponent } from './promoter/promoter.component';
import { PromoterDetailsComponent } from './promoter-details/promoter-details.component';
import { AuthGuard } from '../auth/authentication.guard';
import { SharedComponentsModule } from '../shared/shared-components.module';
@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    PromotersRoutesModule,
    ReactiveFormsModule,
    SharedComponentsModule
   ],
  declarations: [
    PromoterComponent,
    PromoterDetailsComponent,
    PromoterDetailsComponent
  ],
  providers: [ 
    AuthGuard
  ]
})
export class PromotersModule { }
 