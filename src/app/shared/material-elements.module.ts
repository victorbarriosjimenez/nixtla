import { NgModule } from '@angular/core';
import {  
          MatButtonModule,
          MatInputModule          
        } 
        from '@angular/material';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule
  ], 
  declarations: [
],
  exports: [
    MatButtonModule,
    MatInputModule
  ]
})
export class MaterialElementsModule { }