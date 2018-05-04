import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 
import { SupervisorsService } from './supervisors.service';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { SupervisorsRoutesModule } from './supervisors.routes';
import { SupervisorDetailsComponent } from './supervisor-details/supervisor-details.component';
import { SupervisorsComponent } from './supervisors/supervisors.component';
import { SupervisorFormComponent } from './supervisor-form/supervisor-form.component';
import { AuthGuard } from '../auth/authentication.guard';
import { MaterialElementsModule } from '../shared/material-elements.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,    
    SupervisorsRoutesModule,     
    MaterialElementsModule,
    ReactiveFormsModule,
    SharedComponentsModule
   ],
  declarations: [
    SupervisorsComponent,
    SupervisorDetailsComponent,
    SupervisorFormComponent
  ],
  providers: [ 
    AuthGuard,
    SupervisorsService
  ]
})
export class SupervisorsModule { }
 