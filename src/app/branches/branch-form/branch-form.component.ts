import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BranchesService } from '../branches.service';
@Component({
  selector: 'app-branch-form',
  templateUrl: './branch-form.component.html',
  styleUrls: ['./branch-form.component.css']
})
export class BranchFormComponent implements OnInit {
  public branchForm: FormGroup;
  public lat: number = 19.5015841;
  public lng: number = -99.4042516;
  constructor(private _formBuilder: FormBuilder) { }
  ngOnInit() { 
    this.createForm();
  } 
  public createForm( ): void {
    this.branchForm =  this._formBuilder.group({
        nameFormControl:['', Validators.required],
        cityFormControl: ['', Validators.required],
        stateFormControl: ['', Validators.required],
        supervisorFormControl: [''],
        address1FormControl:['', Validators.required],     
        address2FormControl:[''],
        postalCodeFormControl: ['', Validators.compose([Validators.required, Validators.maxLength(5)])],
        contactFormControl: ['', Validators.compose([Validators.required, Validators.maxLength(10)]) ],
        contactEmailFormControl: ['',Validators.compose([Validators.required, Validators.email])],     
        scheduleMonFriOpenFormControl: ['', Validators.required], 
        scheduleMonFriCloseFormControl: ['', Validators.required],         
        scheduleSatOpenFormControl: [''],
        scheduleSatCloseFormControl: [''],        
        scheduleSunOpenFormControl: [''],
        scheduleSunCloseFormControl: [''],        
        detailsFormControl: [''],
    });
  }
  public createNewBranch(){
     
  }
}
