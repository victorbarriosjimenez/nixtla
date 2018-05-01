import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 
import { MaterialElementsModule  } from '../shared/material-elements.module';

@NgModule({
  imports: [
    CommonModule, 
    MaterialElementsModule,
    FormsModule,
    ReactiveFormsModule
   ],
  declarations: [

  ],
  exports: [
  ],
  providers: [ 

  ]
})
export class AuthModule { }
