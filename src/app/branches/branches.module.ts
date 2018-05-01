import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 
import { MaterialElementsModule  } from '../shared/material-elements.module';
import { BranchesComponent } from './branches/branches.component';
import { BranchDetailsComponent } from './branch-details/branch-details.component';
import { BranchFormComponent } from './branch-form/branch-form.component';
import { BranchesRoutesModule } from './branches.routes';
@NgModule({
  imports: [
    CommonModule, 
    MaterialElementsModule,
    FormsModule,
    ReactiveFormsModule,
    BranchesRoutesModule
   ],
  declarations: [,
    BranchesComponent,
    BranchDetailsComponent,
    BranchFormComponent
],
  exports: [
  ],
  providers: [ 

  ]
})
export class AuthModule { }
