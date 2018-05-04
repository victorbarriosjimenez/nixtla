import { NgModule } from '@angular/core';
import {  
          MatButtonModule,
          MatInputModule,
          MatIconModule,
          MatTooltipModule
        } 
        from '@angular/material';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth/authentication.service';
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule    
  ], 
  declarations: [
],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
  ],
  providers: [
    AuthService
  ]
})
export class MaterialElementsModule { }