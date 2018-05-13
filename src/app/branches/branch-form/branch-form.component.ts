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
        { sched: '9:00 AM', valueTime: '9:00:00' },
        { sched: '10:00 AM', valueTime: '10:00:00' },
        { sched: '11:00 AM', valueTime: '11:00:00'},       
        { sched: '12:00 AM', valueTime: '12:00:00' }
  ];
  public closingSchedules = [
        { sched: '4:00 PM', valueTime: '16:00:00'},
        { sched: '5:00 PM', valueTime: '17:00:00'},
        { sched: '6:00 PM', valueTime: '18:00:00'},
        { sched: '7:00 PM', valueTime: '19:00:00'},
        { sched: '8:00 PM', valueTime: '20:00:00'},
        { sched: '9:00 PM', valueTime: '21:00:00'}            
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
        supervisorMinFormControl: ['', Validators.required],
        supervisorMaxFormControl: ['', Validators.required],     
        promotersMinFormContron:['', Validators.required],
        promotersMaxFormContron:['', Validators.required],           
        address1FormControl:['', Validators.required],     
        address2FormControl:[''],
        postalCodeFormControl: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(5)])],
        contactFormControl: ['', Validators.compose([Validators.required, Validators.maxLength(10)]) ],
        contactEmailFormControl: ['',Validators.compose([Validators.required, Validators.email])],     
        scheduleMonFriOpenFormControl: ['', Validators.required], 
        scheduleMonFriCloseFormControl: ['', Validators.required],         
        scheduleSatOpenFormControl: ['', Validators.required],
        scheduleSatCloseFormControl: ['', Validators.required],        
        scheduleSunOpenFormControl: ['',Validators.required],
        scheduleSunCloseFormControl: ['',Validators.required],        
        detailsFormControl: ['', Validators.required],
        imageFormControl: ['', Validators.required],
        extraHoursFormControl: ['', Validators.required],
    });
  }
  public setBranchCoordinates($event) {
    this.hasMarked = true;
    this.showMapError = true ? false : true;  
    this.markerLat = $event['coords'].lat;
    this.markerLng = $event['coords'].lng;
  }
  public createNewBranch(){  
      if(this.branchForm.valid && this.hasMarked){
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
    else if(this.branchForm.valid && !this.hasMarked){
        this.showMapError = true
    }
  }
}
