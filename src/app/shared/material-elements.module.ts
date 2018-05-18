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
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { NotFoundComponent } from './not-found/not-found.component';
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
    MatTabsModule,
    MatAutocompleteModule
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
    MatTabsModule  ,
    MatAutocompleteModule        
   ],
  providers: [
    AuthService
  ]
})
export class MaterialElementsModule { }