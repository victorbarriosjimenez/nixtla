import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MaterialElementsModule  } from '../shared/material-elements.module';
import { AuthService } from './authentication.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  imports: [
    CommonModule,
    MaterialElementsModule,
    AngularFireAuthModule,
    AngularFirestoreModule
   ],
  declarations: [
    RegisterComponent,
    LoginComponent,
    HomeComponent
  ],
  exports: [
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
