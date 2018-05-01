import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 
import { SupervisorsService } from './supervisors.service';
@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule
   ],
  declarations: [
  ],
  exports: [
  ],
  providers: [ 
    SupervisorsService
  ]
})
export class SupervisorsModule { }
 