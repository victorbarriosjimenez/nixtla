import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MaterialElementsModule  } from '../shared/material-elements.module';
import { AuthService } from './authentication.service';
import { NavigationComponent } from './navigation/navigation.component';
@NgModule({
  imports: [
    CommonModule, 
    MaterialElementsModule,
    FormsModule,
    ReactiveFormsModule
   ],
  declarations: [
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavigationComponent
  ],
  exports: [
  ],
  providers: [ 
    AuthService
  ]
})
export class AuthModule { }
