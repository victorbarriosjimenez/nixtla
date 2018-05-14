import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/authentication.service';
import { FormBuilder, Validators, FormGroup,FormControl } from '@angular/forms';
import { Supervisor, stateGroups } from '../../models/user';
@Component({
  selector: 'app-supervisor-form',
  templateUrl: './supervisor-form.component.html',
  styleUrls: ['./supervisor-form.component.css']
})
export class SupervisorFormComponent implements OnInit {
  public registrateSupervisorForm: FormGroup;  
  private generatedEmployeeKey: string = '';
  private generatedPasswordEmployee: string = '';
  private stateGroups: any[] = stateGroups;
  constructor(private _authService: AuthService, private _formBuilder: FormBuilder) { }
  ngOnInit() {
    this.createForm();    
  }
  public createForm( ): void {
    this.registrateSupervisorForm =  this._formBuilder.group({
             emailFormControl:['', Validators.compose([Validators.required, Validators.email])],
             nameFormControl:['', Validators.required],    
             cityFormControl: ['', Validators.required],
             stateFormControl: ['', Validators.required],  
             addressFormControl:['', Validators.required],                      
             curpFormControl:['', Validators.required],
             contractDateBeginFormControl: ['', Validators.required],             
             contractDateExpFormControl: ['', Validators.required],
             postalCodeFormControl: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(5)])],             
             nssFormControl:['', Validators.required],            
             rfcFormControl:['', Validators.required],
             salaryFormControl:['', Validators.required], 
             salaryType: ['', Validators.required],   
             imageFormControl: ['', Validators.required],                      
             passwordFormControl: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])]
      });
   } 
   public registerAccountWithEmailAndPassword( ): void { 
    const formModel = this.registrateSupervisorForm.value;
    const supervisorModel: Supervisor = { 
        email: formModel.emailFormControl as string,
        name:  formModel.nameFormControl as string,
        city: formModel.cityFormControl as string,
        state: formModel.stateFormControl as string,  
        address: formModel.addressFormControl as string,                      
        curp: formModel.curpFormControl as string,
        contractDateBegin: formModel.contractDateBeginFormControl as Date,             
        contractDateExp: formModel.contractDateExpFormControl as Date,
        postalCode: formModel.postalCodeFormControl as string,             
        nss:formModel.nssFormControl as string,            
        rfc: formModel.rfcFormControl as string,
        salary: formModel.salaryFormControl as number, 
        salaryType: formModel.salaryType as string,   
        image: formModel.imageFormControl as string,    
        employeeKey: this.generatedEmployeeKey,
        password: formModel.password as string
    }
    this._authService.createUserWithEmailAndPassword(supervisorModel)
        .then(e => console.log(e));
  }
  public generatePassword(){
    
  }
}
