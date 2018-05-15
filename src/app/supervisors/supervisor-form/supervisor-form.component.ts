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
  private showErrowForm: boolean = false;
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
             birthDateFormControl: ['', Validators.required],   
             cityFormControl: ['', Validators.required],
             stateFormControl: ['', Validators.required],  
             addressFormControl:['', Validators.required],                      
             contractDateBeginFormControl: ['', Validators.required],             
             contractDateExpFormControl: ['', Validators.required],
             postalCodeFormControl: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(5)])],             
             curpFormControl:['', Validators.compose([Validators.required, Validators.minLength(13), Validators.maxLength(13)])],             
             nssFormControl:['', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11)])],            
             rfcFormControl:['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
             salaryFormControl:['', Validators.required], 
             salaryTypeFormControl: ['', Validators.required],   
             imageFormControl: ['', Validators.required]                      
      });
   } 
   public registerAccountWithEmailAndPassword( ): void { 
    if(this.registrateSupervisorForm.valid && this.generatedPasswordEmployee !=''){     
          const formModel = this.registrateSupervisorForm.value;
          const supervisorModel: Supervisor = { 
          email: formModel.emailFormControl as string,
          name:  formModel.nameFormControl as string,
          birthDate: formModel.birthDateFormControl as Date,
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
          password: this.generatedPasswordEmployee
      }
      this._authService.createUserWithEmailAndPassword(supervisorModel)
      .then(e => console.log(e));
    }
    else if(this.registrateSupervisorForm.valid && this.generatedPasswordEmployee===''){
      this.showErrowForm = true
    }
  }
  public generatePassword(){
     const name: string = this.registrateSupervisorForm.controls.nameFormControl.value

  }
}
