import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  imports: [
    CommonModule,
   ],
  declarations: [
    RegisterComponent,
    LoginComponent,
    HomeComponent
  ],
  exports: [
    
  ],
  providers: [
    
  ]
})
export class AuthModule { }
