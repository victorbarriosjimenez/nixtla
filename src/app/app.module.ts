import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RoutesModule } from './app.routes';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { PromotersModule } from './promoters/promoters.module';
import { SupervisorsModule } from './supervisors/supervisors.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BranchesModule } from './branches/branches.module';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),   
    CommonModule,
    RouterModule,  
    BranchesModule,  
    SupervisorsModule,            
    PromotersModule, 
    RoutesModule,    
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AuthModule
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
