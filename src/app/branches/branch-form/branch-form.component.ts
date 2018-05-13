import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BranchesService } from '../branches.service';
import * as moment from 'moment';
@Component({
  selector: 'app-branch-form',
  templateUrl: './branch-form.component.html',
  styleUrls: ['./branch-form.component.css']
})
export class BranchFormComponent implements OnInit {
  public branchForm: FormGroup;
  public hasMarked: boolean = false;
  public showMapError: boolean = false;
  public markerLat: number;
  public kaka = "inactivo";
  public branch: any;
  public markerLng: number;
  public lat: number = 19.5015841;
  public lng: number = -99.4042516;
  public openSchedules = [
        { sched: '9:00 AM' },
        { sched: '10:00 AM' },
        { sched: '11:00 AM' },       
        { sched: '12:00 AM' }
  ];
  public closingSchedules = [
        { sched: '4:00 PM'},
        { sched: '5:00 PM'},
        { sched: '6:00 PM'},
        { sched: '7:00 PM'},
        { sched: '8:00 PM'},
        { sched: '9:00 PM'}            
  ];
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
        postalCodeFormControl: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(5)])],
        contactFormControl: ['', Validators.compose([Validators.required, Validators.maxLength(10)]) ],
        contactEmailFormControl: ['',Validators.compose([Validators.required, Validators.email])],     
        scheduleMonFriOpenFormControl: ['', Validators.required], 
        scheduleMonFriCloseFormControl: ['', Validators.required],         
        scheduleSatOpenFormControl: ['', Validators.required],
        scheduleSatCloseFormControl: ['', Validators.required],        
        scheduleSunOpenFormControl: [''],
        scheduleSunCloseFormControl: [''],        
        detailsFormControl: ['', Validators.required],
        imageFormControl: ['', Validators.required]
    });
  }
  public setBranchCoordinates($event) {
    this.hasMarked = this.branchForm.valid ? true : false;
    this.markerLat = $event['coords'].lat;
    this.markerLng = $event['coords'].lng;
  }
  public createNewBranch(){  
      const branchModelForm = this.branchForm.value
      this.branch = {
        name: branchModelForm.nameFormControl as string,
        city: branchModelForm.cityFormControl as string,
        state: branchModelForm.stateFormControl as string,
        address1: branchModelForm.address1FormControl as string,
        address2: branchModelForm.address2FormControl as string,
        postalCode: branchModelForm.postalCodeFormControl as string,
        contact: branchModelForm.contactFormControl as string,
        contactEmail: branchModelForm.contactEmailFormControl as string,
        details: branchModelForm.detailsFormControl as string,
        image: branchModelForm.imageFormControl as string,
        scheduleMonFriOpen: branchModelForm.scheduleMonFriOpenFormControl as string,
        scheduleMonFriClose: branchModelForm.scheduleMonFriCloseFormControl as string,
        scheduleSatOpen: branchModelForm.scheduleSatOpenFormControl as string,
        scheduleSatClose: branchModelForm.scheduleSatCloseFormControl as string,
        scheduleSunOpen: branchModelForm.scheduleSunOpenFormControl as string,
        scheduleSunClose: branchModelForm.scheduleSunCloseFormControl as string
      }
      console.log(this.branch);
  }
}
