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
          MatSnackBarModule,
          MatTableModule,
          MatProgressSpinnerModule,
          MatPaginatorModule,
          MatTabsModule
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
    MatSnackBarModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatTabsModule    
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
    MatDatepickerModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatTabsModule     
   ],
  providers: [
    AuthService
  ]
})
export class MaterialElementsModule { }