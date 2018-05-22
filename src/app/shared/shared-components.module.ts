import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthService } from '../auth/authentication.service';
import { MaterialElementsModule  } from './material-elements.module';
import { FloatingButtonComponent } from './floating-button/floating-button.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EventFormComponent } from './event-form/event-form.component';
@NgModule({
  imports: [
    CommonModule,
    MaterialElementsModule
  ], 
  declarations: [
    NavigationComponent,
    FloatingButtonComponent,
    NotFoundComponent,
    EventFormComponent 
  ],
  exports: [
    NavigationComponent,
    FloatingButtonComponent,
    EventFormComponent
  ],
  providers: [
    AuthService
  ]
})
export class SharedComponentsModule { }