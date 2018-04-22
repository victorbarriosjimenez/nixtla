import { NgModule } from '@angular/core';
import {  
          MatButtonModule,
          MatFormFieldModule,
          MatCardModule,      
          MatIconModule,
          MatInputModule,
          MatProgressSpinnerModule,
          MatSelectModule,
          MatStepperModule,
          MatTooltipModule,
          MatExpansionModule,
          MatSnackBarModule,
          MatTabsModule,
          MatProgressBarModule,
          MatToolbarModule,
          MatDialogModule,
          MatMenuModule,
          MatCheckboxModule,
          
        } from '@angular/material';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatStepperModule,
    MatTooltipModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatTabsModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatDialogModule,
    MatMenuModule,
    MatCheckboxModule
    
  ], 
  declarations: [
    FooterComponent,
    VotingComponent,
    FollowButtonComponent
],
  exports: [
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatStepperModule,
    MatTooltipModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatTabsModule,
    FooterComponent,
    VotingComponent,
    MatProgressBarModule,
    MatToolbarModule,
    MatDialogModule ,
    MatMenuModule, 
    FollowButtonComponent,
    MatCheckboxModule
  ]
})
export class MaterialElementsModule { }