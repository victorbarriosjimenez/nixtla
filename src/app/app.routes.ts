import { NgModule } from '@angular/core';
import { RouterModule, Routes , CanActivate } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './auth/home/home.component';
import { AuthGuard } from './auth/authentication.guard';
import { SettingsComponent } from './auth/settings/settings.component';
import { AuthFollow } from './auth/authentication.follow.guard';
const appRoutes: Routes = [  
  { path: '', component: HomeComponent, canActivate: [AuthGuard], data: { animation: 'home' } },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard], data: { animation: 'settings' } },  
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutesModule { }