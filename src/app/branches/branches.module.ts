import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 
import { MaterialElementsModule  } from '../shared/material-elements.module';
import { BranchesComponent } from './branches/branches.component';
import { BranchDetailsComponent } from './branch-details/branch-details.component';
import { BranchFormComponent } from './branch-form/branch-form.component';
import { BranchesRoutesModule } from './branches.routes';
import { BranchesService } from './branches.service';
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
    BranchesService
  ]
})
export class BranchesModule { }
