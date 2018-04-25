import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public isLoginIn: boolean = false;
  constructor(private _formBuilder: FormBuilder,
              private _authService: AuthService,
              private _router: Router) { }
  ngOnInit() {    
    this.createsLoginForm();
  }
  public createsLoginForm( ): void { 
    this.loginForm =  this._formBuilder.group({
      email:['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
  }
  public loginToAccountWithEmailAndPassword( ): void { 
    this.isLoginIn = true;
    
   /* this._authService.emailLogin(
        this.loginForm.value['email'],
        this.loginForm.value['password']
    ).then( ( )=>{
      this.isLoginIn = false 
    }
    ).catch( () => {
      this.isLoginIn = false 
    });
  }*/
}
