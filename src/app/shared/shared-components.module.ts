import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthService } from '../auth/authentication.service';
import { MaterialElementsModule  } from './material-elements.module';
import { FloatingButtonComponent } from './floating-button/floating-button.component';
@NgModule({
  imports: [
    CommonModule,
    MaterialElementsModule
  ], 
  declarations: [
    NavigationComponent,
    FloatingButtonComponent
  ],
  exports: [
    NavigationComponent,
    FloatingButtonComponent
  ],
  providers: [
    AuthService
  ]
})
export class SharedComponentsModule { }