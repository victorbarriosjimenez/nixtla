import { NgModule } from '@angular/core';
import {  
          MatButtonModule,
          MatInputModule,
          MatIconModule,
          MatTooltipModule,
          MatSelectModule,
          MatRadioModule,
          MatNativeDateModule,
          MatDatepickerModule,
          MatSnackBarModule
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
    MatDatepickerModule,
    MatSnackBarModule     
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
    MatSnackBarModule,   
    MatDatepickerModule      
  ],
  providers: [
    AuthService
  ]
})
export class MaterialElementsModule { }