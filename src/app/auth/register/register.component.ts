import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup,FormControl } from '@angular/forms';
import { AuthService } from '../authentication.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registrationForm: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }
  ngOnInit() {
    this.createForm();
  }
  public createForm( ): void {
    this.registrationForm =  this._formBuilder.group({
             emailFormControl:['', Validators.compose([Validators.required, Validators.email])],
             nameFormControl:['',Validators.required],
             passwordFormControl: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])],
      });
   } 
  public registerAccountWithEmailAndPassword(): void { 
    const formModel = this.registrationForm.value;
    const UserModel = { 
        email: formModel.emailFormControl as string,
        name:  formModel.usernameFormControl as string,
        password: formModel.passwordFormControl as string
    }
  }
}