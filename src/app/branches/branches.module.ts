import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 
import { MaterialElementsModule  } from '../shared/material-elements.module';
import { BranchesComponent } from './branches/branches.component';
import { BranchDetailsComponent } from './branch-details/branch-details.component';

@NgModule({
  imports: [
    CommonModule, 
    MaterialElementsModule,
    FormsModule,
    ReactiveFormsModule
   ],
  declarations: [,
    BranchesComponent,
    BranchDetailsComponent
],
  exports: [
  ],
  providers: [ 

  ]
})
export class AuthModule { }
