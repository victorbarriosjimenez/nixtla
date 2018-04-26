import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registrationForm: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
  }
  public createForm( ): void {
    this.registrationForm =  this._formBuilder.group({
             emailFormControl:['', Validators.compose([Validators.required, Validators.email])],
             usernameFormControl:['', Validators.compose([Validators.required, Validators.minLength(6)])],
             countryFormControl:['', Validators.required],
             passwordFormControl: ['', Validators.required]
     });
   }

}
