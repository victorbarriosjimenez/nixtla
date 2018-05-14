import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/authentication.service';
import { FormBuilder, Validators, FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-supervisor-form',
  templateUrl: './supervisor-form.component.html',
  styleUrls: ['./supervisor-form.component.css']
})
export class SupervisorFormComponent implements OnInit {
  public registrateSupervisorForm: FormGroup;  
  constructor(private _authService: AuthService, private _formBuilder: FormBuilder) { }
  ngOnInit() {
    this.createForm();    
  }
  public createForm( ): void {
    this.registrateSupervisorForm =  this._formBuilder.group({
             emailFormControl:['', Validators.compose([Validators.required, Validators.email])],
             nameFormControl:['', Validators.required],
             passwordFormControl: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])],
      });
   } 
}
