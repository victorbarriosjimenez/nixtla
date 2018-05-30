import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { MaterialElementsModule  } from '../shared/material-elements.module';
import { BranchesComponent } from './branches/branches.component';
import { BranchDetailsComponent } from './branch-details/branch-details.component';
import { BranchFormComponent } from './branch-form/branch-form.component';
import { BranchesRoutesModule } from './branches.routes';
import { BranchesService } from './branches.service';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/authentication.guard';
import { AuthModule } from '../auth/auth.module';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  imports: [
    CommonModule, 
    MaterialElementsModule,
    BranchesRoutesModule,        
    FormsModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    AgmCoreModule
   ],
  declarations: [
    BranchesComponent,
    BranchDetailsComponent,
    BranchFormComponent
],
  providers: [ 
    AuthGuard,
    BranchesService
  ],
  exports: [
    BranchFormComponent
  ]
})
export class BranchesModule { }
