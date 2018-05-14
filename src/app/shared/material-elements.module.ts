import { NgModule } from '@angular/core';
import {  
          MatButtonModule,
          MatInputModule,
          MatIconModule,
          MatTooltipModule,
          MatSelectModule,
          MatRadioModule,
          MatNativeDateModule,
          MatDatepickerModule
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
    MatTooltipModule,
    MatSelectModule,
    MatRadioModule,
    MatNativeDateModule,    
    MatDatepickerModule     
  ], 
  declarations: [
],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule,
    MatRadioModule,
    MatNativeDateModule,
    
    MatDatepickerModule      
  ],
  providers: [
    AuthService
  ]
})
export class MaterialElementsModule { }