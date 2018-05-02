import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MaterialElementsModule  } from '../shared/material-elements.module';
import { AuthService } from './authentication.service';
import { NavigationComponent } from './navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './authentication.guard';
import { SettingsComponent } from './settings/settings.component';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule, 
    MaterialElementsModule,
    FormsModule,
    ReactiveFormsModule
   ],
  declarations: [
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavigationComponent,
    SettingsComponent
],
  exports: [
  ],
  providers: [ 
    AuthService,
    AuthGuard
  ]
})
export class AuthModule { }
