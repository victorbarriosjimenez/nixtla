import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 
import { PromotersRoutesModule } from './promoters.routes';
import { PromoterComponent } from './promoter/promoter.component';
import { PromoterDetailsComponent } from './promoter-details/promoter-details.component';
import { AuthGuard } from '../auth/authentication.guard';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { PromotersService } from './promoters.service';
import { MaterialElementsModule } from '../shared/material-elements.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { DemoUtilsModule } from './demo-utils/module';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule, 
    CalendarModule.forRoot(), 
    FormsModule,
    PromotersRoutesModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    MaterialElementsModule,
    DemoUtilsModule
   ],
  declarations: [
    PromoterComponent,
    PromoterDetailsComponent
  ],
  providers: [ 
    AuthGuard,
    PromotersService
  ]
})
export class PromotersModule { }
 